import React from "react";
import { shallow } from "enzyme";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Test to component <TodoListItem />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const index = 0;
  let wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={index}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <TodoListItem
        todo={demoTodos[0]}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
  });

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe llamar la funcion handleDelete", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test("Debe llamar la funcion handleToggle", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenLastCalledWith(demoTodos[0].id);
  });
  test("Mostrar correctamente", () => {
    expect(wrapper.find("p").text()).toEqual(
      `${index + 1}. ${demoTodos[0].desc}`
    );
  });

  test("Complete la clase si el TODO.done = true", () => {
    const newTodo = demoTodos[0];
    newTodo.done = true;
    wrapper = shallow(<TodoListItem todo={newTodo} />);

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
