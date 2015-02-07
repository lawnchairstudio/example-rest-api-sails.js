/** @jsx React.DOM */

var React = require('react');
var classes = require('react-classes');

var Navigation = require('./navigation');

var Header = React.createClass({

  mixins: [classes],

  componentDidMount: function () {

  },

  getInitialState: function () {
    return {

    };
  },

  render: function () {

    var classes = this.getClass('', {
      
    });

    return (
      <div>
        <Navigation />
      </div>
    ) 

  }

});

module.exports = Header;
