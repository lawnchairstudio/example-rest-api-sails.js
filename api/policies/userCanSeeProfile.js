/**
* Allow a logged-in user to see, edit and update their own profile
* Allow admins to see everyone
*/

module.exports = function(req, res, ok) {

  var sessionUserMatchesId = req.session.User.id === req.param('id');
  var isAdmin = req.session.User.admin;

  // The requested id does not match the user's id,
  // and this is not an admin
  if (!(sessionUserMatchesId || isAdmin)) {
    var noRightsError = [{name: 'noRights', message: 'You must be an admin.', id: req.param('id'), id2: req.session.User.id}]
    req.session.flash = {
      err: noRightsError
    }
    res.redirect('/session/new');
    return;
  }

  ok();

};
