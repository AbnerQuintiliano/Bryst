const Produto = require('../models/Produto')
// var _ = require('lodash');

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
         }
         res.status(409).json({message:'já existe um produto com esse nome!'})
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

   static async AtualizandoProduto(req, res) { //dar um retoue se der tempo
      console.log("atualizando produto")
      try {
         const id = req.params.id
         
         console.log(`atualizando por id:${id}`);
         // const ProdutoVerificação = await Produto.findById(id)
         const test = await Produto.findByIdAndUpdate(id, req.body);
         console.log(JSON.stringify(test) === JSON.stringify(req.body))
         // Comparador(ProdutoVerificação);
         // if(req.body === ProdutoVerificação){
         //    console.log("igual")
         //    return res.status(204).end();
         // }
         res.status(200).end();
      } catch (error) {
         console.log('deu ruim')
         res.status(304).json({ message: "erro ao tentar atualizar usuários", error });
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