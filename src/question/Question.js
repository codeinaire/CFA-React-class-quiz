import React, { Component } from 'react';
import PropTypes from  'prop-types';

class Question extends Component {
  render() {
    return (
      <h4>{this.props.current_question}</h4>
    )
  }

}

Question.propTypes = {
  current_question: PropTypes.string.isRequired
};

// the lower case is a function of the Question but the upcase is referencing the library and is sending the .string into the library.

export default Question;
// default refers to a module and always has to reference the class
