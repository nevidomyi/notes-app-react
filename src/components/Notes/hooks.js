import React from "react";
import { nanoid } from "nanoid";

/**
 *
 * Custom hook, incapsulates all note's actions and data
 */
export function useNotes() {
  const notesLocal = JSON.parse(localStorage.getItem("notes"));
  const [notes, setNotes] = React.useState(() => notesLocal || []);
  const [current, setCurrent] = React.useState(notes[0]);

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

  return {
    notes,
    create,
    update,
    remove,
    current,
    setCurrent,
  };
}
