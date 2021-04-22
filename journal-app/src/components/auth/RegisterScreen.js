import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title mb-5">Login</h3>

      <form action="">
        <input
          autocomplete="off"
          className="auth__input"
          type="name"
          placeholder="Name"
          name="name"
          id=""
        />
        <input
          autocomplete="off"
          className="auth__input"
          type="email"
          placeholder="Email"
          name="email"
          id=""
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          id=""
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm"
          name="password2"
          id=""
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
