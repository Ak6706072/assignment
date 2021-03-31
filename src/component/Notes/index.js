import React, { useState } from "react";
import "./CreateNotes.css";
function CreateNotes({ notes, setNotes }) {
  const [noteText, setNoteText] = useState("");
  const [noteDate, setNoteDate] = useState("");
  const createNote = (e) => {
    e.preventDefault();
    const date = new Date(noteDate);
    let id;
    if (notes.length == 0) id = 0;
    else {
      id = ++notes[notes.length - 1].id;
    }
    const obj = {
      id: id,
      noteText: noteText,
      noteDate: noteDate,
      isEditing: false,
    };

    // console.log(date, date.getMonth(), date.getFullYear(), noteDate, noteText);
    // console.log(obj, id);
    const allNotes = [...notes, obj];
    setNotes(allNotes);
  };
  return (
    <div className="notes">
      <form onSubmit={createNote} className="notes-header">
        <input
          className="notes-input"
          type="text"
          placeholder="type your notes here"
          onChange={(e) => {
            setNoteText(e.target.value);
          }}
        />
        <input
          className="notes-input"
          type="date"
          onChange={(e) => {
            setNoteDate(e.target.value);
          }}
        />
        <button className="notes-btn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateNotes;
