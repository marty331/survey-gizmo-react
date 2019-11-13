import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from '../components/Radio';
import TextBox from '../components/TextBox';

export class Question extends Component {
  state = {
    answers: []
  }
  callbackFunction = (childData) => {
    console.log('childData: ', childData);
    this.setState({answers: childData})
  }
  render(){
    console.log('question ', this.props.question);
    const {id, title, shortname, type, options} = this.props.question;
    if (type === 'RADIO'){
      return (
        <div>
          <h2 dangerouslySetInnerHTML={{__html: title.English}} style={titleStyle}></h2>
          <Radio id={id} shortname={shortname} name={shortname} questionCallback={this.props.questionCallback} options={options} />
        </div>
      )
    } else {
      return (
        <div>
          <h2 dangerouslySetInnerHTML={{__html: title.English}} style={titleStyle}></h2>
          <TextBox key={type+id} id={String(id)} shortname={shortname} questionCallback={this.props.questionCallback} />
        </div>
      )
    }

  }
}

const titleStyle = {
  backgroundColor: '#f4f4f4'
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  questionCallback: PropTypes.func.isRequired
}

export default Question
