import React, { Component } from 'react';
import Main from '../main.js';
import Index from './index.jsx';

export default class addNote extends React.Component {
  state = {
    title: '',
    text: '',
  }

  handleChange = e => {
    // Use the element name in order to only create one change function
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    this.props.pushNote([this.state.title, this.state.text]);
  }

  render(){
    // Always use const or let, never var
    const style = {
      'width': '100%',
      'textAlign': 'center',
      'backgroundColor': 'rgb(0, 200, 200)',
      'paddingBottom': '5px',
    }
    return (
      <div style={style}>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder='Title'/>
            <input type="text" name="text"  value={this.state.text} onChange={this.handleChange} placeholder='Text'/>
            <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
