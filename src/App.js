import React  from "react";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import {data}from "./data";
import Split from "react-split";
import {nanoid} from "nanoid";

import "./style.css";


export default function App() {
    const notesLocal = JSON.parse(localStorage.getItem('notes'));
    const [notes, setNotes] = React.useState(
        () => (notesLocal || [])
    );
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    );

    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes]);

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown mote's title here"
        };

        setNotes(prevNotes => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }

    function updateNote(text) {
        //Put the most recently-modified
        //note to be ar the top

        setNotes(oldNotes => {
            const newArray = [];
            for(let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if(oldNote.id === currentNoteId) {
                    newArray.unshift({ ...oldNote, body: text })
                } else {
                    newArray.push(oldNote)
                }
            }
            return newArray;
        });
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    function deleteNote(event, noteId) {
        event.stopPropagation();
        console.log(event, noteId);
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId));
    }

    return (
        <main>
        {
            notes.length > 0
            ?
            <Split
                sizes={[30, 70]}
                direction="horizontal"
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor
                        currentNote={findCurrentNote()}
                        updateNote={updateNote}
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button
                    className="first-note"
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
        }
        </main>
    )
}