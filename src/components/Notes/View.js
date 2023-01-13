import React from "react";
import Editor from "./Editor";
import Sidebar from "./Sidebar";
import Split from "react-split";

export function View({ notes, current, setCurrent, create, remove, update }) {
  return (
    <Split sizes={[30, 70]} direction="horizontal" className="split">
      <Sidebar
        notes={notes}
        current={current}
        setCurrent={setCurrent}
        newNote={create}
        remove={remove}
        create={create}
      />
      {notes.length > 0 && <Editor current={current} update={update} />}
    </Split>
  );
}
