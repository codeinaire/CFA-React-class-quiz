import React, { Component } from 'react';
// import PropTypes from  'prop-types';

class SubmitButton extends Component {
  render () {
    return (
      <div>
        <p>You have selected: {this.props.selectedAnswer}</p>
        <button onClick={this.props.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default SubmitButton;
