/** @jsx React.DOM */

var React = require('react');
var classes = require('react-classes');

var InputField = require('../components/input.js');

var Register = React.createClass({

  mixins: [classes],

  setDefaultState: function () {
    return {
      name: undefined,
      username: undefined,
      email: undefined,
      password: undefined,
      csrf: null
    }
  }, 

  render: function () {
    return (
      <form action="/user/create" method="POST">
        <h2>Create an Account!</h2> 
        <InputField label="" placeholder="" type="text" name="name"/>
        <InputField type="text" name="username"/>
        <InputField type="email" name="email"/>
        <InputField type="password" name="password"/>
        <InputField type="password" name="confirmation"/>
        <InputField type="submit" value="Create"/>
        <InputField type="hidden" name="_csrf" value="<%= _csrf %>" />
      </form>
    )
  }
});

module.exports = Register;
