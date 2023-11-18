import React, { useState } from "react";
import Modal from "react-modal";
import axios from 'axios';
import * as V from "../../../components/_variaveis";
import { useForm ,useWatch } from "react-hook-form";

Modal.setAppElement('#root');

export default function CreatModal({ isOpen, onClose , Notification }) {
  const [User, SetUser] = useState('')
  const [UserName, SetUserName] = useState('')
  const [Email, SetEmail] = useState('')

  const { register, handleSubmit, reset, control, formState:{errors}} = useForm(); 

  const ValueUser = useWatch({
    control,
    name:'user',
    defaultValue:''
  })
  const ValueUserName = useWatch({
    control,
    name:'userName',
    defaultValue:''
  })
  const ValueEmail = useWatch({
    control,
    name:'email',
    defaultValue:''
  })

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

  const onSubmit=(data) => {
    axios.post('http://localhost:3001/api/UserC',data)
      .then((response) => ((
        console.log(response),
        Notification(),
        onClose(),
        reset(),
        SetUser(''),
        SetUserName(''),
        SetEmail('')
        )))
      .catch((error) => ((
        SetUser(error.response.data.erro[0]),
        SetUserName(error.response.data.erro[1]),
        SetEmail(error.response.data.erro[2])
      )))
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
          <V.Campos $Err={errors?.user || ValueUserErro} {...register("user" ,{required: true})} autoComplete="off"></V.Campos>
          {errors?.user?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
          {(ValueUserErro && errors?.user?.type !== 'required') && <V.Error $absolute='95%'>{User.message}</V.Error>}
        </V.WrapperLC>
        
        <V.WrapperLC>
          <V.Label>Senha</V.Label>
          <V.Campos type="password"  $Err={errors?.password} {...register("password" ,{required: true ,minLength:7})}></V.Campos>
          {errors?.password?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
          {errors?.password?.type === 'minLength' && <V.Error $absolute='95%'>Necessário no mínimo 7 caracteres</V.Error>}
        </V.WrapperLC>

        <V.WrapperLC>
          <V.Label>Nome do Usuário</V.Label>
          <V.Campos $Err={errors?.userName || ValueUserNameErro} {...register("userName" ,{required: true})} autoComplete="off"></V.Campos>
          {errors?.userName?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
          {(ValueUserNameErro && errors?.user?.type !== 'required') && <V.Error $absolute='95%'>{UserName.message}</V.Error>}
        </V.WrapperLC>

        <V.WrapperLC>
          <V.Label>E-mail</V.Label>
          <V.Campos $Err={errors?.email || ValueEmailErro} {...register("email" ,{required: true,validate:(value) => {return regexEmail.test(value)}})} autoComplete="off" type="email"></V.Campos>
          {errors?.email?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
          {(ValueEmailErro && errors?.user?.type !== 'required') && <V.Error $absolute='95%'>{Email.message}</V.Error>}
          {errors?.email?.type === 'validate' && <V.Error $absolute='95%'>Existe um erro na escrita do e-mail</V.Error>}
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

        <V.Button $Width='40%' $Color={V.theme.color.verde} type="button" onClick={handleSubmit(onSubmit)}>Criar</V.Button>
      </V.Formulario>
    </V.ModalStyles>
  );
}
