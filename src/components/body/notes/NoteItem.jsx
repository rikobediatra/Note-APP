import React from "react";
import NoteContent from "./NoteContent";
import ActionButton from "./ActionButton";

function NoteItem( {id, title, date, body, onDelete, onArchive, acrhiveStatus} ) {
    return(
        <div className="note-item">
            <NoteContent title={title} date={date} body={body} />
            <ActionButton id={id} onDelete={onDelete} onArchive={onArchive} acrhiveStatus={acrhiveStatus} />
        </div>
    );
}

export default NoteItem;