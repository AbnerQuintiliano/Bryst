const router = require ("express").Router();
const Users = require("../models/Login")

const loginController = require("../controllers/LoginController");

router.route("/User/:user").get(loginController.ProcurandoUser)
router.route("/User").get(loginController.LeituraUser)
router.route("/UserC").post(loginController.CadastroUser)
router.route("/User/:id").put(loginController.AtualizandoUser)
router.route("/User/:id").delete(loginController.DeletnadoUser)

module.exports = router;