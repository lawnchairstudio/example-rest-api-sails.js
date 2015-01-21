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
    encryptedPassword: {
      type: "string",
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      delete obj.confirmation;
      delete obj.encryptedPassword;
      delete obj._csrf;
      return obj;
    }
  },

  beforeValidation: function (values, callback) {
    if (typeof values.admin !== 'undefined') {
      if (values.admin === 'unchecked') {
        values.admin = false;
      } else  if (values.admin[1] === 'on') {
        values.admin = true;
      }
    }

    callback();

  },

  beforeCreate: function (values, next) {
    if(!values.password || values.password != values.confirmation) {
      return next({err: ["Password doesn't match password confirmation."]});
    }

    require('bcrypt').hash(values.password, 10, function passwordEncrypted(err, encryptedPassword) {
      if(err)
        return next(err);
      values.encryptedPassword = encryptedPassword;
      next();
    });
  }

};
