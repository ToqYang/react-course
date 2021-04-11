import React from "react";
import { shallow } from "enzyme";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import useCouter from "../../../hooks/useCouter";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCouter");

describe("Pruebas en <MultipleCustomHooks/>", () => {
  useCouter.mockReturnValue({
    counter: 10,
    increment: () => {},
  });
  test("Debe mostrarse correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar la informacion", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Fernando",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola Mundo");
    expect(wrapper.find(".blockquote-footer").text().trim()).toBe("Fernando");
  });
});
