import styled from "styled-components"
import {_Wrapper, _WrapperTela } from "../../../../components/_variaveis"

export const TWrapper = styled(_Wrapper)`
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

export const Conteudo = styled.div`
    padding: 0.4rem 0.75rem;
    background-color: ${props => props.theme.black.fundoClaro};
    color: #FFFFFF;
    border-radius: 20px;

    display: flex;
    justify-content: center;
`

export const WrapperConteudo = styled(_WrapperTela)`
    flex: 1px; //eu nao sei pq deu certo ;-;
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