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
  outline: 1px solid ${props => props.theme.color.verde};
  color: ${props => props.theme.black.Letra};
  padding: .5rem 1rem ;
  border-radius: 20px;
  /* transition: opacity 0.3s; */
  animation: ${props => (props.entering ? slideIn : slideOut)} 0.5s;
  visibility: ${props => (props.exited ? 'hidden' : 'visible')};
`;

const Notification = ({ message }) => {
  const [state, setState] = useState('entering');

  useEffect(() => {
    const timer = setTimeout(() => {
      setState('exiting');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = () => {
    if (state === 'exiting') {
      setState('exited');
    }
  };

  return <Mensagem
  entering={state === 'entering'}
  exiting={state === 'exiting'}
  exited={state === 'exited'}
  onAnimationEnd={handleAnimationEnd}>
    {message}
  </Mensagem>;
};

export default Notification;