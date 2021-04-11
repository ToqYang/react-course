import React from "react";
import { mount, shallow } from "enzyme";
import { demoTodos } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react";
import TodoApp from "../../../components/08-useReducer/TodoApp";

describe("Prueba <TodoApp />", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});

  test("Mostrarse Correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe agregar un TODO", () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe(`Todo App ( 2 )`);
    expect(localStorage.setItem).toBeCalledTimes(2);
  });

  test("Debe eliminar todo", () => {
    wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
    wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);

    expect(wrapper.find("h1").text().trim()).toBe(`Todo App ( 0 )`);
  });
});
