import React from 'react';

class Note extends React.Component {
  render() {
    var style ={
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
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Note;
