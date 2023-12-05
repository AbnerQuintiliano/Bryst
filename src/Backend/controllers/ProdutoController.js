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

   static async LeituraProdutoCompra (_ , res){
      try{
         const ProdutosCompra = await Produto.find({}, { Img: 0 })
         res.status(200).json(ProdutosCompra);
      }
      catch (error){
         res.status(500).json({message:"houve um erro ao entar acessar os Produtos", error})
      }
   }

   static async LeituraProduto (req, res){
      try{
         // const teste = await Produto.find({'Cores.Tamanhos._id': '6562dbd518218260708a837b'})
         const Produtos = await Produto.find({})
         // const teste = await Produto.aggregate([{$match: {'Cores.Tamanhos._id': new mongoose.Types.ObjectId('6562dbd518218260708a837b')}}])
         // console.log(JSON.stringify(teste))
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
         // eslint-disable-next-line eqeqeq
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

   static async FaltaProduto(req, res){
      // const teste = await Produto.find({'Cores.Tamanhos.Quantidade': {$lte: 5}},{ 'Cores.Tamanhos.$': 1 })
      // const teste = await Produto.aggregate([
      //    {$match: {'Cores.Tamanhos.Quantidade': { $lte: 5 }}},
      //    {$project: 
      //       {id: 1,marca: 1,nome: 1,valor: 1,tipo: 1, Cores: 
      //          {$map: 
      //             {input: '$Cores', as: 'cores', in: 
      //                { Cor: '$$cores.Cor',
      //                   Tamanhos: {
      //                      $filter: {input: '$$cores.Tamanhos', as: 'tamanho', cond: { $lte: ['$$tamanho.Quantidade', 5] }}
      //                   }
      //                }
      //             }
      //          }
      //       }
      //    }
      // ]);
      const teste  = await Produto.aggregate([
         {$match: {  'Cores.Tamanhos.Quantidade': { $lte: 5 }}},
         {
            $project: {id: 1, marca: 1, nome: 1, valor: 1, tipo: 1,
               Cores: {
                  $map: { input: '$Cores', as: 'cor', in: {
                     Cor: '$$cor.Cor',
                        Tamanhos: {
                           $filter: {input: '$$cor.Tamanhos',as: 'tamanho',cond: { $lte: ['$$tamanho.Quantidade', 5] }}
                        }
                  },},
               },
            },
         },
         {
            $project: {id: 1, marca: 1, nome: 1, valor: 1, tipo: 1,
               Cores: {
                  $filter: {input: '$Cores', as: 'cor',
                     cond: { $gt: [{ $size: '$$cor.Tamanhos' }, 0] },
                  },
               },
            },
         },
      ]);
      
      try{
         res.status(200).json(teste)
      }
      catch(error){
         res.status(400).json(error)
      }
   }

}


module.exports = ProdutoController