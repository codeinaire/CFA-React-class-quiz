import React, { Component } from 'react';

class MultiChoice extends Component {
  render () {
    return (
      <div>
        {/* key is a react specific thing so it knows that the buttons are different from each other */}
        {this.props.answers.map((answer, i) => <button key={i} onClick={() => this.props.updateSelected(answer)}>{answer}</button>)}
         {/* passing down the function to update the state in the parent */}
        <br />
        <br />
        <p>You have selected: {this.props.selectedAnswer}</p>
        <button onClick={this.props.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default MultiChoice;
