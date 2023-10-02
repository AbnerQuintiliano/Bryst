import React from "react";
import styled, { css } from "styled-components";
import Modal from "react-modal";
import { ModalStyles , Add} from "../../../components/_variaveis";
import { useForm } from "react-hook-form";

const ModalCadastro = styled(ModalStyles)`
    height: 70vh;
    width: clamp(300px, 30vw, 40%);
` 

const Label = styled.label`
font-size: .9rem;
align-self: flex-start;
padding-left: 1rem;
`

const StyleCampo = css`
  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
  color: ${props => props.theme.black.Letra};
  background-color: ${props => props.theme.black.deFundo};
  border: 1px solid ${props => props.err ? 'red' : props.theme.black.deFundo};

  padding: 2%;
  border-radius: 20px;
  text-align: center;

  display: flex;
  justify-content: space-around;
  align-items: center;
  outline: unset;
`

const Campos = styled.input`
  ${StyleCampo}
`
const CampoOption = styled.select`
  all:unset;
  ${StyleCampo}
  padding: 0;
`

const Error = styled.span`
  font-size: .8rem;
  padding-top: .25rem;
  color: #FF3B19;
`

const Formulario = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  &>div{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:2px;
  }
`
const Confirmar = styled(Add)`
  width: 40%;
  height: 1.75rem;
  font-size: 1.25rem;
  outline: solid 1px ${props => props.theme.color.verde};
  &:hover{
    background-color: ${props => props.theme.color.verde};
    outline: unset;
  }
`

Modal.setAppElement('#root');

export default function CreatModal({ isOpen, onClose , handleMsg }) {

  const { register, handleSubmit , formState:{errors} } = useForm(); 
  const onSubmit=(data) => {
    console.log(data)
    onClose();
    handleMsg();
  }

  return (
    <ModalCadastro
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{overlay: {backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
    >
      <Formulario>
        <div>
          <Label>Usuário</Label>
          <Campos err={errors?.user} {...register("user" ,{required: true})} autoComplete="off"></Campos>
          {errors?.user?.type === 'required' && <Error>Necessário preencher o campo</Error>}
        </div>
        <div>
          <Label>Senha</Label>
          <Campos type="password"  err={errors?.password} {...register("password" ,{required: true ,minLength:7})}></Campos>
          {errors?.password?.type === 'required' && <Error>Necessário preencher o campo</Error>}
          {errors?.password?.type === 'minLength' && <Error>Necessário no mínimo 7 caracteres</Error>}
        </div>
        <div>
          <Label>Nome do Usuário</Label>
          <Campos err={errors?.userName} {...register("userName" ,{required: true})} autoComplete="off"></Campos>
          {errors?.userName?.type === 'required' && <Error>Necessário preencher o campo</Error>}
        </div>
        <div>
        <Label>Cargo</Label>
        <CampoOption err={errors?.office} {...register("office" ,{required: true ,validate:(value) => {return value !== "0"}})}>
          <option value="0">Selecione o Cargo...</option>
          <option value="Funcionário">Funcionário</option>
          <option value="Administrador">Administrador</option>
        </CampoOption>
        {errors?.office?.type === 'validate' && <Error>Necessário escolher uma opção</Error>}
        </div>
        <Confirmar type="button" onClick={() => handleSubmit(onSubmit)()}>Criar</Confirmar>
      </Formulario>
    </ModalCadastro>
  );
}
