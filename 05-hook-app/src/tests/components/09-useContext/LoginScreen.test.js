import React from "react";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";
import { mount } from "enzyme";

describe("Pruebas en <LoginScreen />", () => {
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );
  test("Testear correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe ejecutar el argumento por separado", () => {
    wrapper.find("button").simulate("click");
    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: "Goku",
    });
  });
});
