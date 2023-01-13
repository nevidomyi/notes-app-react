import React from "react";
import { SideNote } from "./SideNote";

export default function Sidebar({
  notes,
  setCurrent,
  remove,
  current,
  create,
}) {
  const noteElements = notes.map((note) => (
    <SideNote
      key={note.id}
      note={note}
      setCurrent={setCurrent}
      current={current}
      remove={remove}
    />
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={create}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
