import { types } from "../../types/types";

describe("Pruebas con nuestros tipos", () => {
  test("Debe tener estos tipos", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",

      uiSetError: "[UI] setError",
      uiRemoveError: "[UI] RemoveError",
      uiStartLoading: "[UI] Start loading",
      uiFinishLoading: "[UI] Finish loading",

      notesAddNew: "[Notes] New Note",
      notesActive: "[Notes] Set Active note",
      notesLoad: "[Notes] Load notes",
      notesUpdated: "[Notes] Update notes saved",
      notesFileUrl: "[Notes] Updated image url",
      notesDelete: "[Notes] Delete note",
      notesLogoutCleaning: "[Notes] Logout Cleaning",
    });
  });
});
