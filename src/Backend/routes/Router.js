const rotas = require("express").Router();
const router = require("./Login")

rotas.use("/", router);

module.exports = rotas;