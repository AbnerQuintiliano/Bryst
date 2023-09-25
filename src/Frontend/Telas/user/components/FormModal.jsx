import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { ModalStyles , Add} from "../../../components/_variaveis";

const ModalCadastro = styled(ModalStyles)`
    height: 90vh;
    width: clamp(300px, 30vw, 40%);
` 

const Label = styled.label`
font-size: .9rem;
align-self: flex-start;
padding-left: 1rem;
`

const Campos = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
  color: ${props => props.theme.black.Letra};
  background-color: ${props => props.theme.black.deFundo};
  padding: 2%;
  border-radius: 20px;
  text-align: center;

  display: flex;
  justify-content: space-around;
  align-items: center;
  outline: unset;
`
const Formulario = styled.form`
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
  outline: solid 1px ${props => props.theme.black.primaria};
  &:hover{
    background-color: ${props => props.theme.black.primaria};
    outline: unset;
  }
`

Modal.setAppElement('#root');

export default function CustomModal({ isOpen, onClose }) {
    return (
      <ModalCadastro
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{overlay: {backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
      >
        <Formulario>
          <div>
            <Label>Usuário</Label>
            <Campos></Campos>
          </div>
          <div>
            <Label>Senha</Label>
            <Campos type="password"></Campos>
          </div>
          <div>
            <Label>Nome do Usuário</Label>
            <Campos></Campos>
          </div>
          <div>
          <Label>Cargo</Label>
          <Campos></Campos>
          </div>
          <Confirmar>Criar</Confirmar>
        </Formulario>
      </ModalCadastro>
    );
  }
