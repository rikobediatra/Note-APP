import React from "react";
import { getInitialData } from "../utils/index";
import NoteList from "./body/notes/NoteList";
import NoteInput from "./body/input-note/NoteInput";
import HeaderNotes from "./header/HeaderNotes";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchNote: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  onArchiveHandler(id) {
    const newNotes = this.state.notes.filter(note => note.id === id).map(note => {
      note.archived = !note.archived
    });

    this.setState({newNotes});

    console.log(this.state.notes, "notes");
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    console.log(notes, "hasil ilter");
    this.setState({ notes });
  }

  onSearchHandler(event) {
    this.setState({
      searchNote: event.target.value,
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.searchNote.toLowerCase()));
    let notesActive = notes.filter((note) => note.archived === false);
    let notesArchived = notes.filter((note) => note.archived === true);

    return (
      <>
      <HeaderNotes onSearch={this.onSearchHandler}/>
      <div className="note-app__body">
        <NoteInput addNotes={this.onAddNotesHandler} />
        <h2>Catatan Aktif</h2>
        <NoteList notes={notesActive} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} archiveStatus={"Arsipkan"}/>
        <h2>Catatn Arsip</h2>
        <NoteList notes={notesArchived} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} archiveStatus={"Pindahkan"}/>
      </div>
      </>
    );
  }
}

export default NoteApp;
