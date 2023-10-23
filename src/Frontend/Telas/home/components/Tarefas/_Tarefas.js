import styled from "styled-components";
import { _WrapperTela , ModalStyles , Add , _OverflowStyle } from "../../../../components/_variaveis"

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
`
export const ModalAddTarefa = styled(ModalStyles)`
  height: 25vh;
  width: max(50% , 300px);
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
    ${_OverflowStyle}
`