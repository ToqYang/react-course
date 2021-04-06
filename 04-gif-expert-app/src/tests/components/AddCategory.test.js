import React from "react";
import AddCategory from "../../components/AddCategory";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Pruebas en Add Category", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Mostrarse Correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar el texto", () => {
    const input = wrapper.find("input");
    const value = "Hello World";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe postear", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hello";
    input.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(input.text()).toBe("");
  });
});
