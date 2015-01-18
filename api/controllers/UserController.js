/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index: function (req, res, next) {
		User.find(function foundUsers (err, users) {
			if (err)
				return next(err);

			res.view({
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
				return res.redirect('/user/new');
			}

			// Create the user successfully and redirect to the show action
			res.json(user);
		});
	}
  
};
