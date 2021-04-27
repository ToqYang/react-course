import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import Sidebar from "../../../components/journal/Sidebar";
import { startLogout } from "../../../actions/auth";
import { startNewNote } from "../../../actions/notes";

jest.mock("../../../actions/auth", () => ({
  startLogout: jest.fn(),
}));
jest.mock("../../../actions/notes", () => ({
  startNewNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: { notes: [] },
  notes: { notes: [] },
};
let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <Sidebar />
  </Provider>
);

describe("Pruebas <Sidebar />", () => {
  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe llamar star logout", () => {
    wrapper.find("button").prop("onClick")();

    expect(startLogout).toHaveBeenCalled();
  });

  test("Debe de llamar start new note", () => {
    wrapper.find(".journal__new-entry").prop("onClick")();

    expect(startNewNote).toHaveBeenCalled();
  });
});
