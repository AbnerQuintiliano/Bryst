import styled from "styled-components";
import { Pesquisa } from "../estoque/_Style";
import { BtnTitulo, Wrapper , _OverflowStyle} from "../../components/_variaveis";

// export const ContainerAll = styled.section`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     gap: .5rem;
//     align-items: center;
//     flex-direction: row;
//     background-color: ${props => props.theme.black.deFundo};
// `

export const CWrapper = styled(Wrapper)`
    height: 100%;
    color: ${props => props.theme.black.Letra};
`

export const CPesquisa = styled(Pesquisa)`
    @media (max-width: 400px) {
        width: 100%;
    }
`

export const HeaderUser = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 400px) {
        flex-direction: column;
        gap:.5rem;
    }
`
export const BtnCreate = styled(BtnTitulo)`
    @media (max-width: 400px) {
        position: absolute;
        right: 15px;
    }
`

export const Scrol = styled.div`
    overflow-x:auto;
    overflow-y:auto;
    ${_OverflowStyle}
`