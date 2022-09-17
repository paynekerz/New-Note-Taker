import Note from "./note";
import AddNote from './addNote'

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
      ))}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  );
};

export default NoteList;
