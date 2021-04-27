import React from "react";
import JournalEntries from "./JournalEntries";
import { startLogout } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../actions/notes";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
    console.log("Logout");
  };

  const handleAddNew = () => {
    dispatch(startNewNote());
  };
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span>{name}</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div onClick={handleAddNew} className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
