import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "#555" }}>
        Tidak ada catatan tersedia.
      </p>
    );
  }
  return (
    <div className="note-list-container">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} onDelete={onDelete} />
      ))}
    </div>
  );
}
