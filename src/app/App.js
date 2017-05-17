import React, { Component } from 'react';
import './App.css';
import Question from '../question/Question';
import MultiChoice from '../multiChoice/MultiChoice';
import Results from '../results/Results';
import CircularProgressbar from 'react-circular-progressbar';
import SubmitButton from '../submitArea/SubmitButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'None yet!',
      score: 0
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.retryQuiz = this.retryQuiz.bind(this);
    this.quiz_data = [
      {
        question: 'What is the meaning of life?',
        question_data: 'The meaning of life was first calculated by a supercomputer that was so complex and so large that it was the size of a planet. It had its own friggin eco system!',
        correct_answer: '42',
        possible_answers: ['Love', 'Money', 'JavaScript', '42']
      },
      {
        question: 'Who is the best coding YouTuber?',
        question_data: 'The meaning of life was first calculated by a supercomputer that was so complex and so large that it was the size of a planet. It had its own friggin eco system!',
        correct_answer: 'FunFunFunction',
        possible_answers: ['Coding Train', 'FunFunFunction', 'Young Lamb', 'Wes Bos']
      },
      {
        question: 'Who is the best coding YouTuber?',
        question_data: 'The meaning of life was first calculated by a supercomputer that was so complex and so large that it was the size of a planet. It had its own friggin eco system!',
        correct_answer: 'FunFunFunction',
        possible_answers: ['Coding Train', 'FunFunFunction', 'Young Lamb', 'Wes Bos']
      }
    ]
  }

  submitAnswer() {
    if (this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'Not yet!',
      })
    } else {
      this.setState({
        progress: this.state.progress + 1,
        selected: 'Not yet!'
      })
    }
  }

  retryQuiz(){
    this.setState({
      progress: 0
    })
  }

  updateSelected(answer) {
    this.setState({
      selected: answer
    })
  }

  render() {
    return (
      <MuiThemeProvider>

        <div>
          {this.state.progress < this.quiz_data.length ? (
          <div className="flex-parent">
            <h2 className="f-child-1">Welcome to Testing Quiz</h2>
            <div className="f-child-2">
              <Question current_question={this.quiz_data[this.state.progress].question}
              questionData={this.quiz_data[this.state.progress].question_data} />
              {/* <ProgressBar current_step={this.state.progress + 1} question_length={this.quiz_data.length} /> */}
            </div>
            <div className="multi-choice">
              <MultiChoice
              answers={this.quiz_data[this.state.progress].possible_answers}
              updateSelected={this.updateSelected} />
            </div>
            <div className="f-child-4">
              <SubmitButton handleSubmit={this.submitAnswer} selectedAnswer={this.state.selected} />
            </div>
            <div className="f-child-5">
              <CircularProgressbar percentage={Math.floor((((this.state.progress + 1) / this.quiz_data.length) * 100))} initialAnimation={true} />
            </div>
          </div>
          )
          : (
            <Results score={this.state.score} end_message="Congratulations, you have finished!" retryQuiz={this.retryQuiz}/>
          )}
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
