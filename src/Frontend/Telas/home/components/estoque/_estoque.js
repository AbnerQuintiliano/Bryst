import { Card } from "../Vendas/_Vendas";
import { Wrapper } from "../../../../components/_variaveis";
import  styled  from "styled-components";

export const EWrapper = styled(Wrapper)`
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