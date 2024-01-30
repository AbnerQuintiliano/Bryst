import {styled , css} from "styled-components"
import * as V from '../../components/_variaveis'

export const AllBtn = styled.div`
  min-width: 100%;
  display: flex;
  gap: 2rem;
`

export const Produto = styled.section`
    max-width: clamp(200px , 25% , 400px);
    min-width: clamp(200px , 25% , 400px);
    border-radius: 20px;
    color: ${props => props.theme.black.Letra};
    background-color: ${props => props.theme.black.fundoClaro};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    & > div{
      width: 90%;
      position: relative;
      
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    & img{
      /* width: clamp(50% , 2vw , 150%); */
      width: max(10vw , 70px);
      height: max(10vw , 70px);
      border-radius: 20px;
    }
`
export const WrapperDados = styled.section`
  width: 90%;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  &>div{
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const LabelEstoque = styled.label`
  position: absolute;
  ${({$Special}) => ($Special && css` 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(.75rem , 1.75vh , 2.25rem) !important;
    top: -8% !important;
      @media (max-width: 425px) {
          top: -25% !important;
      }
  `)}
  top: -60%;
  font-size: clamp(.5rem , 1vw , .75rem);
  padding: 2% 10%;
  border-radius: 20px;
  background: linear-gradient(to bottom, ${props => props.theme.black.deFundo} 75%, rgba(217, 217, 217, 0) 25%);
  ${({$Color, theme}) => ($Color && css`background: linear-gradient(to bottom, ${theme.black.fundoClaro} 75%, rgba(217, 217, 217, 0) 25%);`)}
`

export const WrapperBtn = styled.span`
  width: 90%;

  display: flex;
  justify-content: space-evenly;
`

export const BtnEscolha = styled.button`
  background-color: unset;
  color: ${props => props.theme.black.Letra};
  height: 18px;
  padding: min( .5rem  , 2vw );
  border-radius: 20px;
  font-size: clamp(70% , 1vw , .8rem);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 1s;
  &:hover{
    outline: solid 1px ${props => props.theme.black.primaria};
  }
  &:target{
    background-color: ${props => props.theme.black.primaria};
  }
`

export const Dados = styled.div`
  width: clamp(100px ,100%, 300px);
  height: clamp(24px ,  2vw  , 1.75rem );
  font-size: clamp(70% , 1vw , .8rem);
  background-color: ${props => props.theme.black.deFundo};
  border-radius: 20px;
  text-align: center;
  ${({$Color, theme}) => ($Color && css` background: linear-gradient(to bottom, ${theme.black.fundoClaro} 75%, rgba(217, 217, 217, 0) 25%);`)}

  display: flex;
  justify-content: space-around;
  align-items: center;
  ${({$Special}) => ($Special && css` 
    font-size: clamp(.75rem , 1.75vh , 2rem) !important;
    height: clamp(24px ,  2.5vh  , 2.75rem ) !important;
    button{
      padding-top: 0;
      padding-bottom: 0;
      height: 15px;
      color: red;
    }
    button{
      @media (max-width: 425px) {
        font-size: clamp(.75rem , 1.75vh , 2.25rem) !important;
      }
    }
  `)}
  .swiper{
    width: 100%;
    height: calc(100% + 4px);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: solid 1px yellow; */
    --swiper-scrollbar-size: 2px;
    --swiper-scrollbar-drag-bg-color: ${({theme}) => (`${theme.black.primaria}`)};
    .swiper-scrollbar{
      /* border: solid 1px yellow; */
    }
    .swiper-scrollbar-drag{
      /* background-color: ${({theme}) => (`${theme.black.primaria}`)}; */
    }
    .swiper-wrapper{
      /* border: solid 1px red; */
    }
    .swiper-slide{
      display: flex;
      align-items: center;
      justify-content: center;
      /* border: solid 1px blue; */
    }
  }
`
