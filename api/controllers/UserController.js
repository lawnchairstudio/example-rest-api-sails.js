/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	'new': function (req, res) {
		res.view();
	},

	create: function (req, res, next) {

		// Create a user using the new.ejs sign up form params
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
