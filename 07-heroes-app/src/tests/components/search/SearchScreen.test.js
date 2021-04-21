import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router";
import SearchScreen from "../../../components/search/SearchScreen";

describe("Pruebas en <SearchScreen />", () => {
  test("Debe mostrarse correctamente con los valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe("Search a hero");
  });

  test("Debe de mostrar a batman y el input del valor query string", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe("batman");
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe un error si no se encuentra un hero", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batmanbhkcbhkdbhjc"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find("input").prop("value")).toBe("batmanbhkcbhkdbhjc");
    expect(wrapper.find(".alert-danger").text().trim()).toEqual(
      "There is no a hero with batmanbhkcbhkdbhjc"
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe llamar al push history", () => {
    const history = {
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("input").simulate("change", {
      target: {
        name: "searchText",
        value: "batman",
      },
    });

    wrapper.find("form").prop("onSubmit")({ preventDefault() {} });

    expect(history.push).toHaveBeenCalledWith(`?q=batman`);
  });
});
