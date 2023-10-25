import React from "react";
import Modal from "react-modal";
import * as V from "../../../components/_variaveis";
import { useForm } from "react-hook-form";

Modal.setAppElement('#root');

export default function CreatModal({ isOpen, onClose , handleMsg }) {

  const { register, handleSubmit , formState:{errors} } = useForm(); 
  const onSubmit=(data) => {
    console.log(data)
    onClose();
    handleMsg();
  }

  return (
    <V.ModalStyles $Width='clamp(300px, 30vw, 40%)'
      $Height='70vh'
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{overlay: {backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
    >
      <V.Formulario>
        <V.WrapperLC>
          <V.Label>Usuário</V.Label>
          <V.Campos $Err={errors?.user} {...register("user" ,{required: true})} autoComplete="off"></V.Campos>
          {errors?.user?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
        </V.WrapperLC>
        <V.WrapperLC>
          <V.Label>Senha</V.Label>
          <V.Campos type="password"  $Err={errors?.password} {...register("password" ,{required: true ,minLength:7})}></V.Campos>
          {errors?.password?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
          {errors?.password?.type === 'minLength' && <V.Error $absolute='95%'>Necessário no mínimo 7 caracteres</V.Error>}
        </V.WrapperLC>
        <V.WrapperLC>
          <V.Label>Nome do Usuário</V.Label>
          <V.Campos $Err={errors?.userName} {...register("userName" ,{required: true})} autoComplete="off"></V.Campos>
          {errors?.userName?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
        </V.WrapperLC>
        <V.WrapperLC>
        <V.Label>Cargo</V.Label>
        <V.CampoOption $Err={errors?.office} {...register("office" ,{required: true ,validate:(value) => {return value !== "0"}})}>
          <option value="0">Selecione o Cargo...</option>
          <option value="Funcionário">Funcionário</option>
          <option value="Administrador">Administrador</option>
        </V.CampoOption>
        {errors?.office?.type === 'validate' && <V.Error $absolute='95%'>Necessário escolher uma opção</V.Error>}
        </V.WrapperLC>
        <V.Button $Width='40%' $Color={V.theme.color.verde} type="button" onClick={() => handleSubmit(onSubmit)()}>Criar</V.Button>
      </V.Formulario>
    </V.ModalStyles>
  );
}
