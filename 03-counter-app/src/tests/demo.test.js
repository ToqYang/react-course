describe("Pruebas en el demo.js", () => {
  test("Debe ser string", () => {
    //1. Iniciaización
    const mensaje = "Hola Mundo";
    const mensaje2 = "Hola Mundo";

    expect(mensaje).toBe(mensaje2);
  });
});
