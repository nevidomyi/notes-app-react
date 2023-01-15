import React from "react";

export function Popup({buttonYes, buttonCancel, deletNoteText}) {
    const placeholder = deletNoteText ? deletNoteText : "Delete this note ?";

    return (
        <div className="popup--wrapper" onClick={buttonCancel}>
            <div className="popup">
                <div className="popup--text">
                    <span>{placeholder}</span>
                </div>
                <div className="buttons--wrapper">
                    <button onClick={(event) => {
                        buttonYes();
                        event.stopPropagation();
                    }}
                    >Yes</button>
                    <button onClick={(event) => {
                        buttonCancel();
                        event.stopPropagation();
                    }}
                    >Cancel</button>
                </div>
            </div>
        </div>
    )
}