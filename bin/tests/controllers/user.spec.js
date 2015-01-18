var controller = require('../../../api/controlers/UserController');
var sinon = require('sinon');
var assert = require('assert');

describe('The user controller', function () {
    describe('when we load the user page', function () {
        it ('should render the view', function () {
            var view = sinon.spy();
            controller.index(null, {
                view: view
            });
            assert.ok(view.called);
        });
    });
});
