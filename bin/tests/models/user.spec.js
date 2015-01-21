var User = require('../../../api/models/User');

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('User model —', function () {
  describe('Before the user is created', function () {
    
    /**
     * @description Test to make sure an error is thrown if there is 
     * no password. If an error is thrown, the test passes.
     */
    it('should be a password', function (done) {
        User.beforeCreate({
            password: null,
            confirmation: null
        }, function (error, user) {
          try {
            expect(user).to.be.null;
            expect(error).to.be.a('string');
            expect(error).to.equal('Password required.');
            done();
          } catch (error) {
            done(error);
          }
        })
    });

    /**
     * @description Test to make sure that the password will be 
     * encrypted. If the `encryptedPassword` and `password` are
     * different, the test passes.
     */
    it('should hash the password', function (done) {
        User.beforeCreate({
            password: 'password',
            confirmation: 'password'
        }, function (error, user) {

          if (!error) {
            try {
              assert.notEqual(user.password , 'password');
              done(); 
            } catch (error) {
              done(error);
            }
          } if (error) {
            done(error); // test fails
          }

        });
    });

    /**
     * @description Test to make sure that an error will be thrown
     * if the password and the password confirmation are the not
     * same. If an error is thrown, the test passes.
     */
    it('should not allow different passwords', function (done) {
      User.beforeCreate({
          password: 'password',
          confirmation: 'is different'
      }, function (error, user) {

        if (error) {
          expect(user).to.be.null;
          done();
        } else if (!error) {
          done('different passwords are allowed'); // test fails
        }

      });
    });

    /**
     * @description Test to make sure that no errors will be thrown
     * when the password and the password confirmation are the
     * same. If no error is thrown, the test passes.
     */
    it('should allow identical passwords', function (done) {
      User.beforeCreate({
          password: 'password',
          confirmation: 'password'
      }, function (error, user) {

        if (error) {
          expect(user).to.be.null;
          done(error);
        } else if (!error) {
          done();
        }

      });
    });

  });
});
