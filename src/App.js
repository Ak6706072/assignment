import React, { useState } from "react";
import CreateNotes from "./component/Notes";
import ViewNotes from "./component/ViewNotes";

function App() {
  const [notes, setNotes] = useState([]);

  const noteDelete = (id) => {
    let index = notes.findIndex((tsk) => tsk.id == id);
    console.log(notes, index, id);
    setNotes((prev) => [...prev.splice(0, index), ...prev.splice(1)]);
  };
  return (
    <div>
      <CreateNotes notes={notes} setNotes={setNotes} />
      <ViewNotes noteDelete={noteDelete} notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
