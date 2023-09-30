import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { ModalStyles , Add} from "./_variaveis";

const ModalDelete = styled(ModalStyles)`
    height: 30vh;
    width: clamp(300px, 30vw, 40%);
    text-align: center;
` 

const Mensagem = styled.span`
  font-size: 1.5rem;
  color: ${props => props.theme.black.Letra};
`

const Btn = styled(Add)`
  width: 40%;
  height: 1.75rem;
  font-size: 1.25rem;
  color: ${props => props.theme.black.Letra};
  outline: solid 1px ${props => props?.type ? props.theme.color.verde : props.theme.color.vermelho};
  &:hover{
    background-color: ${props => props?.type ? props.theme.color.verde : props.theme.color.vermelho};
    outline: unset;
  }
`

Modal.setAppElement('#root');

export default function DeleteModal({ isOpen, onClose ,children }) {

  const Confirm = () => {
    window.alert('Excluido com sucesso');
    onClose();
  };

  return (
    <ModalDelete
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{overlay: {backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
    >
      <Mensagem>{children}</Mensagem>
      <Btn type="sim" onClick={Confirm}>Sim</Btn>
      <Btn onClick={onClose}>Não</Btn>
    </ModalDelete>
  );
}
