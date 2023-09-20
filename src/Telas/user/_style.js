import styled from "styled-components";
import { Pesquisa } from "../estoque/_Style";

export const ContainerAll = styled.section`
    width: 100%;
    display: flex;
    gap: .5rem;
    align-items: center;
    flex-direction: row;
    background-color: ${props => props.theme.black.deFundo};
`
export const CPesquisa = styled(Pesquisa)``