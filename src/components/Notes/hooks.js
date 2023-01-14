import React from "react";
import { nanoid } from "nanoid";

/**
 *
 * Custom hook, encapsulates all note's actions and data
 */
export function useNotes() {
  const notesLocal = JSON.parse(localStorage.getItem("notes"));
  const [notes, setNotes] = React.useState(() => notesLocal || []);
  const [current, setCurrent] = React.useState(notes[0]);
  const [popupStatus, setPopupStatus] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function create() {
    const note = {
      id: nanoid(),
      body: "# Type your markdown mote's title here",
    };

    setNotes((prevNotes) => [note, ...prevNotes]);
    setCurrent(note);
  }

  function update(body) {
    setNotes((oldNotes) => {
      const toUpdate = oldNotes.find((n) => n.id === current.id);

      toUpdate.body = body;

      //Put the most recently-modified
      //note to be ar the top
      oldNotes.sort((a) => (a.id === current.id ? -1 : 1));

      return [...oldNotes];
    });
  }

  function remove(note) {
    setNotes((oldNotes) => oldNotes.filter((n) => n.id !== note.id));
  }

  //After click on delete of the button, note has to call some modal window with two function: Delete -> Delete note and close popup; Close -> just close popup
  //For that it's necessary to create trigger function for popup and stick to it onClick method, which will delete note and close window

  /* Popup's functions */

  function deleteNote(note) {
    remove(note);
    popupToggle();
  }

  function popupToggle(note) {
    this.noteForDelete = note ? note : "";
    setPopupStatus(prev => !prev);
    this.viewBlur = popupStatus;
  }

  return {
    notes,
    create,
    update,
    // remove,
    deleteNote,
    popupToggle,
    current,
    setCurrent,
  };
}
