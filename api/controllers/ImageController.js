/**
 * ImageController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index: function (req, res, next) {
		Image.find(function foundImages (err, images) {
			if (err) {
				return next(err);
			}
			res.view({
				title: 'Image List',
				images: images
			});
		});
	},

	'new': function (req, res) {
		User.findOne(req.param('id'), function foundUser (err, user) {
			res.view({
				title: user.name,
				user: user
			});
		});
	},

	create: function (req, res, next) {
		User.findOne(req.param('id'), function foundUser (err, user) {

			console.log("HELLO");

			if (err) {
				console.log(err);
				return next(err);
			} else {

				req.file('avatar').upload({
					adapter: require('skipper-s3'),
					region: "us-west-2",
					key: 'AKIAJE2T5IEN45RVEINA',
					secret: '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',
					bucket: 'storage.segment.social',
					maxBytes: 1000000
				}, function callback(err, uploadedFiles) {
					if (err) {
						console.log(err);
						return next(err);
					} else {
						var textParams = req.params.all();
						textParams['path'] = uploadedFiles[0].extra.Location;
						textParams['username'] = req.param('id');

						Image.create(textParams, function imageCreated (err, image) {

							// If we have an error creating the user
							if (err) {
								console.log(err);
								req.session.flash = {
									err: err
								}

								// redirect back to user signup
								return res.redirect('/image/new/' + req.param('id'));
							}

							// Create the user successfully and redirect to the show action
							//res.json(user);

							res.redirect('/');
						});

						/*return res.ok({
							files: uploadedFiles,
							textParams: req.params.all()
						});*/
					}
				});
			}
		});
	}
};
