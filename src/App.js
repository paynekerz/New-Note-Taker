import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/noteList";
import Search from "./components/search";
import Header from "./components/header";
const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    console.log("saving data to local storage", notes);
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="background-container">
      <div className="foreground-container">
        <Header />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
