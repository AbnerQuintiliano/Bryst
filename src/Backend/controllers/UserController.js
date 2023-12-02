const User = require("../models/User")
const jwt = require('jsonwebtoken');

require("dotenv").config();

const Verificação = async(req, res, IdUser=false) => {
   if(IdUser){
      let DataId 
      DataId= await User.find({_id:IdUser})
      var ExistUserNameById = DataId
      ExistUserNameById = ExistUserNameById.map(({user, password, userName, email, office,...resto})=>({user, password, userName, email, office}))
   }else{
      return res.status(400).json({message:'o id do usuário não foi passado'})
   }
   if(IdUser && JSON.stringify(ExistUserNameById[0]) === JSON.stringify(req.body)){
      console.log('Não houve mudança nos dados')
      return false;
   }
   let ExistUsers = await User.find({user: { $regex: req.body.user, $options: 'i' }});
   IdUser && (ExistUsers = ExistUsers.filter((object) => (`${object._id}` !== IdUser)))
   const ValuesbyCompUser = ExistUsers.map((Users) => (Users.user.toLowerCase()))
   console.log(ValuesbyCompUser + ' CompUser')
   const TestUser = ValuesbyCompUser.includes(req.body.user.toLowerCase())

   let ExistUserNames = await User.find({userName:{ $regex:req.body.userName , $options: 'i' }});
   IdUser && (ExistUserNames = ExistUserNames.filter((object) => (`${object._id}` !== IdUser)))
   const ValuesbyCompUserName = ExistUserNames.map((UserNames) => (UserNames.userName.toLowerCase()))
   console.log(ValuesbyCompUserName + " CompUserName")
   const TestUserName = ValuesbyCompUserName.includes(req.body.userName.toLowerCase())

   let ExistEmails = await User.find({email: { $regex: req.body.email, $options: 'i' }});
   IdUser && (ExistEmails = ExistEmails.filter((object) => (`${object._id}` !== IdUser)))
   const ValuesbyCompEmail = ExistEmails.map((Emails) => (Emails.email.toLowerCase()))
   console.log(ValuesbyCompEmail + ' CompEmail')
   const TestEmail = ValuesbyCompEmail.includes(req.body.email.toLowerCase())

   if(TestUser){
      if(TestUserName){
         if(TestEmail){
            console.log('user, userName e email ja existe')
            res.status(400).json({
               erro:[
                  { message: `O usuário ${req.body.user} ja existe no sistema`, user:ExistUsers.map((Users) => (Users.user))},
                  { message: `O nome usuário ${req.body.userName} ja existe no sistema`, userName:ExistUserNames.map((UserNames) => (UserNames.userName)) },
                  { message: `O nome usuário ${req.body.email} ja existe no sistema`, email:ExistEmails.map((Emails) => (Emails.email)) }
               ]
            });
            return;
         }
         console.log('user e userName ja existe')
         res.status(400).json({
            erro:[
               { message: `O usuário ${req.body.user} ja existe no sistema`, user:ExistUsers.map((Users) => (Users.user))},
               { message: `O nome usuário ${req.body.userName} ja existe no sistema`, userName:ExistUserNames.map((UserNames) => (UserNames.userName)) },
               { message: null, userName:null }
            ]
         });
      }else{
         if(TestEmail){
            console.log('user e email ja existe')
            res.status(400).json({
               erro:[
                  { message: `O usuário ${req.body.user} ja existe no sistema`, user:ExistUsers.map((Users) => (Users.user))},
                  { message: null, userName:null},
                  { message: `O nome usuário ${req.body.email} ja existe no sistema`, email:ExistEmails.map((Emails) => (Emails.email)) }
               ]
            });
            return;
         }
         console.log('user ja existe')
         res.status(400).json({
            erro:[
               { message: `O usuário ${req.body.user} ja existe no sistema`, user:ExistUsers.map((Users) => (Users.user))},
               { message:null, userName:null},
               { message:null, userName:null}
            ]
         });
      }
   }else{ 
      if(TestUserName){
         if(TestEmail){
            console.log('nome usuario e email ja existe')
            res.status(400).json({
               erro:[
                  { message: null, user:null},
                  { message: `O nome usuário ${req.body.userName} ja existe no sistema`, userName:ExistUserNames.map((UserNames) => (UserNames.userName)) },
                  { message: `O nome usuário ${req.body.email} ja existe no sistema`, email:ExistEmails.map((Emails) => (Emails.email)) }
               ]
            });
            return;
         }
         console.log('nome usuario ja existe')
         res.status(400).json({
            erro:[
               { message: null, user:null},
               { message: `O nome usuário ${req.body.userName} ja existe no sistema`, userName:ExistUserNames.map((UserNames) => (UserNames.userName)) },
               { message: null, user:null}
            ]
         });
      }else{
         if(TestEmail){
            console.log('email ja existe')
            res.status(400).json({
               erro:[
                  { message: null, user:null},
                  { message: null, userName:null },
                  { message: `O nome usuário ${req.body.email} ja existe no sistema`, email:ExistEmails.map((Emails) => (Emails.email)) }
               ]
            });
            return;
         }
         console.log('Verificação feita e permitida')
         return true
   }}}

class UserController {
   static async Login(req, res){
      console.log("logando usuario")
      try{
         const Usuario = await User.find({user:{ $regex: req.body.user}})
         const Login = Usuario.map((obj)=>(obj.password === req.body.password))
         if(Login[0] === true){
            const TokenData = {
               userName:Usuario[0].userName,
               office: Usuario[0].office
            }
            const Token = jwt.sign(TokenData, process.env.Token_Key, {expiresIn:"1h"})
            console.log(Usuario[0].userName)
            res.status(200).json({
               userName: Usuario[0].userName,
               token:Token
            })
         }else{
            res.status(400).json({message:'usuário ou senha estão erradas!'})
         }
      }catch(error){
         console.log(error)
         res.status(500).json({message:'Houve um erro ao tentar realizar o login.', error})
      }
   }

   static async AuthToken(req, res ,next){
      console.log("Verificando token")
      try{
         const token = req.header('Authorization');
         jwt.verify(token, process.env.Token_Key, (error, decode) => {
            if(!error){
               res.status(200).json({
                  sucess: true, 
                  TokenData: decode
               })
            }else{
               res.status(401).json({
                  sucess: false, error
               })
            }
         })
      }
      catch(error){
         console.log('Deu ruim')
         res.status(500).json(error)
      }
   }

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
      try {
         if( await Verificação(req,res) === true){ 
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
         let Teste = await Verificação(req ,res ,id)
         if( Teste === true){
            const UserAtt = await User.findByIdAndUpdate(id, req.body);
            res.status(200).json(UserAtt);
         } else if(Teste === false){
            res.status(400).json({
               erro:[
                  { message: null, user:null},
                  { message: null, userName:null },
                  { message: null, userName:null },
                  {message: true}
               ]
            });
         }
      } catch (error) {
         res.status(304).json({ messageErro: "erro ao tentar atualizar usuários", error });
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

module.exports = UserController;