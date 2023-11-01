const router = require ("express").Router();

const loginController = require("../controllers/UserController");

router.route("/UserS/:user").get(loginController.ProcurandoUser)
router.route("/User").get(loginController.LeituraUser)
router.route("/UserC").post(loginController.CadastroUser)
router.route("/User/:id").put(loginController.AtualizandoUser)
router.route("/UserD/:id").delete(loginController.DeletnadoUser)

module.exports = router;