import React, { useState } from "react";

export default function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Isi Catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button className="submit-button" type="submit">
        Tambah
      </button>
    </form>
  );
}
