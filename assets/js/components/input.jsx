/** @jsx React.DOM */

var React = require('react');
var classes = require('react-classes');

var Input = React.createClass({

  mixins: [React.addons.LinkedStateMixin, classes],

  propTypes: {
    label: React.PropTypes.string, // Optional: The label for the input
    placeholder: React.PropTypes.string, // Optional: The input placeholder text
    type: React.PropTypes.string, // The type of input
    value: React.PropTypes.string, // The initial value of the input
    onChange: React.PropTypes.func, // Callback to run when the input changes
    valueLink: React.PropTypes.shape({
      value: React.PropTypes.string.isRequired,
      requestChange: React.PropTypes.func.isRequired
    })
  },

  getDefaultProps: function () {
    return {
      label: '',
      type: 'text',
      value: '',
      onChange: function () {
        return;
      },
      valueLink: null
    }
  },

  getValueLink: function (props) {
    return props.valueLink || {
      value: props.value,
      requestChange: props.onChange
    };
  },

  _onChange (event) {
    this.getValueLink(this.props).requestChange(event.target.value);
  },

  render: function () {
    return (
      <div className="form-group">
        if (this.props.label) {
          <label for="">{this.props.label}</label>
        }
        <input
          name=""
          type={this.props.type}
          className="form-control"
          value={this.getValueLink(this.props).value}
          onChange={this._onChange}
        />
      </div>
    )
  }
});

module.exports = Input;
