import React from "react";

function NoteSection() {
    return (
        <>
        {/* Start of the note section for large screen */}
        <div className="notes-section">
            <div className="notes-header">
                <p>Notes</p>
            </div>
            <div className="notes-container" id="notesContainer">
                <div className="notes-group">
                    <div className="label">Add your Title here</div>
                    <input type="text" placeholder="Add your notes here" />
                </div>
            </div>
            <div className="notes-btn-wrapper">
                <a href="javascript:void(0)" onclick="expandNoteToFillScreen()">
                    Expand to fill screen
                </a>
            </div>
        </div>

        {/* start of the note section for small screen */}
        <div className="mobile-note-pad">
            <div className="note-pad-box">Notepad</div>
            <div className="note-pad" />
        </div>
        </>
    )
}

export default NoteSection;