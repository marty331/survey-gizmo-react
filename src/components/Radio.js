import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      questionId: this.props.shortname,

    };
    this.input = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    console.log(event.target.value);
    this.setState({value: event.target.value},
  () => this.props.questionCallback(this.state));

  }
  render(){
    return (
      this.props.options.map((option) => (
        <div>
          <input type="radio" checked={this.state.value === option.value} onChange={this.handleChange}  value={option.value}  />
          <label htmlFor={option.id} >{option.title.English}</label>
        </div>
      )))
  }
}

Radio.propTypes = {
  questionCallback: PropTypes.func.isRequired
}



export default Radio
