import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Test component <GifExpertApp />", () => {
  test("Test correct making component", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe demostrar lista de categorias ", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp categories={categories} />);
    expect(wrapper.find("GifGrid").length).toMatchSnapshot(categories.length);
  });
});
