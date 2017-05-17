import React, { Component } from 'react';
import PropTypes from  'prop-types';
import './Question.css';

class Question extends Component {
  render() {
    return (
      <div className="q-container">
        <h4>{this.props.current_question}</h4>
        <h4 className="q-data">{this.props.questionData}</h4>
      </div>
      )
  }

}

Question.propTypes = {
  current_question: PropTypes.string.isRequired
};

// the lower case is a function of the Question but the upcase is referencing the library and is sending the .string into the library.

export default Question;
// default refers to a module and always has to reference the class
