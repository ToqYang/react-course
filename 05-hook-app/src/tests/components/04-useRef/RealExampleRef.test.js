import React from "react";
import { shallow } from "enzyme";
import RealExampleRef from "../../../components/04-useRef/RealExampleRef";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";

describe("Pruebas en <RealExampleRef/>", () => {
  const wrapper = shallow(<RealExampleRef />);
  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains(<MultipleCustomHooks />)).toBe(false);
  });

  test("Debe mostrar correctamente el <MultipleCustomHooks/>", () => {
    wrapper.find("button").simulate("click");

    expect(wrapper.contains(<MultipleCustomHooks />)).toBe(true);
  });
});
