import React, { useContext } from "react";
import { types } from "../../types/types";
import { AuthContext } from "../../auth/AuthContext";

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    dispatch({ type: types.login, payload: { name: "Santiago" } });

    history.replace(lastPath);
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
