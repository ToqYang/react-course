import React from "react";
import GifGridItem from "../src/components/GifGridItem";
import { shallow } from "enzyme";

describe("Tests component GifGridItem", () => {
  test("Test if the coponent update correctly", () => {
    const url =
      "https://media2.giphy.com/media/oxbNORcXx76F2/giphy.gif?cid=a652ae1db1f3uib8icf4f8d5yjlm65vkoog62yb4fh30nt2g&rid=giphy.gif";
    const title = "opm GIF";
    const wrapper = shallow(<GifGridItem url title />);
    expect(wrapper).toMatchSnapshot();
  });
});
