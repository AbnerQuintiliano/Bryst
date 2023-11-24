import React, { useState } from "react";
import Modal from "react-modal";
import * as V from "../../../components/_variaveis";
import { useForm, useWatch } from "react-hook-form";
import axios from "axios";

Modal.setAppElement("#root");


export default function EditModal({ isOpen, onClose, NotificationErro, Notification, Data}) {
  const {register, handleSubmit, control, formState: { errors }} = useForm();
  const [User, SetUser] = useState('')
  const [UserName, SetUserName] = useState('')
  const [Email, SetEmail] = useState('')

  const ValueUser = useWatch({
    control,
    name:'user',
  })
  const ValueUserName = useWatch({
    control,
    name:'userName',
  })
  const ValueEmail = useWatch({
    control,
    name:'email',
  })

  const onSubmit = (data) => {
    axios.put(`http://localhost:3001/api/User/${Data._id}`, data)
    .then((response) => ((
      console.log(response),
      Notification(),
      onClose()
    )))
    .catch((error) => ((
      SetUser(error.response.data.erro[0]),
      SetUserName(error.response.data.erro[1]),
      SetEmail(error.response.data.erro[2]),
      error.response.data.erro[3] && (NotificationErro(), onClose())
    )))
  };

  const handleUserErro = (Campo, ValueComp) => {
    let ValueConfirm = false
    Campo?.map((Value) => (
      Value.toLowerCase() === ValueComp.toLowerCase() && (ValueConfirm = true)
    ))
    return ValueConfirm
  }

  let ValueUserErro = false
  User && (ValueUserErro = handleUserErro(User?.user, ValueUser));
  let ValueUserNameErro = false
  UserName && (ValueUserNameErro = handleUserErro(UserName?.userName, ValueUserName));
  let ValueEmailErro = false
  Email && (ValueEmailErro = handleUserErro(Email?.email, ValueEmail));
  const regexEmail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$");
  
  return (
    <V.ModalStyles $Width="clamp(300px, 30vw, 40%)" $Height="70vh" isOpen={isOpen} onRequestClose={onClose} 
      style={{overlay: { backgroundColor: "rgba(27, 30, 39, 0.8)", backdropFilter: "blur(10px)"}}}
    >
      <V.Formulario>
        <V.WrapperLC>
          <V.Label>Usuário</V.Label>
          <V.Campos $Err={errors?.user || ValueUserErro} {...register("user" ,{required: true})} autoComplete="off" defaultValue={Data.user}></V.Campos>
          {errors?.user?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
          {(ValueUserErro && errors?.user?.type !== 'required') && <V.Error $absolute='95%'>{User.message}</V.Error>}
        </V.WrapperLC>
        <V.WrapperLC>
          <V.Label>Senha</V.Label>
          <V.Campos type="password" $Err={errors?.password} {...register("password" ,{required: true ,minLength:7})} defaultValue={Data.password}></V.Campos>
          {errors?.password?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
          {errors?.password?.type === 'minLength' && <V.Error $absolute='95%'>Necessário no mínimo 7 caracteres</V.Error>}
        </V.WrapperLC>
        <V.WrapperLC>
          <V.Label>Nome do Usuário</V.Label>
          <V.Campos $Err={errors?.userName || ValueUserNameErro} {...register("userName" ,{required: true})} autoComplete="off" defaultValue={Data.userName}></V.Campos>
          {errors?.userName?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
          {(ValueUserNameErro && errors?.userName?.type !== 'required') && <V.Error $absolute='95%'>{UserName.message}</V.Error>}
        </V.WrapperLC>
        <V.WrapperLC>
          <V.Label>E-mail</V.Label>
          <V.Campos type="email" $Err={errors?.email || ValueEmailErro} {...register("email" ,{required: true,validate:(value) => {return regexEmail.test(value)}})} autoComplete="off" defaultValue={Data.email}></V.Campos>
          {errors?.email?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
          {errors?.email?.type === 'validate' && <V.Error $absolute='95%'>Existe um erro na escrita do e-mail</V.Error>}
          {(ValueEmailErro && errors?.email?.type !== 'required') && <V.Error $absolute='95%'>{Email.message}</V.Error>}
        </V.WrapperLC>
        <V.WrapperLC>
        <V.Label>Cargo</V.Label>
        <V.CampoOption $Err={errors?.office} {...register("office" ,{required: true ,validate:(value) => {return value !== "0"}})} value={Data.office}>
          <option value="0">Selecione o Cargo...</option>
          <option value="Funcionário">Funcionário</option>
          <option value="Administrador">Administrador</option>
        </V.CampoOption>
        {errors?.office?.type === 'validate' && <V.Error $absolute='95%'>Necessário escolher uma opção</V.Error>}
        </V.WrapperLC>
        <V.Button $Width='40%' $Color={V.theme.color.verde} type="button" onClick={() => handleSubmit(onSubmit)()}>Editar</V.Button>
      </V.Formulario>
    </V.ModalStyles>
  );
}