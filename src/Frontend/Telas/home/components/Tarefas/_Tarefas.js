import styled from "styled-components";
import {Wrapper, _WrapperTela , ModalStyles , Add , StyleCampo , _OverflowStyle } from "../../../../components/_variaveis"

export const TWrapper = styled(Wrapper)`
    [click="add"]{
      width: auto;
      padding: 0 .7rem 0 .7rem;
    }
  @media (max-width: 700px) {
        height: 80vh;
    }
  @media (max-width: 420px){
    & > div:has(button){
      display: flex;
      justify-content: space-evenly; 
    }
  }
`

export const Conteudo = styled.span`
  padding: 0.4rem 0.75rem;
  background-color: ${props => props.theme.black.fundoClaro};
  color: ${props => props.theme.black.Letra};
  border-radius: 20px;
  text-align: center;
  font-size: clamp(65% , 3vw , 1rem);

  position: relative;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  overflow-x: auto;
  
`
export const ModalAddTarefa = styled(ModalStyles)`
  height: 25vh;
  width: max(50% , 300px);
`

export const Campos = styled.input`
  ${StyleCampo};
  background-color: ${props => props.theme.black.deFundo};
`
export const WrapperLC = styled.div `
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:5px;
`
export const Confirmar = styled(Add)`
  width: 40%;
  height: 1.75rem;
  font-size: 1.25rem;

  outline: solid 1px ${props => props.theme.color.verde};
  &:hover{
    background-color: ${props => props.theme.color.verde};
    outline: unset;
  }
`

export const WrapperConteudo = styled(_WrapperTela)`
    overflow-y: scroll;
    padding-right: 0;
    ${_OverflowStyle}
`