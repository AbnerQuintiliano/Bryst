const rotas = require("express").Router();
const router = require("./UserRouter")

rotas.use("/", router);

module.exports = rotas;