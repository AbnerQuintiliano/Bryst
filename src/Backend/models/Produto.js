const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProdutoSchema = new Schema(
   {
      id:{type: mongoose.Schema.Types.ObjectId},
      Cores:[{
         Cor:String,
         Tamanhos:[{
            Tamanho: String,
            Quantidade: Number
         }]
      }],
      marca:{
         type: String,
         required: true
      },
      nome: {
         type: String,
         required: true
      },
      valor: Number,
      tipo: {
         type: String,
         required: true
      },
      Img: String
   },
   { timestamps:true ,VesionKey:false}
)

const Produto = mongoose.model( "Produto" , ProdutoSchema );

module.exports = Produto;
