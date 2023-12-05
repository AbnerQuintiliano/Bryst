const rotas = require("express").Router();
const routerUser = require("./UserRouter")
const routerProduto = require("./ProdutoRouter")
const routerTarefa = require("./TarefasRouter")

rotas.use("/", routerUser);
rotas.use("/Produto", routerProduto);
rotas.use("/Tarefa", routerTarefa);

module.exports = rotas;