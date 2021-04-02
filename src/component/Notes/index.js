import React, { useState } from "react";
import "./CreateNotes.css";

function CreateNotes({ notes, setNotes }) {
  const [noteText, setNoteText] = useState("");
  const [noteDate, setNoteDate] = useState("");
  const [err, setErr] = useState("");
  const createNote = (e) => {
    e.preventDefault();
    if (noteDate == "" || noteText == "") {
      setErr("Mandaotory fields");
      return;
    } else {
      setErr("");
    }
    const date = new Date(noteDate);
    let id;
    if (notes.length == 0) id = 0;
    else {
      id = notes[notes.length - 1].id + 1;
    }
    const obj = {
      id: id,
      noteText: noteText,
      noteDate: noteDate,
      isEditing: false,
    };
    // console.log(noteDate, noteText);
    const allNotes = [...notes, obj];
    setNotes(allNotes);
    setNoteText("");
    setNoteDate("");
  };
  const sortInAsc = () => {
    const allNotes = [...notes];
    allNotes.sort((a, b) => {
      if (new Date(a.noteDate).valueOf() > new Date(b.noteDate).valueOf()) {
        return 1;
      } else if (
        new Date(a.noteDate).valueOf() < new Date(b.noteDate).valueOf()
      ) {
        return -1;
      } else {
        return 0;
      }
    });

    setNotes(allNotes);
  };
  const sortInDsc = () => {
    const allNotes = [...notes];
    allNotes.sort((a, b) => {
      if (new Date(a.noteDate).valueOf() > new Date(b.noteDate).valueOf()) {
        return -1;
      } else if (
        new Date(a.noteDate).valueOf() < new Date(b.noteDate).valueOf()
      ) {
        return 1;
      } else {
        return 0;
      }
    });
    setNotes(allNotes);
  };
  return (
    <div className="notes">
      <form onSubmit={createNote} className="notes-header">
        <span>
          <button
            onClick={() => {
              sortInAsc();
            }}
          >
            Sort in Asc
          </button>
          <button
            onClick={() => {
              sortInDsc();
            }}
          >
            Sort in Dsc
          </button>
        </span>
        <input
          className="notes-input"
          type="text"
          value={noteText}
          placeholder="type your notes here"
          onChange={(e) => {
            setNoteText(e.target.value);
          }}
        />
        <input
          className="notes-input"
          type="date"
          value={noteDate}
          onChange={(e) => {
            setNoteDate(e.target.value);
          }}
        />
        <button className="notes-btn" type="submit">
          Create
        </button>
      </form>
      <p>{err}</p>
    </div>
  );
}

export default CreateNotes;
