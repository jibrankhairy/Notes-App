import React, { useState } from "react";
import { getInitialData } from "./utils/index.js";
import NoteSearch from "./components/NoteSearch.jsx";
import NoteInput from "./components/NoteInput.jsx";
import NoteList from "./components/NoteList.jsx";
import "./styles/style.css";

export default function App() {
  const [notes, setNotes] = useState(getInitialData());

  // Fungsi untuk menambahkan catatan baru
  const addNote = ({ title, body }) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  // Fungsi untuk menghapus catatan berdasarkan ID
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  // Fungsi untuk mencari catatan berdasarkan keyword
  const handleSearch = (keyword) => {
    if (keyword === "") {
      setNotes(getInitialData());
    } else {
      setNotes(
        getInitialData().filter((note) =>
          note.title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Notes App</h1>
      </header>
      <NoteSearch onSearch={handleSearch} />

      <NoteInput addNote={addNote} />

      <div className="note-list-container">
        <NoteList notes={notes} onDelete={deleteNote} />
      </div>
    </div>
  );
}
