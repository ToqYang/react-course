/*
    Ruta de eventos
    host + /api/events
*/
const Router = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEventos,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { check } = require("express-validator");
const router = Router();
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

router.use(validarJWT);
router.get("/", getEventos);
router.post(
  "/",
  check("title", "El titulo es obligatorio").notEmpty(),
  check("start", "Fecha inicio es obligatorio").custom(isDate),
  check("end", "Fecha de finalizar").custom(isDate),
  validarCampos,
  crearEventos
);
router.put("/:id", actualizarEvento);
router.delete("/:id", eliminarEvento);

module.exports = router;
