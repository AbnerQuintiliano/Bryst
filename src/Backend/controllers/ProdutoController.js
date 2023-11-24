const Produto = require('../models/Produto')
var _ = require('lodash');

function Comparador(Data , DataAtt ){
   const Keys = Object.keys(Data._doc)
   Keys.shift()
   const IndexDelete = Keys.indexOf('createdAt')
   Keys.splice(IndexDelete, 3)
   const test = Data.find('_id')
   console.log(test)
   // for(const Key of Keys){
   //    console.log(Data[Key])
   //    if(typeof Data[Key] === 'object'){
   //       for(const KeyByObj of Data[Key]){
   //          console.log(KeyByObj)
   //       }
   //    }
   // }

}

class ProdutoController {
   static async CadastroProduto(req, res) {
      console.log("Criando Produto")
      try {
         const novoProduto = await Produto.create(req.body);
         res.status(201).json({ message: "criado com sucesso", produto: novoProduto});
      } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuário` });
      }
   }

   static async LeituraProduto (req, res){
      try{
         const Produtos = await Produto.find({})
         res.status(200).json(Produtos)
      }
      catch (error){
         res.status(500).json({message:"houve um erro ao entar acessar os Produtos", error})
      }
   }

   static async AtualizandoProduto(req, res) {
      console.log("atualizando produto")
      
      try {
         const id = req.params.id
         console.log(`atualizando por id:${id}`);
         const ProdutoVerificação = await Produto.findById(id)
         Comparador(ProdutoVerificação)
         // if(req.body === ProdutoVerificação){
         //    console.log("igual")
         //    return res.status(204).end();
         // }
         const ProdutoAtt = Produto.findOneAndUpdate(id, req.body)
         res.status(200).json({message:"Atualizado com sucesso!", ProdutoAtt})
      } catch (error) {
         res.status(304).json({ message: "erro ao tentar atualizar usuários", error });
      }
   }
}

module.exports = ProdutoController