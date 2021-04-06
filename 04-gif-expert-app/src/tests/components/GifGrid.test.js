import React from "react";
import GifGrid from "../../components/GifGrid";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Test component <GifGrid />", () => {
  const category = "One Punch";
  test("Print correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar items cuando se cargan useFetchGif", () => {
    const gifs = [
      {
        id: "ABC",
        url: "http://lamejorimagendelundo.com",
        title: "Cualquier imagen del mundo",
      },
      {
        id: "ABsdjffdjk",
        url: "http://lamedsjorimagendelundo.com",
        title: "Cualquiedsur imagen del mundo",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    //expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
