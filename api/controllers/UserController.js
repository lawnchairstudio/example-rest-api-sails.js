/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index: function (req, res, next) {
		User.find(function foundUsers (err, users) {
      if (err) {
				return next(err);
      }
			res.view({
				title: 'User List',
				users: users
			});
		});
	},

	'new': function (req, res) {
		res.view();
	},

	create: function (req, res, next) {

		User.create(req.params.all(), function userCreated (err, user) {

			// If we have an error creating the user
			if (err) {
				console.log(err);
				req.session.flash = {
					err: err
				}

				// redirect back to user signup
				return res.redirect('/register');
			}

			// Create the user successfully and redirect to the show action
			//res.json(user);

			res.redirect(user.id);
		});
	},

	profile: function (req, res, next) {
		User.findOne(req.param('id'), function foundUser (err,user) {
			if (err)
				return next(err);
			if (!user)
				return next();

			res.view({
				title: user.name,
				user: user
			});
		});
	},

	edit: function (req, res, next) {
		User.findOne(req.param('id'), function foundUser (err,user) {
			if (err)
				return next(err);
			if (!user)
				return next();

			res.view({
				title: 'Editing: ' + user.name,
				user: user
			});
		});
	},

	update: function (req, res, next) {
		User.update(req.param('id'), req.params.all(), function userUpdated(err) {
      if (err) {
				return res.redirect('/user/edit/' + req.param('id'));
      }
			res.redirect(req.param('id'))
		});
	},

	'delete': function (req, res, next) {
		User.findOne(req.param('id'), function foundUser(err, user) {

      if (err) {
				return next(err);
      }

      if (!user) {
				return next("User doesn't exist!");
      }

			User.destroy(req.param('id'), function userDeleted(err) {
				if(err)
					return next(err);
			});

			res.redirect('/user');
		});
	}

};
