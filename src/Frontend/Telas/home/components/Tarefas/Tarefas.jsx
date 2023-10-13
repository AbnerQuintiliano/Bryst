import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { BtnTitulo , Label , Error} from "../../../../components/_variaveis";
import * as T from "./_Tarefas"
import { Conteudo } from "./Conteudo";
import Msg from "../../../../components/Mensagem";
import { useModal } from "../../../../hooks/useModal";
import { useMensage } from "../../../../hooks/useMensage";

Modal.setAppElement('#root');
export default function Tarefas() {

   const { register, handleSubmit , formState:{errors} } = useForm(); 
   const onSubmit=(data) => {
      console.log(data)
      closeModal();
      handleMsg();
      const dataG = {...data , User:HowMsg}
      console.log(dataG)
   }

   const {Modal, openModal , closeModal} = useModal();
   const {HowMsg, handleMsg} = useMensage()

   return(
   <T.TWrapper>
         <div>
            <BtnTitulo >Tarefas</BtnTitulo>
            <BtnTitulo $click onClick={openModal}>+</BtnTitulo>
            <T.ModalAddTarefa
               isOpen={Modal}
               onRequestClose={closeModal}
               style={{overlay:{backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
            >
               <T.WrapperLC>
                  <Label>Coloque a Tarefa</Label>
                  <T.Campos err={errors?.Tarefa} {...register('Tarefa',{required: true , maxLength:30})} autoComplete="off"></T.Campos>
                  {errors?.Tarefa?.type === 'required' && <Error>Necessário preencher o campo</Error>}
                  {errors?.Tarefa?.type === 'maxLength' && <Error>Muitas caracteres, o maximo e 30.</Error>}
               </T.WrapperLC>
               <T.Confirmar onClick={() => handleSubmit(onSubmit)()}>Criar tarefa</T.Confirmar>
            </T.ModalAddTarefa>
         </div>
         <T.WrapperConteudo>
            <Conteudo>ovdnsdj vbsdngpsnibosndfbonsfs</Conteudo>
         </T.WrapperConteudo>
     {HowMsg && <Msg message={'Tarefa criada com sucesso!'}/> }
     </T.TWrapper>
   )
}