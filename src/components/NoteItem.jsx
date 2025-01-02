import React from "react";
import { showFormattedDate } from "../utils/index.js";

export default function NoteItem({ id, title, body, createdAt, onDelete }) {
  return (
    <div className="note-item">
      <h3>{title}</h3>
      <p>{body}</p>
      <small>{showFormattedDate(createdAt)}</small>
      <button className="delete-button" onClick={() => onDelete(id)}>
        Hapus
      </button>
    </div>
  );
}
