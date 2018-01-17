import React, { Component } from 'react';

import AddNote from './addNote.jsx';
import ListNotes from './notes/listNotes.jsx';

export default class Index extends Component {
  // Removed constructor here because all we were doing was setting up the default state
  state = {
    notes: [
      ["First Note", "First Note Test Text"],
      ["Second Note", "Second Note Test Text"],
    ],
  }

  // Using an arrow function binds `this` to the function so we don't have to.
  pushNote = data => {
    const { notes } = this.state;

    // Here we clone the notes array in order to keep the component state immutable.
    const newNotesArr = notes.slice(0);

    // We want to push the data to the new array that we created instead of to `this.state.notes`
    newNotesArr.push(data);

    // Finally set the state
    this.setState({ notes: newNotesArr });
  }

  render(){
    return(
      <div>
        <AddNote pushNote={this.pushNote}/>
        <ListNotes notes={this.state.notes} />
      </div>
    );
  }
}
