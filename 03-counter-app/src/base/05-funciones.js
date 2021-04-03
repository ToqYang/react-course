// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

export const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

const user = getUser();

// Tarea
export const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
