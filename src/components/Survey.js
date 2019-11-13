import React, { Component } from 'react';
import Questions from '../components/Questions';
import axios from 'axios';
import { withRouter } from 'react-router-dom'


export class Survey extends Component {
  state = {
    questions: [],
    error: '',
    answers: []
  }

  componentDidMount(){
    axios.get(url)
    .then(res => this.setState({ questions: res.data['data']['pages'][0]['questions']}))
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.sendAnswer();
  }
  sendAnswer = () => {
    const answers = this.state.answers;
    axios.put(sendUrl, { answers }, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    })
    this.props.history.push('/product');
  }

  questionCallback = (data) => {
    var answer_node = this.state.answers;
    var in_answer = answer_node.find( answer_node => answer_node['questionId'] === data['questionId'] );
    if (typeof in_answer !== 'undefined'){
      var objIndex = answer_node.findIndex((obj => obj.questionId === data['questionId']));
      answer_node[objIndex].value = data['value']
      this.setState({answers: answer_node}, () => console.log('answers: ', this.state));
    } else {
      const answer_node = this.state.answers.concat(data);
      this.setState({answers: answer_node}, () => console.log('answers: ', this.state));
    }
  }

  render(){
    return (
      <div>
        <h1>Survey</h1>
        <form  onSubmit={this.onSubmit} action='/product' >
        <Questions  questions={this.state.questions} questionCallback={this.questionCallback} sendAnswer={this.sendAnswer} />
        <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
const url = 'http://localhost:4000/survey'
const sendUrl = 'http://localhost:4000/sendSurvey'

export default withRouter(Survey);
