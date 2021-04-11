import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";
import { other } from "../../fixtures/other";

describe("Pruebas en todoReducer", () => {
  test("Debe retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test("Agregar todo", () => {
    const action = {
      type: "add",
      payload: other,
    };
    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, other]);
  });

  test("Debe borrar algun todo", () => {
    const action = {
      type: "delete",
      payload: 1,
    };

    const data = demoTodos.find((item) => item.id !== 1);
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(1);
    expect(state).toEqual([data]);
  });

  test("Hacer el toggle", () => {
    const action = {
      type: "toggle",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);
    const data = state.find((item) => item.id === 1);
    expect(state[0]).toEqual(data);
    expect(state[0].done).toBe(true);
  });
});
