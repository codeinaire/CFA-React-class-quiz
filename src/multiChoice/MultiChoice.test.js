import React from 'react';
import ReactDOM from 'react-dom';
import MultiChoice from './MultiChoice';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const answers = [
    {
      question: 'What is the meaning of life?',
      correct_answer: '42',
      possible_answers: ['Love', 'Money', 'JavaScript', '42']
    },
    {
      question: 'Who is the best coding YouTuber?',
      correct_answer: 'FunFunFunction',
      possible_answers: ['Coding Train', 'FunFunFunction', 'Young Lamb', 'Wes Bos']
    }
  ]
  ReactDOM.render(<MultiChoice answers={answers[0].possible_answers}/>, div);
});
