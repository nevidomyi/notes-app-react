import React from "react";
import Editor from "./Editor";
import Sidebar from "./Sidebar";
import Split from "react-split";
import { Popup } from "./Popup";
import { popupContext } from "./Context";

export function View({ notes, current, setCurrent, create, update }) {
  const {getPopupStatus, popupToggle, deleteNote} = React.useContext(popupContext);

  const viewClass = getPopupStatus() ? "view blur" : "view";
  const popupDelete = () => {
    if (getPopupStatus()) {
      return <Popup
        buttonYes={deleteNote}
        buttonCancel={popupToggle}
      />
    }
  }

  return (
    <div>
      <div className={viewClass}>
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
      </div>
      {popupDelete()}
    </div>
    
  );
}
