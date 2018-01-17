import React from 'react';
import Main from '../main.js';
import Index from './index.jsx';

class addNote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      text:  '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event){
    this.setState({title: event.target.value});
  }
  handleTextChange(event){
    this.setState({text: event.target.value});
  }
  handleSubmit(event) {
    this.props.pushNote([this.state.title, this.state.text]);
  }

  render(){
    var style = {
      'width': '100%',
      'textAlign': 'center',
      'backgroundColor': 'rgb(0, 200, 200)',
      'paddingBottom': '5px',
    }
    return (
      <div style = {style}>
            <input type="text" ref="title" value={this.state.title} onChange={this.handleTitleChange} placeholder='Title'/>
            <input type="text" ref="text"  value={this.state.text} onChange={this.handleTextChange} placeholder='Text'/>
            <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
export default addNote;
