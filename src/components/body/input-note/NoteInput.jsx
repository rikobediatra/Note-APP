import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxLength: 50,
    };

    this.onChangeTitleEventHandler = this.onChangeTitleEventHandler.bind(this);
    this.onChangeBodyEventHandler = this.onChangeBodyEventHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  // Aplikasi dapat mencegah pengguna untuk memberikan judul catatan lebih dari 50 karakter

  onChangeTitleEventHandler(event) {
    let lenght = event.target.value.length;
    
    if (lenght <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
          maxLength: 50 - lenght,
        };
      });
    } else {
      const maxCharacter = event.target.value.substring(0, 50);
      this.setState(() => {
        return {
          title: maxCharacter,
          maxLength: 0,
        };
      }); 
    }
  }

  onChangeBodyEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form type="submit" onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">Sisa Karakter <span>{this.state.maxLength}</span></p>
          <input
            type="text"
            placeholder="Masukan judul ..."
            className="note-input__title"
            value={this.state.title}
            required
            onChange={this.onChangeTitleEventHandler}
          />
          <input
            type="text"
            placeholder="Tulisan catatan penting mu"
            className="note-input__body"
            value={this.state.body}
            required
            onChange={this.onChangeBodyEventHandler}
          />
          <button type="submit">Buat Catatan</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
