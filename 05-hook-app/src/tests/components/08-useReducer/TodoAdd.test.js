import React from "react";
import { shallow } from "enzyme";
import TodoAdd from "../../../components/08-useReducer/TodoAdd";

describe("Pruebas en <TodoAdd />", () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test("Mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("No se debe llamar", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("Debe llamar la funcion handle addTodo", () => {
    const value = "Aprender react";
    wrapper
      .find("input")
      .simulate("change", { target: { value, name: "description" } });

    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      desc: value,
      done: false,
      id: expect.any(Number),
    });
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
