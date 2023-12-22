import React from "react";

function ActionButton( {id, onDelete, onArchive, acrhiveStatus} ) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={ () => onDelete(id) }>Hapus</button>
            <button className="note-item__archive-button" onClick={ () => onArchive(id)} >{acrhiveStatus}</button>
        </div>
    );
}

export default ActionButton;