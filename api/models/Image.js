/**
* Image.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {
    name: {
      type: "string",
      required: true
    },
    path: {
      type: "string",
      required: true
    },
    username: {
      type: "string",
      required: true
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.username;
      delete obj._csrf;
      return obj;
    }
  },
};
