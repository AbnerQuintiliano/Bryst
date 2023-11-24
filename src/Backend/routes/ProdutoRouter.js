const router = require('express').Router();
const ProdutoController = require('../controllers/ProdutoController');


router.route("/").get(ProdutoController.LeituraProduto)
router.route("/Create").post(ProdutoController.CadastroProduto)
router.route("/Atualizando/:id").put(ProdutoController.AtualizandoProduto)

module.exports = router