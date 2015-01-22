/**
 * ImageController
 *
 * @description :: Server-side logic for managing images
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

		req.file('avatar').upload(function (err, files) {
			if (err) {
				console.log(err);
				req.session.flash = {
					err: "Failed to upload Image."
				}

				// redirect back to image creation
				return res.redirect('/image/new');
			} else {
				Image.create(req.params.all(), function imageCreated (err, image) {

					// If we have an error creating the image
					if (err) {
						console.log(err);
						req.session.flash = {
							err: "Failed to save uploaded Image to Database."
						}

						// redirect back to image creation
						return res.redirect('/image/new');
					}

					// Create the image successfully and redirect to the show action
					//res.json(user);

					res.redirect('/image/show/' + image.id);
				});
			}
		});
	}
};
