const Produto = require('../models/Produto')
const _ = require('lodash');
const { mapValues } = require('lodash')
const mongoose = require('mongoose')

// function Comparador(Data , DataAtt ){
//    const Keys = Object.keys(Data._doc)
//    Keys.shift()
//    console.log(Keys)
//    const IndexDelete = Keys.indexOf('createdAt')
//    Keys.splice(IndexDelete, 3)
//    const test = Data.find('_id')
//    console.log(test)
//    // for(const Key of Keys){
//    //    console.log(Data[Key])
//    //    if(typeof Data[Key] === 'object'){
//    //       for(const KeyByObj of Data[Key]){
//    //          console.log(KeyByObj)
//    //       }
//    //    }
//    // }

// }

class ProdutoController {
   static async CadastroProduto(req, res) {
      console.log("Criando Produto")
      try {
         console.log(req.body.nome)
         const ProdutoExist = await Produto.findOne({nome:{ $regex: req.body.nome, $options: 'i' }})
         if(!ProdutoExist){
            const novoProduto = await Produto.create(req.body);
            return res.status(201).json({ message: "criado com sucesso", produto: novoProduto});
         }else{
            res.status(409).json({message:'já existe um produto com esse nome!'})
         }
      } catch (erro) {
         res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuário` });
         console.log(erro)
      }
   }

   static async LeituraProduto (req, res){
      try{
         const Produtos = await Produto.find({})
         // const teste = await Produto.find({'Cores.Tamanhos._id': '6562dbd518218260708a837b'})
         const teste = await Produto.aggregate([{$match: {'Cores.Tamanhos._id': new mongoose.Types.ObjectId('6562dbd518218260708a837b')}}])
         console.log(JSON.stringify(teste))
         res.status(200).json(Produtos)
      }
      catch (error){
         res.status(500).json({message:"houve um erro ao entar acessar os Produtos", error})
      }
   }

   static async AtualizandoProduto(req, res) { //dar um retoue se der tempo
      console.log("atualizando produto")
      try {
         const id = req.params.id
         
         console.log(`atualizando por id:${id}`);
         const ProdutoVerificação = await Produto.find({nome: {$regex: req.body.nome, $options: 'i' }})
         const Verificação = (ProdutoVerificação?.map(({_id , ...resto})=>(_id != id)).includes(true))
         if(!Verificação){
            console.log('update')
            let Att = await Produto.findById(id);
            const itens = ["marca", "nome", "valor", "tipo", "Img","Cores"]
            Att = _.pick(Att, itens);
            if(!(JSON.stringify(mapValues(req.body, obj => obj)) === JSON.stringify(mapValues(Att, obj => obj)))){
               console.log('não iguais')
               await Produto.findByIdAndUpdate(id, req.body);
               return res.status(200).end()
            }else{
               console.log('iguais')
               return res.status(304).json({message:'Não Houve mudança no produto!'});
            }
         }else{
            return res.status(409).json({message:'já existe um produto com esse nome!'});
         }
         // const test = await Produto.findById(id, req.body);
         // console.log(JSON.stringify(test) === JSON.stringify(req.body))
         // Comparador(ProdutoVerificação);
         // if(req.body === ProdutoVerificação){
         //    console.log("igual")
         //    return res.status(204).end();
         // }
      } catch (error) {
         console.log('deu ruim')
         console.log(error)
         res.status(400).json({ message: "erro ao tentar atualizar usuários", error });
      }
   }

   static async DeletandoProduto(req, res){
      console.log('deletando produto')
      const id = req.params.id
      try{
         const ProdutoDel = await Produto.findByIdAndDelete(id)
         if(ProdutoDel === null){
            return res.status(400).json({message: 'produto não existe!'})
         }
         res.status(200).json({message: 'produto deletado com sucesso!' , ProdutoDel})
      }
      catch(error){
         res.status(500).json({message:'erro ao tentar deletar' , error})
      }
   }
}

module.exports = ProdutoController