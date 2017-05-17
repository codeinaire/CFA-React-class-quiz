import React from 'react';
import PropTypes from  'prop-types';

// class ProgressBar extends Component {
//   render() {
//     return (
//       <p>{this.props.current_step}/{this.props.question_length}</p>
//     )
//   }
// }

// stateless component this is not a class anymore, but a function and this is being these are accessible from our props object that is being sent through on the app.js page. We are doing it to make it more predictable in that it will just show the data that we are feeding it. It's a way to make it simpler.
const ProgressBar = ({ current_step, question_length }) => {
  return <p>{current_step}/{question_length}</p>
}

// We can make multiple consts in the same file and then export each component, but Jamie recommends to put one component in one file for readability.

ProgressBar.propTypes = {
  current_step: PropTypes.number.isRequired,
  question_length: PropTypes.number.isRequired
}

export default ProgressBar;
