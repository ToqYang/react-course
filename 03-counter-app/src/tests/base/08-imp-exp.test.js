import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas para 08 funciones.js", () => {
  test("debe retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("debe retornar un undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Retornar arreglo de heroes de DC", () => {
    const owner = "DC";
    const theHeroes = heroes.filter((heroe) => heroe.owner === owner);
    const hero = getHeroesByOwner(owner);

    expect(hero).toEqual(theHeroes);
  });

  test("Retornar Length de los arreglos de marvel", () => {
    const owner = "Marvel";
    const theHeroes = heroes.filter((heroe) => heroe.owner === owner);
    const hero = getHeroesByOwner(owner);

    expect(hero.length).toBe(2);
  });
});
