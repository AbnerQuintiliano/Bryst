import { styled } from "styled-components";

export const CorPrimaria = "#4A62BD";
export const CorDeFundo = "#17181C";
export const corDasTabelas = "#111215";
export const CorFundoClaro = "#1B1E27";
export const PaddingTelas = "1.18%  1.18% 0.79% 1.18%";

export const _Main = styled.body`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: ${CorDeFundo};
    [Tela]{
        flex: 95%;
        padding: .5rem 0 .5rem 0;
    
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-between;
    }
`
export const _ContainerTela = styled.header`
    flex: 95%;
    padding: 1.25rem;
    
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    >h1{
        font-weight: 500;
        font-size: 1.1rem;
        color: #FFFFFF;
        align-self: flex-start;
    }
`
export const _Wrapper = styled.section`
    flex: 50%;
    width: 100%;
    border-radius: 20px;
    padding: 0.75rem;
    background-color: ${corDasTabelas};
`