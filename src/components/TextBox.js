import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      questionId: this.props.shortname,

    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value}, () => this.props.questionCallback(this.state));

  }

  render(){
    const id = String(this.props.id);
    const shortname = this.props.shortname;
    return (
      <div>
        <textarea id={id} name={shortname} cols="25" rows="7" value={this.state.value} onChange={this.handleChange}></textarea>
      </div>
    )
  }
}

TextBox.propTypes = {
  id: PropTypes.string.isRequired,
  shortname: PropTypes.string.isRequired,
}

export default TextBox
