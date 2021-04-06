import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Tests component GifGridItem", () => {
  const url =
    "https://media2.giphy.com/media/oxbNORcXx76F2/giphy.gif?cid=a652ae1db1f3uib8icf4f8d5yjlm65vkoog62yb4fh30nt2g&rid=giphy.gif";
  const title = "opm GIF";
  const wrapper = shallow(<GifGridItem url={url} title={title} />);

  test("Test if the coponent update correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener el parrafo con el titulo ", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("img igual al props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe tener fadeIn", () => {
    const div = wrapper.find("div");
    expect(div.hasClass("animate__fadeIn")).toBe(true);
  });
});
