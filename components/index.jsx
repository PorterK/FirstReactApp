import React from 'react';
import ReactDOM from 'react-dom';

import AddNote from './addNote.jsx';
import ListNotes from './notes/listNotes.jsx';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [
        ["First Note", "First Note Test Text"],
        ["Second Note", "Second Note Test Text"],
      ],
    }
  }
  render(){
    this.pushNote = function(newNote){
      var notes = this.state.notes;
      notes.push(newNote);
      this.setState({notes: notes})
      console.log(this.state.notes);
    }
    return(
      <div>
        <AddNote pushNote={this.pushNote.bind(this)}/>
        <ListNotes notes={this.state.notes} />
      </div>
    );
  }
}
export default Index;
