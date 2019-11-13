import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';

export class Questions extends Component {
  render(){
    return (
      this.props.questions.map((question) => (
        <Question key={question.id} question={question} questionCallback={this.props.questionCallback} />
      ))
    )
  }
}

Questions.propTypes = {
  questions: PropTypes.array.isRequired,
  questionCallback: PropTypes.func.isRequired
}

export default Questions;
