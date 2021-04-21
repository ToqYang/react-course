import React from "react";
import { AuthContext } from "../../../auth/AuthContext";
import LoginScreen from "../../../components/login/LoginScreen";
import { mount } from "enzyme";
import { types } from "../../../types/types";

describe("Pruebas en <LoginScreen />", () => {
  const history = {
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={history} />
    </AuthContext.Provider>
  );
  test("Mostrar correctamente snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe realizar el dispatch y la navegación", () => {
    const handleClick = wrapper.find("button").prop("onClick");

    handleClick();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "Santiago",
      },
    });
    expect(contextValue.dispatch).toHaveBeenCalledTimes(1);
    expect(history.replace).toHaveBeenCalledWith("/");
    localStorage.setItem("lastPath", "/dc");
    handleClick();
    expect(history.replace).toHaveBeenCalledWith("/dc");
  });
});
