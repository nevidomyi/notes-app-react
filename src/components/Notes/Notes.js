import React from "react";
import { useNotes } from "./hooks";
import { View } from "./View";
import { Empty } from "./Emtpy";
import { popupContext } from "./Context";

export function Notes() {
  const { create, deleteNote, update, current, setCurrent, notes, popupToggle, getPopupStatus } = useNotes();

  return notes.length ? (
    <popupContext.Provider value={{deleteNote, popupToggle, getPopupStatus}}>
      <View
        create={create}
        // deleteNote={deleteNote}
        update={update}
        current={current}
        setCurrent={setCurrent}
        notes={notes}
        // popupToggle={popupToggle}
        // getPopupStatus={getPopupStatus}
      />
    </popupContext.Provider>
  ) : (
    <Empty create={create} />
  );
}
