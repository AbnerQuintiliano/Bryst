import { styled ,  css } from "styled-components";

// export const CorPrimaria = "#4A62BD";
// export const CorDeFundo = "#17181C";
// export const corDasTabelas = "#111215";
// export const CorFundoClaro = "#1B1E27";
export const theme = {
    black:{
        primaria:'#7688C9',
        deFundo: '#17181C',
        dasTabelas: '#111215',
        fundoClaro:'#1B1E27'
    },
    white:{
        primaria:'#7688C9',
        deFundo: '#FFFFFF',
        dasTabelas: '#F5F5F5',
        fundoClaro:'#EAEAEA'
    }

}

export const _Main = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: ${props => props.theme.black.deFundo};
`
export const _ContainerTela = styled.main` //competir com o nav
    flex: 96.5%;
    padding: 0.5rem;
    
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: .75rem;
    overflow: auto;

    >h1{
        padding-left: 1rem;
        font-weight: 500;
        font-size: 1.1rem;
        color: #FFFFFF;
        align-self: flex-start;
    }
`
export const _Wrapper = styled.section` //engloba todo o estilo dos componentes
    /* flex: 50%; */
    width: 100%;
    border-radius: 20px;
    padding: .6rem;
    background-color: ${props => props.theme.black.dasTabelas};

    display: flex;
    gap: 0.5rem;
    flex-direction:${props => props.row ? 'row' : 'column'};
    &[a]{
        @media (max-width: 700px) {
        height: 80vh;
        }
    }
    button{
        height: 1.75rem;
        width: 7.5rem;
        margin-right: 1%;
        border-radius: 20px;
        font-size: 1rem;

        color: #FFFFFF;
        background-color: #1B1E27;
        font-weight: 600;
        &[click]{
            transition: all 600ms ease;
            cursor: pointer;
            &:hover{
                border: solid 1px ${props => props.theme.black.primaria};
            }
        }
    }
`

export const _WrapperTela = styled.div` //agrupa apenas o conteudo do componentes
    width: 100%;
    height:100%;

    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    
`

export const Conteudo = styled.div`
    width: ${props => props};
    padding: 0.4rem 0.75rem;
    background-color: ${props => props.theme.black.fundoClaro};
    color: #FFFFFF;
    border-radius: 20px;

    display: flex;
    justify-content: center;
`

export const _ContainerItens = styled.div`
width: 100%;
height: 30%; 
gap: .5rem;
display: flex;
flex-direction: row;
    @media (max-width: 700px) {
        flex-direction: column;
        height: auto;
    }
`
export const _OverflowStyle = css`
    &::-webkit-scrollbar{
      height: .35rem;
    }
    &:hover {
        /* Quando o mouse estiver sobre o contêiner, mostrar as barras de rolagem */
        overflow-x: auto;
        &:active{
            &::-webkit-scrollbar-thumb{
                background-color: ${props => props.theme.black.primaria};
            }
            }
        
        /* Estilos para a barra de rolagem */
        &::-webkit-scrollbar-thumb {
            background-color: #2D3347;
            border-radius: 20px;
            
            &:hover{
                background-color: ${props => props.theme.black.primaria};
                
            }
        }
    }
`