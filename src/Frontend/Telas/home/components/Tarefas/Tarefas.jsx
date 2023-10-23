import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import * as V from "../../../../components/_variaveis";
import * as T from "./_Tarefas"
import { Conteudo } from "./Conteudo";
import Msg from "../../../../components/Mensagem";
import { useModal ,useMensage } from "../../../../hooks/MyHooks";

Modal.setAppElement('#root');
export default function Tarefas() {
   
   const { register, handleSubmit , formState:{errors} } = useForm();
   const onSubmit=(data) => {
      console.log(data)
      closeModal();
      handleMsg();
      const dataG = {...data , User:HowMsg};
      console.log(dataG);
   }
   
   const {Modal, openModal , closeModal} = useModal();
   const {HowMsg, handleMsg} = useMensage()
   
   return(
   <V.Wrapper $MinWidth={'49%'}>
      <div>
         <V.BtnTitulo >Tarefas</V.BtnTitulo>
         <V.BtnTitulo $click onClick={openModal}>+</V.BtnTitulo>
         <T.ModalAddTarefa
            isOpen={Modal}
            onRequestClose={closeModal}
            style={{overlay:{backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
         >
            <V.WrapperLC>
               <V.Label>Coloque a Tarefa</V.Label>
               <V.Campos $Background={V.theme.black.deFundo} $Err={errors?.Tarefa} {...register('Tarefa',{required: true , maxLength:30})} autoComplete="off"></V.Campos>
               {errors?.Tarefa?.type === 'required' && <V.Error>Necessário preencher o campo</V.Error>}
               {errors?.Tarefa?.type === 'maxLength' && <V.Error>Muitas caracteres, o maximo e 30.</V.Error>}
            </V.WrapperLC>
            <T.Confirmar onClick={handleSubmit(onSubmit)}>Criar tarefa</T.Confirmar>
         </T.ModalAddTarefa>
      </div>
         <V.ScrollCard height='100%' $HeightCel='100%' $direction>
            <Conteudo>ovdnsdj vbsdngpsnibosndfbonsfs</Conteudo>
            <Conteudo>ovdnsdj vbsdngpsnibosndfbonsfs</Conteudo>
            <Conteudo>ovdnsdj vbsdngpsnibosndfbonsfs</Conteudo>
            <Conteudo>ovdnsdj vbsdngpsnibosndfbonsfs</Conteudo>
            <Conteudo>ovdnsdj vbsdngpsnibosndfbonsfs</Conteudo>
            <Conteudo>ovdnsdj vbsdngpsnibosndfbonsfs</Conteudo>
            <Conteudo>ovdnsdj vbsdngpsnibosndfbonsfs</Conteudo>
         </V.ScrollCard>
      {HowMsg && <Msg message={'Tarefa criada com sucesso!'}/> }
   </V.Wrapper>
   )
}