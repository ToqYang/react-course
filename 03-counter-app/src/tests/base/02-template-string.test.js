import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas parra base 02 template.js", () => {
  test("Prueba en el metodo get saludo", () => {
    //1. Inicialización
    const nombre = "Santiago";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
  });

  test("Verificar default value Hola Carlos", () => {
    //1. Inicialización
    const saludo = getSaludo();
    console.log(saludo);
    expect(saludo).toBe("Hola Carlos");
  });
});
