import React, { useEffect, useState } from "react";
import AuthRouter from "./AuthRouter";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import { firebase } from "../firebase/firebase-config";
import { login } from "../actions/auth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [logged, setIsLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <h1>Wait...</h1>;
  }
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={JournalScreen}
            isAuthenticated={logged}
          />
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={logged}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
