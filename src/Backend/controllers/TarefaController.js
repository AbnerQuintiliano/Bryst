const Tarefa = require('../models/Tarefas')
// const _ = require('lodash');
// const mongoose = require('mongoose')

class TarefaController {
   static async CadastrandoTarefa(req, res){
      console.log('Criando Tarefa')
      try{
         const novaTarefa = await Tarefa.create(req.body)
         console.log(novaTarefa)
         return res.status(201).json({ message: "criado com sucesso"});
      }catch (erro){
         res.status(400).json({ message: `${erro.message} - falha ao cadastrar usuário` });
         console.log(erro)
      }
   }
   static async LeituraTarefa(req, res){
      const Tarefas = await Tarefa.find({})
      res.status(200).json(Tarefas)
   }
   static async DeletandoTarefa(req, res){
      const id = req.params.id
      try{
         const TarefaDel = await Tarefa.findByIdAndDelete(id)
         if(TarefaDel === null){
            return res.status(400).json({message: 'tarefa não existe!'})
         }
         res.status(200).json({message: 'Tarefa deletado com sucesso!' , TarefaDel})
      }
      catch(error){
         res.status(500).json({message:'erro ao tentar deletar' , error})
      }
   }
}

module.exports = TarefaController