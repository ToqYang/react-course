import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

const JournalEntry = ({ id, date, title, body, url }) => {
  const dispatch = useDispatch();
  console.log(id, date, title, body, url);

  const noteDate = moment(date);

  const handleEntryClick = (e) => {
    e.preventDefault();
    dispatch(activeNote(id, { title, date, title, body, url }));
  };

  return (
    <div onClick={handleEntryClick} className="journal__entry pointer">
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;