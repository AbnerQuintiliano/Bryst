const mongoose = require('mongoose')

const { Schema } = mongoose;

const CompraSchema = new Schema(
   {
      id:{type: mongoose.Schema.Types.ObjectId},
      itens:[{
         produto:{
            type:Schema.Types.ObjectId,
            ref: 'Produto',
            populate:{ select: 'nome Img valor'}
         },
         TamanhoSelecionado: String,
         CorSelecionado: String,
         quantidade: Number
      }],
      total: Number,
      pagamento: Number,
      autor: String
   },
   { timestamps:true },{VesionKey:false}
)

const Compra = mongoose.model('Compra' , CompraSchema);
module.exports = Compra;