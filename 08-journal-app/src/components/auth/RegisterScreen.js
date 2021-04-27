import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPassword } from "../../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const initialState = {
    name: "Hernando",
    email: "nando@gmail.com",
    password: "123456",
    password2: "123456",
  };
  const [formValues, handleInputChange] = useForm(initialState);

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, password2);
    if (isFormValid()) {
      console.log("Formulario correcto");
      dispatch(startRegisterWithEmailPassword(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email not is valid"));
      return false;
    } else if (password !== password2 && password.length < 5) {
      dispatch(setError("password must be > 6"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title mb-5">Login</h3>

      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleRegister}
      >
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          autoComplete="off"
          className="auth__input"
          type="name"
          placeholder="Name"
          name="name"
          id=""
          value={name}
          onChange={handleInputChange}
        />
        <input
          autoComplete="off"
          className="auth__input"
          type="email"
          placeholder="Email"
          name="email"
          id=""
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          id=""
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm"
          name="password2"
          id=""
          value={password2}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>
        <Link className="link" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
