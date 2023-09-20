const Users = require("../models/Login")
// const { UserC: ServiceModel } = require("../models/Login")
class loginController {
    static async LeituraUser(req , res){
        console.log("User lido")
        const ListaUser = await Users.find({});
        res.status(200).json(ListaUser);
    }
    static async CadastroUser(req , res){
        console.log("Criando user")
        try{
        console.log(Users)
        const NovoUser = await Users.create(req.body);
        console.log(NovoUser)
        res.status(201).json({message:"criado!", Users:NovoUser});
        }
        catch(error){
            console.log(error);
        }
    }
};

module.exports = loginController;