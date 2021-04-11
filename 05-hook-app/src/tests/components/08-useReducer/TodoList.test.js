import React from "react";
import TodoList from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";
import { shallow } from "enzyme";
const handleDelete = jest.fn();
const handleToggle = jest.fn();

describe("Pruebas <TodoList />", () => {
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Probar <TodoListItem />", () => {
    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);
    expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );
  });
});
