import React from "react";
import Editor from "./Editor";
import Sidebar from "./Sidebar";
import Split from "react-split";
import { Popup } from "./Popup";

export function View({ notes, current, setCurrent, create, deleteNote, update, popupToggle}) {
  return (
    <div className="view ${}">
      <Split sizes={[30, 70]} direction="horizontal" className="split">
        <Sidebar
          notes={notes}
          current={current}
          setCurrent={setCurrent}
          newNote={create}
          popupToggle={popupToggle}
          create={create}
        />
        {notes.length > 0 && <Editor current={current} update={update} />}
      </Split>
      <Popup 
        buttonYes={deleteNote}
        buttonCancel={popupToggle}
      />
    </div>
  );
}
