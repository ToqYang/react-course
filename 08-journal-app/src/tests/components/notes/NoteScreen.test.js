import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import { startLogout } from "../../../actions/auth";
import { activeNote, startNewNote } from "../../../actions/notes";
import NoteScreen from "../../../components/notes/NoteScreen";

jest.mock("../../../actions/notes", () => ({
  activeNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  ui: {
    loading: false,
    msgError: null,
  },
  auth: { uid: "1", name: "Fernando" },
  notes: {
    active: {
      id: 1234,
      title: "title",
      body: "mundo",
      date: 0,
    },
    notes: [],
  },
};
let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <NoteScreen />
  </Provider>
);

describe("Pruebas en <NoteScreen />", () => {
  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de disparar el active note", () => {
    wrapper.find('input[name="title"]').simulate("change", {
      target: {
        name: "title",
        value: "Hola de nuevo",
      },
    });

    expect(activeNote).toHaveBeenCalled();
    expect(activeNote).toHaveBeenLastCalledWith(1234, {
      body: "mundo",
      title: "Hola de nuevo",
      id: 1234,
      date: 0,
    });
  });
});
