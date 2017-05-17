import React, { Component } from 'react';
import PropTypes from  'prop-types';

class Results extends Component {
  render() {
    return (
      <div>
        <p>Congratulations, {this.props.endMessage}</p>
        <p> Your score was: {this.props.score}</p>
        <button onClick={this.props.retryQuiz}>Retry</button>
      </div>
    )

  }
}

Results.propTypes = {
  end_message: PropTypes.string,
  score: PropTypes.number.isRequired,
  retryQuiz: PropTypes.func.isRequired
}

Results.defaultProps = {
  end_message: 'Congratulations!! You finish!'
}

export default Results;
