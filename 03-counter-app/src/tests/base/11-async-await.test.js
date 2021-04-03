import "@testing-library/jest-dom";
import { getImagen } from "../../base/11-async-await";

describe("Pruebas para 11 funciones.js async-await", () => {
  test("debe retornar la url", async () => {
    const url = await getImagen();

    expect(typeof url).toBe("string");
  });
});
