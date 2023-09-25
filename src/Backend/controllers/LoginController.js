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
        console.log("Procurando user com ")
        try {
            // const name = req.body.user;
            const name = req.params.user;

            console.log("pesquisando por:" + name);
                                                    //qual e atributo    options para aceitar M e m
            const ListaUser = await Users.find({user:{$regex:name , $options:'i'}});
            // const ListaSeach = ListaUser.filter((busca)=>{(busca.user == "Abner")? console.log(busca):undefined})
            // console.log(ListaSeach)
            res.status(200).json(ListaUser);
        } catch (error) {
            res.status(500).json({ message:"erro ao tentar procurar usuarios" , error });
        }
    }
    static async AtualizandoUser(req , res){
        console.log("atualizando user")
        try {
            const id = req.params.id;

            console.log(`atualizando por id:${id}`);
            console.log(`atualizando:${req.body.password}`);

            const UserAtt = await Users.findByIdAndUpdate(id ,req.body);
            res.status(200).json(UserAtt);
        } catch (error) {
            res.status(500).json({ message:"erro ao tentar atualizar usuarios" , error });
        }
    }
    static async DeletnadoUser(req , res){
        console.log("deletando user")
        try {
            const id = req.params.id;

            console.log(`deletando usuario de id:${id}`);

            const UserDel = await Users.findByIdAndDelete(id);
            res.status(200).json({ msg:"usuario deletado com sucesso!" , UserDel});
        } catch (error) {
            res.status(500).json({ message:"erro ao tentar deletar usuarios" , error });
        }
    }
};

module.exports = loginController;