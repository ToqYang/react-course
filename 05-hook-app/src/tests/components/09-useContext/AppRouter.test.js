import React from "react";
import { mount } from "enzyme";
import AppRouter from "../../../components/09-useContext/AppRouter";
import "@testing-library/jest-dom";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <AppRouter />", () => {
  const user = {
    id: 1,
    name: "Goku",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
