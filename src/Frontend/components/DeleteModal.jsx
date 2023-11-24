import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import * as V from "./_variaveis";
import axios from "axios";

const Mensagem = styled.span`
  font-size: 1.5rem;
  color: ${props => props.theme.black.Letra};
  text-align: center;
`

Modal.setAppElement('#root');

export default function DeleteModal({ isOpen, onClose ,children ,Notification ,Url }) {

  const Confirm = () => {
    axios.delete(Url)
    onClose();
    Notification();
  };

  return (
    <V.ModalStyles $Width='clamp(300px, 30vw, 40%)' $Height='30vh'
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{overlay: {backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
    >
      <Mensagem>{children}</Mensagem>
      <V.Button $Width='50%' $Color={V.theme.color.verde} onClick={Confirm}>Sim</V.Button>
      <V.Button $Width='50%' $Color={V.theme.color.vermelho} onClick={onClose}>Não</V.Button>
    </V.ModalStyles>
  );
}
