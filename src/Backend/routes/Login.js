const router = require ("express").Router();
const Users = require("../models/Login")

const loginController = require("../controllers/LoginController");

router.route("/User").get(loginController.LeituraUser)
router.route("/UserC").post(loginController.CadastroUser)

module.exports = router;