import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('retryQuiz() resets quiz state', () => {
  let component = shallow(<App />);
  component.instance().setState = jest.fn();
  // jest.fn - sets up the test to be rn through test.

  component.instance().state = {
    progress: 2,
    selected: 'Yowzer',
    score: 4
  };

  component.instance(),retryQuiz();

  expect(component.instance().setState).toHaveBeenCalledWith({
    progress: 0,
    selected: 'Not Yet!',
    score: 0
  });
})
