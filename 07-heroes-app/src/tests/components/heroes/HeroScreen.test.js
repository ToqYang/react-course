import React from "react";
import { mount } from "enzyme";
import HeroScreen from "../../../components/heroes/HeroScreen";
import { MemoryRouter } from "react-router";
import { Route } from "react-router-dom";

describe("Pruebas en <HeroScreen />", () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  test("Debe mostrar correctamente si no hay hero", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <HeroScreen history={history} />
      </MemoryRouter>
    );
    expect(wrapper.find("Redirect").exists()).toBe(true);
  });

  test("Debe de mostrar un hero si el parametro existe y se encuentra", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-batman"]}>
        <Route path="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find(".row").exists()).toBe(true);
  });

  test("Debe regresar a la pantalla anterior con push", () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-batman"]}>
        <Route
          path="/hero/:heroeId"
          component={() => <HeroScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").prop("onClick")();

    expect(history.push).toHaveBeenCalledWith("/");
    expect(history.goBack).not.toHaveBeenCalled();
  });

  test("Debe regresar a la pantalla anterior", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-batman"]}>
        <Route
          path="/hero/:heroeId"
          component={() => <HeroScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").prop("onClick")();

    expect(history.push).toHaveBeenCalledTimes(0);
    expect(history.goBack).toHaveBeenCalled();
  });

  test("Debe llamar al redirect si el hero no existe", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider123123123"]}>
        <Route
          path="/hero/:heroeId"
          component={() => <HeroScreen history={history} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe("");
  });
});
