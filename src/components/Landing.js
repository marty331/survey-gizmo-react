import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Landing extends Component {
  render() {
    return (
      <div style={gridStyle}>
        <div></div>
        <div style={getStyle}>
          <Link style={linkStyle} to='/survey'>Take Survey</Link>
          <br/>
          <Link style={linkStyle} to='/product'>No thanks, I just want my product.</Link>
        </div>
        <div></div>
      </div>
    )
  }
}

const linkStyle = {
  color: '#999',
  textDecoration: 'none',
  margin: '20px'
}

const getStyle = {
  background: '#f4f4f4',
  padding: '1em',
  border: '1px #ccc dotted'
}
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '100px 1fr 100px'
}

export default Landing
