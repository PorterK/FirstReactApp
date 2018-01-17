import React, { Component } from 'react';

export default class Note extends React {
  render() {
    const { title, text } = this.props;
    const style ={
      'width': '95%',
      'padding': '15px',
      'margin': 'auto',
      'marginTop': '10px',

      'border': '5px',
      'borderStyle': 'solid',
      'borderColor': 'rgb(150, 150, 150)',
      'borderRadius': '15px',
    }
    return (
      <div style={style}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    );
  }
}
