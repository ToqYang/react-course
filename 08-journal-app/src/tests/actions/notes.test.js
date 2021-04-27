import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startNewNote,
  startSaveNote,
  startLoadingNotes,
  startUpLoading,
} from "../../actions/notes";
import { db } from "../../firebase/firebase-config";
import { types } from "../../types/types";

jest.mock("../../helpers/fileUpload", () => ({
  fileUpload: jest.fn(() => {
    return "https://hola-mundo.com/";
  }),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "TESTING",
  },
  notes: {
    active: {
      id: "C3cTX6t2u7kR92dOrAOg",
      title: "Hola",
      body: "Mundo",
    },
  },
};
let store = mockStore(initState);

describe("Pruebas con las acciones de los notes", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });
  test("Debe crear una nueva nota", async () => {
    await store.dispatch(startNewNote());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    const docId = actions[1].payload.id;
    await db.doc(`TESTING/journal/notes/${docId}`).delete();
  });

  test("startLoading debe cargar las notas", async () => {
    await store.dispatch(startLoadingNotes("TESTING"));
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    };

    expect(actions[0].payload[0]).toMatchObject(expected);
  });

  test("startSavedNote debe actualizar la nota", async () => {
    const note = {
      id: "KRMHRjXGHUYstUJUKv1n",
      title: "titulo",
      body: "body",
    };

    await store.dispatch(startSaveNote(note));
    const actions = store.getActions();

    expect(actions[0].type).toBe(types.notesUpdated);

    const docRef = await db.doc(`TESTING/journal/notes/${note.id}`).get();

    expect(docRef.data().title).toBe(note.title);
  });

  test("startUploading debe actualizar url", async () => {
    const file = new File([], "foto.jpg");
    await store.dispatch(startUpLoading(file));

    const docRef = await db
      .doc("/TESTING/journal/notes/C3cTX6t2u7kR92dOrAOg")
      .get();
    expect(docRef.data().url).toBe("https://hola-mundo.com/");
  });
});
