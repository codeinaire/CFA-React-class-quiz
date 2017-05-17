import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './ProgressBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressBar current_step={0} question_length={0} />, div);
});
