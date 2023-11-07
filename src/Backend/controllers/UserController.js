const User = require("../models/User")

class loginController {
   static async LeituraUser(req, res) {
      console.log("Lendo usuários")
      try {
         const ListaUser = await User.find({});
         res.status(200).json(ListaUser);
      } catch (error) {
         res.status(500).json({ message: "erro ao tentar acessar usuários", error });
      }
   }

   static async CadastroUser(req, res) {
      console.log("Criando user")
      // const novoUser = await User.create(req.body);
      try {
         const ExistUser = await User.findOne({user: { $regex: req.body.user, $options: 'i' }});
         const ExistUserName = await User.findOne({userName:{ $regex:req.body.userName , $options: 'i' }});
         if(ExistUser){
            console.log('user ja existe')
            if(ExistUserName){
               console.log('user e userName ja existe')
               res.status(422).json({
                  erro:[
                     { message: `O usuário ${req.body.user} ja existe no sistema`, user:ExistUser.user},
                     { message: `O nome usuário ${req.body.userName} ja existe no sistema`, userName:ExistUserName.userName }
                  ]
               });
            }else{
               res.status(422).json({
                  erro:[
                     { message: `O usuário ${req.body.user} ja existe no sistema`, user:ExistUser.user},
                     { message:null, userName:null}
                  ]
               });
            }
         }else if(ExistUserName){
            res.status(422).json({
               erro:[
                  { message: null, user:null},
                  { message: `O nome usuário ${req.body.userName} ja existe no sistema`, userName:ExistUserName.userName }
               ]
            });
         }else{
            const novoUser = await User.create(req.body);
            res.status(201).json({ message: "criado com sucesso", usuarios: novoUser}); 
         }

      } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuário` });
      }
   }

   static async ProcurandoUser(req, res) {
      console.log("Procurando user com ")
      try {
         const name = req.params.user;
         console.log("pesquisando por:" + name);
         const ListaUser = await User.find({ user: { $regex: name, $options: 'i' } });
         res.status(200).json(ListaUser);
      } catch (error) {
         res.status(500).json({ message: "erro ao tentar procurar usuários", error });
      }
   }
   static async AtualizandoUser(req, res) {
      console.log("atualizando user")
      
      try {
         const id = req.params.id;

         console.log(`atualizando por id:${id}`);
         console.log(`atualizando:${req.body.password}`);

         const UserAtt = await User.findByIdAndUpdate(id, req.body);
         res.status(200).json(UserAtt);
      } catch (error) {
         res.status(500).json({ message: "erro ao tentar atualizar usuários", error });
      }
   }
   static async DeletnadoUser(req, res) {
      console.log("deletando user")
      try {
         const id = req.params.id;

         console.log(`deletando usuário de id:${id}`);

         const UserDel = await User.findByIdAndDelete(id);
         res.status(200).json({ msg: "usuário deletado com sucesso!", UserDel });
      } catch (error) {
         res.status(500).json({ message: "erro ao tentar deletar usuários", error });
      }
   }
};

module.exports = loginController;