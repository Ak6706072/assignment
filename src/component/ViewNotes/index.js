import React from "react";
import "./ViewNotes.css";
function ViewNotes({ notes, setNotes }) {
  const noteEdit = () => {
    const allNotes = [...notes];
  };
  const noteDelete = (id) => {
    let index = notes.findIndex((tsk) => tsk.id == id);
    console.log(notes, index, id);
    setNotes((prev) => [...prev.splice(0, index), ...prev.splice(1)]);
  };

  return (
    <div className="view-notes">
      <table className="view-notes-table">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Notes Data</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, index) => {
            return (
              <React.Fragment key={"random" + index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{note.noteText}</td>
                  <td>{note.noteDate}</td>
                  <td>
                    <button
                      className="tr-btn"
                      onClick={() => {
                        noteEdit(notes.id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="tr-btn" onClick={noteDelete}>
                      Delete
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewNotes;
