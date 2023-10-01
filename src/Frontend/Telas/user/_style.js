import styled from "styled-components";
import { Pesquisa } from "../estoque/_Style";
import { BtnTitulo, Wrapper , _OverflowStyle} from "../../components/_variaveis";

export const CWrapper = styled(Wrapper)`
    height: 100%;
    color: ${props => props.theme.black.Letra};
`

export const CPesquisa = styled(Pesquisa)`
    @media (max-width: 450px) {
        width: 100%;
    }
`

export const HeaderUser = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 450px) {
        flex-direction: column;
        gap:.5rem;
    }
`
export const BtnCreate = styled(BtnTitulo)`
    margin-left: 1%;
    margin-right: 0;
    @media (max-width: 450px) {
        position: absolute;
        right: 15px;
    }
`

export const Scrol = styled.div`
    overflow-x:auto;
    overflow-y:auto;
    ${_OverflowStyle}
`