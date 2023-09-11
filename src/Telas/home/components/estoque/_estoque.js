// import {_WrapperTela , _OverflowStyle} from "../../../../components/_variaveis";
import Modal from "react-modal";
import { ScrollVendas , Card } from "../Vendas/_Vendas";
import { TWrapper } from "../Tarefas/_Tarefas.js";

import  styled  from "styled-components";

export const EWrapper = styled(TWrapper)`
width: 50%;
@media (max-width:700px) {
  width: 100%;
}
`

export const ScrollConteudo = styled(ScrollVendas)`
`

export const WrapperProdutos = styled(Card)`
    min-width: clamp(70px , 15vw , 175px);
    & img{
      width: 100px;
      display: none;
    }
    [red=""]{
      color: #ff3b19;
      font-weight: 600;
    }

    background-color: ${props => props.theme.black.fundoClaro};
    color: ${props => props.theme.black.Letra};
    @media (max-width:700px) {
      min-width: 150px;
      & img{
        display: block;
      }
    }
`
export const MaisInfo  = styled.span`
  display: none;
  font-size: 0.9rem;
  color: ${props => props.theme.black.Letra};
  @media (max-width: 700px) {
    display: block;
  }
`

export const ModalStyles = styled(Modal)`
  width: clamp(300px, 50vw, 400px);
  height: 90vh;
  border-radius: 20px;
  background-color: ${props => props.theme.black.fundoClaro};
  color: ${props => props.theme.black.Letra};

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  &:focus-visible{
    outline: none;
  }
  &>img{
    border-radius: 20px;
  }
` 