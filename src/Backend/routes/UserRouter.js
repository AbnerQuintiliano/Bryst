const router = require ("express").Router();
const UserController = require("../controllers/UserController");

router.route("/Login").post(UserController.Login)
router.route("/Auth").get(UserController.AuthToken)
router.route("/User").get(UserController.LeituraUser)
router.route("/UserC").post(UserController.CadastroUser)
router.route("/UserS/:user").get(UserController.ProcurandoUser) //nem uso
router.route("/UserA/:id").put(UserController.AtualizandoUser)
router.route("/UserD/:id").delete(UserController.DeletandoUser)


module.exports = router;