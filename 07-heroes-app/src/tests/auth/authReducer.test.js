import { AuthContext } from "../../auth/AuthContext";
import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";
import { user } from "../fixtures/person";

describe("Prueba en auth reducer", () => {
  test("Debe retornar estado por defecto", () => {
    const userauth = authReducer({ logged: false }, {});
    expect(userauth).toEqual({ logged: false });
  });
  test("Debe de autenticar y colocar el name del usuario", () => {
    const person = { name: user.name };
    const action = {
      type: types.login,
      payload: person,
    };
    const login = authReducer(user, action);
    expect(login).toEqual({ ...person, logged: true });
  });

  test("Debe borrar name del usuario", () => {
    const person = { name: user.name };
    const action = {
      type: types.logout,
      payload: person,
    };
    const login = authReducer(user, action);
    expect(login).toEqual({ logged: false });
  });
});
