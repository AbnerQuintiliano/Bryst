const rotas = require("express").Router();
const routerUser = require("./UserRouter")
const routerProduto = require("./ProdutoRouter")  

rotas.use("/", routerUser);
rotas.use("/Produto", routerProduto);

module.exports = rotas;