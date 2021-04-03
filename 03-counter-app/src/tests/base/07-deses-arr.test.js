import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas para 07 funciones.js", () => {
  test("retornaArreglo debe retornar un [string, num]", () => {
    //1. Inicialización
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
