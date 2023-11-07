import { styled ,  css , keyframes} from "styled-components";
import Modal from 'react-modal'
import { useRef, useState } from "react";

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

export const JoinIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const _Main = styled.div` //engloba tudo
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

//------------------------------------------------------------------------------------------------------------------

export const BtnTitulo = styled.button` //buttons de indentificação e add
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

export const Pesquisa = styled.input` //input de pesquisa
  min-height: 1.75rem;
  width: 75%;
  border-radius: 20px;
  font-size: 1rem;
  outline: none;
  text-align: center;

  color: ${({theme}) => (theme.black.Letra)};
  background-color: ${props => props.theme.black.fundoClaro};
  &:focus{
    outline: solid 1px ${props => props.theme.black.primaria};
  } 
`

export const Top = styled.div` //delimita o topo com Btntitulo e pesquisa
    width: 100%;
    display: flex;
    justify-content: ${({$Justify}) => ($Justify)};
    @media (max-width:600px) {
        flex-direction: column;
        gap: 0.5rem;
        &>input{
            width: 100%;
        }
    }
`

export const Wrapper = styled.section` //engloba todo o estilo dos componentes
    min-width: ${ ({$MinWidth}) => ($MinWidth || '100%')};
    width: ${ ({$Width}) => ($Width || '100%')};
    height: ${ ({$Height}) => ($Height || '100%')};
    border-radius: 20px;
    padding: .6rem;
    color: ${props => props.theme.black.Letra};
    background-color: ${props => props.theme.black.dasTabelas};
    

    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    @media (max-width: 800px) {
        width: 100%;
        min-height: 80vh;
    }
`

export const _WrapperTela = styled.div` //agrupa apenas o conteudo do componentes
    width: 100%;
    height:100%;

    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    
`
export const Card = styled.div` //Os cards
  width: ${({$Width}) => ($Width || '45%')};
  height: ${({$Height}) => ($Height || '100%')};
  min-width: ${({$Width}) => ($Width || '45%')};
  border-radius: 20px;
  position: relative;

  display: flex;
  flex-direction: ${({$Direction}) => ($Direction ||'column')} ;
  align-items: center;
  justify-content: ${({$Justify}) => ($Justify => 'space-around')};
  background-color: ${({$Background, theme}) => ( $Background || theme.black.deFundo)};
  & img{
    width: 100px;
    border-radius: 20px;
  }
  & div{
    font-size: 0.75rem;
  }
  @media (max-width: 780px) {
    min-width: ${({$WMidia}) => ($WMidia || '60%')};
    min-height: ${({$HMidia}) => ($HMidia || '80%')};
  }
  ${({$CardFaltaEstoque}) => ($CardFaltaEstoque  && css`
    & img{ width: 100px; display: none; }
    @media (max-width:700px) {
      & img{ display: block; }
    }
  `)}
`

export const MaisInfo  = styled.span` //são os dados que aparecem apenas no cel do Aviso Estoque
  display: none;
  font-size: 0.9rem;
  color: ${props => props.theme.black.Letra};
  @media (max-width: 700px) {
    display: block;
  }
` 
export const Header = styled.div` //especifico do card das vendas
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  & [num]{
    font-size: 1.5rem;
    font-weight: 600;
    @media(max-width: 850px){
      font-size: 1.1rem;
    }
  }
  & > div{
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    & data{
      font-size: 90%;
      @media(max-width: 850px){
        font-size: 65%;
      }
    }
    & time{
      font-size: 70%;
      @media(max-width: 850px){
        font-size: 50%;
      }
    }
    
  }
`

export const Total =styled.div` //onde fica total e forma de pgmt + buttons
  height: clamp(2rem , 10% , 3rem );
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 20px;
  background-color: ${props=> props.theme.black.deFundo};
  transition: opacity 0.5s ease-in-out;
  &:has(div){
    & > div{
      animation: ${JoinIn} 1s ease-in;
      font-size: clamp(.75rem , 3vw, 1rem );
      white-space: nowrap;
    }
  }
  @media(max-width: 1000px){
    font-size: 65%;
    height: 7.5%;
  }
`

export const _ContainerItens = styled.div` //agrupa grupos de componente // utilizado mais na home
width: ${({$Width}) => ( $Width || '100%')};
height: ${({$Height}) => ( $Height || '30%')}; 
gap: .5rem;
display: flex;
flex-direction: row;
    @media (max-width: 700px) {
        flex-direction: ${({$NoMedia}) => (!$NoMedia && 'column')};
    }
`

export const ModalStyles = styled(Modal)` //styled do modal
  width: ${({$Width}) => ($Width || '50%')};
  height: ${({$Height}) => ($Height || '90%')};
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

// export const Add = styled.button` //button usado para add itens mudar para Button
//   width: ${({$width}) => ( $width || '75%')};
  
