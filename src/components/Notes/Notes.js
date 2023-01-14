import { useNotes } from "./hooks";
import { View } from "./View";
import { Empty } from "./Emtpy";

export function Notes() {
  const { create, deleteNote, update, current, setCurrent, notes, popupToggle } = useNotes();

  return notes.length ? (
    <View
      create={create}
      deleteNote={deleteNote}
      update={update}
      current={current}
      setCurrent={setCurrent}
      notes={notes}
      popupToggle={popupToggle}
    />
  ) : (
    <Empty create={create} />
  );
}
