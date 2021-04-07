import React from "react";
import useForm from "../../hooks/useForm";
import "./effects.css";
//import Message from "./Message";

const FormWithCustomHook = () => {
  const [formState, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form Custom Hook</h1>
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

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="******"
          value={password}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>

      <button className="btn btn-primary m-5" type="submit">
        Guardar
      </button>
    </form>
  );
};

export default FormWithCustomHook;
