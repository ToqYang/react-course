import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          autoComplete="off"
          className="notes__title-input"
        />
        <textarea
          placeholder="What happened today"
          className="notes__textarea"
          name=""
          id=""
          cols="5"
          rows="10"
        ></textarea>

        <div className="notes__image">
          <img
            style={{ width: "100%" }}
            src="https://www.caracteristicas.co/wp-content/uploads/2018/11/montan%CC%83as-e1543190126108.jpg"
            alt="montañas"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
