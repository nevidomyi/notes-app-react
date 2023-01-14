export function SideNote({ note, setCurrent, current, popupToggle }) {
  const className = "title " + (note.id === current.id ? "selected-note" : "");

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