//   border-radius: 20px;
//   color: ${props => props.theme.black.Letra};
//   /* background-color: ${props => props.theme.black.deFundo}; */
//   background-color: ${({$Background ,theme}) => ($Background || theme.black.deFundo)};
//   outline: solid 1px ${({$Color, theme}) => ($Color || theme.black.primaria)};
//   font-size: 1.5rem;
//   white-space: nowrap;


//   display: flex;
//   align-self: center;
//   align-items: center;
//   justify-content: center;
//   transition: 500ms;
//   &:hover{
//     background-color: ${({$Color, theme}) => ($Color || theme.black.primaria)};
//   }
// `

export const Button = styled.button` //button usado para add itens mudar para Button
  width: ${({$Width}) => ( $Width || '75%')};
  height: ${({$Height}) => ( $Height || '1.75rem')};
  
  border-radius: 20px;
  color: ${props => props.theme.black.Letra};
  background-color: ${({$Background ,theme}) => ($Background || theme.black.deFundo)};
  outline: solid 1px ${({$Color, theme}) => ($Color || theme.black.primaria)};
  font-size: ${({$Font}) => ( $Font || '1.5rem')};;
  white-space: nowrap;


  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  transition: 500ms;
  ${({$Transition }) => ($Transition && css`animation: ${JoinIn} 1s ease-in;`)};
  &:hover{
    outline: unset;
    background-color: ${({$Color, theme}) => ($Color || theme.black.primaria)};
  }
`

//------------------------------------------------styled usado nos forms------------------------------------------------

export const Formulario = styled.form` //engloba tudo
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & > img {
    position: absolute;
    left: 106% ;
    height: 20vw;
    width: 20vw;
    border-radius: 20px;
    @media (max-width: 450px) {
      display: none;
    }
  }
`;

export const Label = styled.label` //label
font-size: .9rem;
align-self: ${props => props.$center ? 'center' : 'flex-start'};
padding-left: ${props => props.$center ? '0' : '1rem'};
`
export const StyleCampo = css` //inputs
  width: ${({$width}) => ( $width || '100%')};
  height: ${({$height}) => ( $height || '2rem')};
  font-size: 1.2rem;
  color: ${({theme}) => (theme.black.Letra)};
  background-color: ${({$Background}) => ($Background || theme.black.deFundo)};
  border: 1px solid ${({$Err,$Background}) => ($Err ? theme.color.vermelho : $Background || theme.black.deFundo)};

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

export const Campos = styled.input`
  ${StyleCampo}
  height: ${({$img}) => ($img && '3rem')};
  display: ${({$img}) => ($img && 'none')}; //remover dependendo se o add img n der certo
`
export const CampoOption = styled.select`
  all:unset;
  ${StyleCampo}
  padding: 0;
`

export const Error = styled.span` //erros
  font-size: .8rem;
  padding-top: .25rem;
  color: ${({theme}) => (theme.color.vermelho)};
  text-align: center;
  position: ${props => props.$absolute && 'absolute'};
  top: ${({$absolute}) => ($absolute)};
`

export const WrapperLC = styled.div ` //engloba label e input
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap:2px;

  position: relative;
`

export const Close = styled.button` //responsavel pelo delete coloco o X dentro dele
  position: absolute;
  background-color: unset;
  color: ${props => props.theme.black.Letra};
  top: 15px;
  right: 15px;
  width: 10px;
  height: 10px;
  ${({$MinSpace}) => ( $MinSpace && css`
  top: 5%;
  right: 10%;
  `)}
  &:hover{
    color: ${props => props.theme.color.vermelho};
  }
`

//------------------------------------------------styled ScrollCards(Bonus da Fun)------------------------------------------------

export const _OverflowStyle = css`
    &::-webkit-scrollbar{
      height:${({$HeightSB}) => ($HeightSB || '.35rem')};
      width: ${({$WidthSB}) => ($WidthSB || '.35rem')};
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
            background-color: ${({theme}) => (`${theme.black.primaria}50`)};
            border-radius: 20px;   
            &:hover{
                background-color: ${props => props.theme.black.primaria};
            }
        }
    }
`

export const ScrollCard = styled.section` //estilo do Scroll
    height: ${props => props.height || '80%' };
    width: ${({$Width}) => ($Width ||  '100%' )};
    gap: .35rem;
    
    display: flex;
    flex-direction: ${({$direction}) => ($direction? 'column' : 'row')};
    ${({$Justify}) => (css`
      justify-content: ${$Justify};
    `)}

    overflow: auto;
    ${_OverflowStyle}
    & div{
      cursor: default;
    }
    @media(max-width: 500px){
      height:${ props => props.$HeightCel || '65vh'};
    }
    ${({$Special}) => ($Special && css`
      width: ${({$Special}) => ($Special ||  '100%' )};;
      justify-content:space-between;
      align-items: center ;
    `)}
`

export function SScrollCard(props){ //função para funcionar de forma drag
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(null);
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const handleMouseLeave = () => {
      setIsDragging(false);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 3;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };
    return (
        <ScrollCard {...props}
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {props.children}
        </ScrollCard>
    );
  };