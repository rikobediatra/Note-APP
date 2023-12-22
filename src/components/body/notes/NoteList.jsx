import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../../../utils";

function NoteList({ notes, onDelete, onArchive, archiveStatus }) {

  return (
    <>
      {notes.length !== 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              title={note.title}
              date={showFormattedDate(note.createdAt)}
              body={note.body}
              onDelete={onDelete}
              onArchive={onArchive}
              acrhiveStatus={archiveStatus}
              {...note}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </>
  );
}

export default NoteList;
