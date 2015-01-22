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
		res.view();
	},

	upload: function (req, res, next) {
		req.file('avatar').upload({
			adapter: require('skipper-s3'),
			region: "us-west-2",
			key: 'AKIAJE2T5IEN45RVEINA',
			secret: '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',
			bucket: 'storage.segment.social'
		}, function callback(err, uploadedFiles) {
			if (err)
				return next(err);
			else {

				this.create(req.params.all(), uploadedFiles);

				res.redirect('/image/show/' + image.id);

				/*return res.ok({
					files: uploadedFiles,
					textParams: req.params.all()
				});*/
			}
		});
	},

	create: function (req, res, next, textParams, uploadedFiles) {

		textParams['path'] = uploadedFiles[0].extra.Location;

		Image.create(textParams, function imageCreated (err, image) {

			// If we have an error creating the user
			if (err) {
				console.log(err);
				req.session.flash = {
					err: err
				}

				// redirect back to user signup
				return res.redirect('/image/new');
			}

			// Create the user successfully and redirect to the show action
			//res.json(user);

			res.redirect('/image/show/' + image.id);
		});
	}
};
