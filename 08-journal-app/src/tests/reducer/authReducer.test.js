import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Pruebas en el authReducer", () => {
  const login = {
    type: types.login,
    payload: {
      uid: "v0tE09",
      displayName: "Hernando",
    },
  };
  let auth = authReducer({}, login);
  test("Login", () => {
    expect(auth).toEqual({
      uid: login.payload.uid,
      name: login.payload.displayName,
    });
  });

  test("Logout", () => {
    const logout = {
      type: types.logout,
    };
    auth = authReducer({}, logout);
    expect(auth).toEqual({});
  });

  test("Default state", () => {
    auth = authReducer(login);
    expect(auth).toEqual(login);
  });
});
