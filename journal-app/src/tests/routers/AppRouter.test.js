// import React from "react";
// import { mount } from "enzyme";
// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";
// import thunk from "redux-thunk";
// import "@testing-library/jest-dom";
// import { MemoryRouter } from "react-router-dom";
// import AppRouter from "../../routers/AppRouter";
// import { act } from "@testing-library/react";
// import { firebase } from "../../firebase/firebase-config";
// import { login } from "../../actions/auth";
describe("Pruebas Login", () => {
  test("Correct", () => {});
});

// jest.mock("../../actions/auth", () => ({
//   login: jest.fn(),
// }));

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

// const initState = {
//   auth: {},
//   ui: {
//     loading: false,
//     msgError: null,
//   },
//   notes: {
//     active: {
//       id: "ABC",
//     },
//     notes: [],
//   },
// };
// let store = mockStore(initState);
// store.dispatch = jest.fn();

// describe("Pruebas en <AppRouter />", () => {
//   test("Debe llamar al login si esta autenticado", async () => {
//     let user;
//     await act(async () => {
//       const userCred = await firebase
//         .auth()
//         .signInWithEmailAndPassword("test@testing.com", "123456");

//       user = userCred.user;

//       console.log(user);

//       const wrapper = mount(
//         <Provider store={store}>
//           <MemoryRouter>
//             <AppRouter />
//           </MemoryRouter>
//         </Provider>
//       );

//       expect(login.l).toHaveBeenCalledWith(
//         "AIzaSyAHjIEOObN89U1ocAsNAy3EkLwlMEEos14",
//         null
//       );
//     });
//   });
// });
