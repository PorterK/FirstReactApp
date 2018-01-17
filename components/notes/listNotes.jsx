import React, { Component } from 'react';
import Note from './note.jsx';

export default class ListNotes extends Component {
    render() {
    // This is a practice called destructuring, very useful for handling object/arr data
      const { notes } = this.props;
    
    // Here instead of using a for loop we can just map the data directly to components
    // As a side note: I would consider using objects here:
    // note: {
    //  title: 'something',
    //  text: 'something',
    // }
    // can be mapped direction to the props like so:
    // notes.map(data => <Note {...data} />);
      const createdNotes = notes.map(data => <Note title={data[0]} text={data[1]});

      return(
        <div>
          {createdNotes}
        </div>
      );
    }
}
