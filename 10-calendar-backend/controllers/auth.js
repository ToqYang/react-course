const { response } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
  const { name, email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Un usuario existe con ese correo",
      });
    }
    usuario = new Usuario(req.body);
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();
    const token = await generateJWT(usuario.id, usuario.name);

    res.status(201).json({
      ok: true,
      name: usuario.name,
      uid: usuario.id,
      token,
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador reg",
    });
  }
};

const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Un usuario existe no existe",
      });
    }

    const validPassword = bcrypt.compareSync(password, usuario.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Pasword incorrecto",
      });
    }

    const token = await generateJWT(usuario.id, usuario.name);

    res.json({
      ok: true,
      name: usuario.name,
      uid: usuario.id,
      token,
    });
  } catch (e) {
    console.log("Login: ", e);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador log",
    });
  }
};

const revalidarToken = async (req, res) => {
  const uid = req.uid;
  const name = req.name;
  const token = await generateJWT(uid, name);
  res.json({
    ok: true,
    token,
  });
};

module.exports = { crearUsuario, revalidarToken, loginUsuario };
