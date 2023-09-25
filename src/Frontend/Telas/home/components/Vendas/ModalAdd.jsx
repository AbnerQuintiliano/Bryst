import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { ModalStyles } from "../../../../components/_variaveis";
import { Btn } from "../../../estoque/_Style";

const ModalAdd = styled(ModalStyles)`
  height: 95vh;
  width: max(50% , 300px);
`

const Campos = styled.input`
  width: 80%;
  height: ${props => props.img? '3rem' : "1.75rem"};
  font-size: 1rem;
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
    width: 90%;
    display: flex;
    gap: 1rem;
  }
  &>img{
    height: 200px;
    width: 200px;
    border-radius: 20px;
  }
`
const Confirmar = styled(Btn)`
  width: 40%;
  outline: solid 1px #2a8c4a;
  &:hover{
    background-color: #2a8c4a;
    outline: unset;
  }
`

Modal.setAppElement('#root');

export default function FormsModalVendas({ isOpen, onClose }) {
  return (
      <ModalAdd
          isOpen={isOpen}
          onRequestClose={onClose}
          style={{overlay:{backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
      >
          <Formulario>
              <div>
                  <Campos placeholder="Id do Produto"></Campos>
                  <Campos placeholder="Marca"></Campos>
              </div>
              <div>
                  <Campos placeholder="Valor Unitario"></Campos>
                  <Campos placeholder="Tipo"></Campos>
              </div>
              <Campos placeholder="Quantidade"></Campos>
              <Campos placeholder="Tamanhos"></Campos>
              <Campos placeholder="Cores"></Campos>
              <Confirmar style={{height: '1.5rem'}}>Confirmar</Confirmar>
          </Formulario>
      </ModalAdd>
  );
  }