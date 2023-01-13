export function Empty({ create }) {
  return (
    <div className="no-notes">
      <h1>You have no notes</h1>
      <button className="first-note" onClick={create}>
        Create one now
      </button>
    </div>
  );
}
