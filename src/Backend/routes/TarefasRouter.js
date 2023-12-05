const router = require('express').Router();
const TarefaController = require('../controllers/TarefaController');

router.route("/Create").post(TarefaController.CadastrandoTarefa)
router.route("/").get(TarefaController.LeituraTarefa)
router.route("/Deletando/:id").delete(TarefaController.DeletandoTarefa)

module.exports = router