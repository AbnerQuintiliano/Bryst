const mongoose = require('mongoose')

const { Schema } = mongoose;

const TarefaSchema = new Schema(
   {
      id:{type: mongoose.Schema.Types.ObjectId},
      conteudo:{
         type:String, 
         required:true
      }
   },
   {VesionKey:false}
)

const Tarefa = mongoose.model('Tarefa' , TarefaSchema);
module.exports = Tarefa;