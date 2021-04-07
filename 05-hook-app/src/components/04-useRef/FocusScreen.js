import React, { useRef } from "react";
import "../02-useEffect/effects.css";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screens</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Su nombre"
        className="form-control"
      />
      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
