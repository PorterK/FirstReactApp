import React from 'react';
import Note from './note.jsx';

class ListNotes extends React.Component {
    render() {
      var notes = this.props.notes;
      var createdNotes = [];

      for(var i = 0; i < notes.length; i++){
        createdNotes.push(<Note title= {notes[i][0]} text= {notes[i][1]} />)
      }
      return(
        <div>
          {createdNotes}
        </div>
      );
    }
}

export default ListNotes;
