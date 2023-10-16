import { styled ,  css } from "styled-components";
import Modal from 'react-modal'

export const theme = {
    black:{
        primaria:'#7688C9',
        deFundo: '#17181C',
        dasTabelas: '#111215',
        fundoClaro:'#1B1E27',
        Letra:'#FFFFFF'
    },
    white:{
        primaria:'#7688C9',
        deFundo: '#FFFFFF',
        dasTabelas: '#F5F5F5',
        fundoClaro:'#EAEAEA',
        Letra:"#150F00"
    },
    color:{
        verde:'#2a8c4a',
        vermelho:'#ff3b19'
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

export const BtnTitulo = styled.button`
    min-height: 1.5rem;
    width: fit-content;
    padding: 0 1.5rem;
    margin-right: 1%;
    border-radius: 20px;
    font-size: 1rem;

    color: ${props => props.theme.black.Letra};
    background-color: ${props => props.theme.black.fundoClaro};
    font-weight: 600;
    ${props => props.$click && css`
        transition: all 600ms ease;
        cursor: pointer;
        &:hover{
            outline: solid 1px ${props => props.theme.black.primaria};
            background-color: ${props => props.theme.black.primaria};
        }
    
    `};
`

export const Wrapper = styled.section` //engloba todo o estilo dos componentes
    width: 100%;
    border-radius: 20px;
    padding: .6rem;
    background-color: ${props => props.theme.black.dasTabelas};
    

    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    & Titulo{
        min-height: 1.5rem;
        width: fit-content;
        padding: 0 1.5rem;
        margin-right: 1%;
        border-radius: 20px;
        font-size: 1rem;

        color: ${({theme}) => (theme.black.Letra)};
        background-color: ${props => props.theme.black.fundoClaro};
        font-weight: 600;
        &[click]{
            transition: all 600ms ease;
            cursor: pointer;
            &:hover{
                outline: solid 1px ${props => props.theme.black.primaria};
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
    color: ${props => props.theme.black.Letra};
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
      width: .35rem;
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

export const ModalStyles = styled(Modal)` 
  border-radius: 20px;
  outline: solid 1px ${props => props.theme.black.primaria};
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
export const Add = styled.button`
  width: ${({$width}) => ( $width || '75%')};
  
  border-radius: 20px;
  color: ${props => props.theme.black.Letra};
  background-color: ${props => props.theme.black.deFundo};
  outline: solid 1px ${props => props.theme.black.primaria};
  font-size: 1.5rem;
  white-space: nowrap;


  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  transition: 500ms;
  &:hover{
    background-color: ${props => props.theme.black.primaria};
  }
`

//styled usado nos forms

export const Label = styled.label`
font-size: .9rem;
align-self: ${props => props.$center ? 'center' : 'flex-start'};
padding-left: ${props => props.$center ? '0' : '1rem'};
`
export const StyleCampo = css` //inputs
  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
  color: ${({theme}) => (theme.black.Letra)};
  background-color: ${props => props.theme.black.deFundo};
  border: 1px solid ${props => props.$err ? 'red' : props.theme.black.deFundo};

  padding: 2%;
  border-radius: 20px;
  text-align: center;

  display: flex;
  justify-content: space-around;
  align-items: center;
  outline: unset;
  &::-webkit-outer-spin-button , &::-webkit-inner-spin-button { //setas o type number
    appearance: none;
    margin: 0;
}
`
export const Error = styled.span`
  font-size: .8rem;
  padding-top: .25rem;
  color: #FF3B19;
  text-align: center;
  position: ${props => props.$absolute && 'absolute'};
  top: ${({$absolute}) => ($absolute)};
  
`