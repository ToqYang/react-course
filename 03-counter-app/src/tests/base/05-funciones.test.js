import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas para 05 funciones.js", () => {
  test("getUser retorna objeto", () => {
    //1. Inicialización

    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo retorna un objeto", () => {
    //1. Inicialización
    const nombre = "Santiago";

    const userTest = {
      uid: "ABC567",
      username: nombre,
    };
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual(userTest);
  });
});
