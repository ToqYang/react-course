import React from "react";
import JournalEntry from "./JournalEntry";
import { useSelector } from "react-redux";

const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);
  return (
    <div className="journal__entries animate__animated animate__bounce animate__faster">
      {notes.map((value) => (
        <JournalEntry key={value.id} {...value} />
      ))}
    </div>
  );
};

export default JournalEntries;
