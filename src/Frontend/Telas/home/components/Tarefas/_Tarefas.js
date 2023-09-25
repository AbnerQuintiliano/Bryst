import styled from "styled-components"
import {Wrapper, _WrapperTela } from "../../../../components/_variaveis"

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

  display: flex;
  justify-content: center;
`

export const WrapperConteudo = styled(_WrapperTela)`
    overflow-y: scroll;
    padding-right: 0;
    &::-webkit-scrollbar{
      width: .35rem;
      border-radius: 20px;
    }
    
    &:hover {
    /* Quando o mouse estiver sobre o contêiner, mostrar as barras de rolagem */
    overflow: auto;
    
    /* Estilos para a barra de rolagem */
    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.black.primaria};
      border-radius: 10px;
    }
  }
`