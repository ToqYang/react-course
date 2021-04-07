import React, { useState, useEffect } from "react";
import "./effects.css";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  useEffect(() => {}, []);

  useEffect(() => {
    //console.log("name");
  }, [name]);

  useEffect(() => {
    //console.log("formstate");
  }, [email]);
  return (
    <>
      <h1>UseEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
};

export default SimpleForm;
