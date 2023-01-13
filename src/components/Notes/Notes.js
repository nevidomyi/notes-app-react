import { useNotes } from "./hooks";
import { View } from "./View";
import { Empty } from "./Emtpy";

export function Notes() {
  const { create, remove, update, current, setCurrent, notes } = useNotes();

  return notes.length ? (
    <View
      create={create}
      remove={remove}
      update={update}
      current={current}
      setCurrent={setCurrent}
      notes={notes}
    />
  ) : (
    <Empty create={create} />
  );
}
