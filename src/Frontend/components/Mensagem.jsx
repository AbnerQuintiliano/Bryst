import React, { useState, useEffect } from 'react';
import styled, {keyframes}  from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const Mensagem = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: ${props => `${props.theme.black.deFundo}80`};
  outline: 1px solid ${({theme, $Erro}) => ($Erro ? theme.color.vermelho : theme.color.verde)};
  color: ${props => props.theme.black.Letra};
  padding: .5rem 1rem ;
  border-radius: 20px;
  animation: ${props => (props.$entering === 'Entrada' ? slideIn : slideOut)} 0.5s;
`;

const Notification = ({ message , erro }) => {
  const [state, setState] = useState('Entrada');

  useEffect(() => {
    const timer = setTimeout(() => {
      setState('Saida');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return(
  <Mensagem
  $Erro = {erro}
  $entering = {state}
  >
    {message}
  </Mensagem>
  )
};

export default Notification;