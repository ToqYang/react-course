import "@testing-library/jest-dom";
import React from "react";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe("Counter App test", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Se muestra correctamente el CounterApp ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar 100 en el valor", () => {
    const num = 100;
    const wrapper = shallow(<CounterApp value={num} />);

    const valueNumber = wrapper.find("h2").text();

    expect(num.toString()).toBe(valueNumber);
  });

  test("Click +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const valueNumber = wrapper.find("h2").text();
    expect("11").toBe(valueNumber);
  });

  test("Click -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const valueNumber = wrapper.find("h2").text();
    expect("9").toBe(valueNumber);
  });

  test("Click reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");

    const valueNumber = wrapper.find("h2").text();
    expect("105").toBe(valueNumber);
  });
});
