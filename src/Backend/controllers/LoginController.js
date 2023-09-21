const Users = require("../models/Login")
// const Users = require("../models/loginM")

class loginController {
    static async LeituraUser(req , res){
        console.log("Lendo usuarios")
        try {
            const ListaUser = await Users.find({});
            res.status(200).json(ListaUser);
        } catch (error) {
            res.status(500).json({ message:"erro ao tentar acessar usuarios" , error });
        }
    }
    static async CadastroUser(req , res){
        console.log("Criando user")
        try {
          const novoUser = await Users.create(req.body);
          res.status(201).json({ message: "criado com sucesso", usuarios: novoUser });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuario` });
        }
    }
    static async ProcurandoUser(req , res){
        console.log("Procurando user")
        try {
            const ListaUser = await Users.find();
            const ListaSeach = ListaUser.filter((busca)=>{(busca.user == "Abner")? console.log(busca):undefined})
            console.log(ListaSeach)
            res.status(200).json(ListaUser);
        } catch (error) {
            res.status(500).json({ message:"erro ao tentar acessar usuarios" , error });
        }
    }
};

module.exports = loginController;