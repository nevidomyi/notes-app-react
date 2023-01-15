import React from "react";
import { popupContext } from "./Context";

export function SideNote({ note, setCurrent, current}) {
  const className = "title " + (note.id === current.id ? "selected-note" : "");
  const { popupToggle } = React.useContext(popupContext);

  return (
    <div key={note.id}>
      <div className={className} onClick={() => setCurrent(note)}>
        <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
        <button className="delete-btn" onClick={() => popupToggle(note)}>
          <i className="gg-trash trash-icon"></i>
        </button>
      </div>
    </div>
  );
}
