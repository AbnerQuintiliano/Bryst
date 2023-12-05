import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import * as V from "../../../../components/_variaveis";
import { Conteudo } from "./Conteudo";
import { ModalAdd } from "./ModalAdd";
import Msg from "../../../../components/Mensagem";
import { useModal ,useMensage } from "../../../../hooks/MyHooks";
import axios from "axios";
import { useContextModal } from "../ContextModal";

Modal.setAppElement('#root');
export default function Tarefas() {
   
   const {attValueModais} = useContextModal()
   const {Modal, openModal , closeModal} = useModal();
   const {HowMsg, handleMsg} = useMensage()
   const {HowMsg:HowMsgDel, handleMsg:handleMsgDel} = useMensage()

   const [Primeiro , setPrimeiro] = useState(true)
   const [Tarefas, setTarefas] = useState([])
   useEffect(() => {
      if(HowMsg || HowMsgDel || Primeiro === true){
      const Controller = new AbortController();
      axios.get('http://localhost:3001/api/Tarefa', {signal:Controller.signal})
      .then((response)=>{
         setTarefas(response.data)
      })
      .catch((error) => {
         console.error('Erro ao buscar dados da API:', error);
      })
      .finally(() => {
         if(!Controller.signal.aborted && Primeiro === true){
            setPrimeiro(false);
         }
      })
      return () => {
         console.log('cancelou...')
         Controller.abort();
      }
   }
   },[setTarefas, HowMsg, HowMsgDel, Primeiro , setPrimeiro])

   
   return(
   <V.Wrapper $MinWidth={'49%'}>
      <div>
         <V.BtnTitulo >Tarefas</V.BtnTitulo>
         <V.BtnTitulo $click onClick={()=> {openModal(); attValueModais()}}>+</V.BtnTitulo>
         {Modal && <ModalAdd isOpen={Modal} closeModal={() => {closeModal(); attValueModais()}} Notification={handleMsg}/>}
      </div>
         <V.ScrollCard height='100%' $HeightCel='100%' $direction>
            {Tarefas.map((obj)=>(
               <Conteudo $_id={obj._id} $Msg={handleMsgDel} key={obj._id}>{obj.conteudo}</Conteudo>
            ))}
         </V.ScrollCard>
      {HowMsg && <Msg message={'Tarefa criada com sucesso!'}/> }
      {HowMsgDel && <Msg message={'Tarefa deletada com sucesso!'}/> }
   </V.Wrapper>
   )
}