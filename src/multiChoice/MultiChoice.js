import React, { Component } from 'react';
import PropTypes from  'prop-types';
import './MultiChoice.css';

class MultiChoice extends Component {
  render () {
    return (
      <div>
        {/* key is a react specific thing so it knows that the buttons are different from each other */}
        {this.props.answers.map((answer, i) => <button className='answer-button' key={i} onClick={() => this.props.updateSelected(answer)}>{answer}</button>)}
         {/* passing down the function to update the state in the parent */}
        <br />
        <br />
      </div>
    )
  }
}

MultiChoice.propTypes = {
  answers: PropTypes.array.isRequired,
  updateSelected: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string
}

export default MultiChoice;
