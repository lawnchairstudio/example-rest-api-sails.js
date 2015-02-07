/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');
var assert = require('assert');

module.exports = {

  schema: true,

  attributes: {
    name: {
      type: "string",
      required: true
    },
    username: {
      type: "string",
      required: true,
      unique: true
    },
    email: {
      type: "string",
      email: true,
      required: true,
      unique: true
    },
    admin: {
      type: "boolean",
      defaultsTo: false
    },
    password: {
      type: "string",
    },
    segments: {
      collection: 'segment',
      via: 'owner'
    }
  },

  beforeValidation: function (values, callback) {

    if (typeof values.admin !== 'undefined') {
      if (values.admin === 'unchecked') {
        values.admin = false;
      } else if (values.admin[1] === 'on') {
        values.admin = true;
      }
    } else {
      values.admin = false;
    }

    callback();

  },

  beforeCreate: function (values, callback) {

    if (!values.password || !values.confirmation) {
       return callback('Password required.', null);
    } else if (values.password != values.confirmation) {
      return callback('Passwords don\'t match.', null); // Return the error and a null user object
    }

    bcrypt.hash(values.password, 10, function passwordEncrypted (error, encrypted) {
      if (error) {
        return callback(error, null); // Return the error and a null user object
      } else {
        try {

          // Assert that the password is encrypted
          assert.notEqual(values.password, encrypted);

          // Update the value of the password to be encrypted
          values.password = encrypted;

          // Return no error
          return callback(null, values);

        } catch (error) {
          // If an error is caught, return it and a null user object.
          return callback(error, null);
        }
      }
    });

  }
};
