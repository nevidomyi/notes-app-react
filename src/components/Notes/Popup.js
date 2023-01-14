import React from "react";


//First 

export function Popup({buttonYes, buttonCancel, deletNoteText}) {
    const placeholder = deletNoteText ? deletNoteText : "Delete this note ?";

    return (
        <div className="popup--wrapper">
            <div className="popup">
                <div className="popup--text">
                    <span>{placeholder}</span>
                </div>

                <div className="buttons--wrapper">
                    <button onClick={buttonYes}>Yes</button>
                    <button onClick={buttonCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}