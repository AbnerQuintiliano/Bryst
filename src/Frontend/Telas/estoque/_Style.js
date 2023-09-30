import React , {useRef , useState} from "react"
import styled from "styled-components"
import { Wrapper } from "../../components/_variaveis"
import { ScrollVendas } from "../home/components/Vendas/_Vendas"

export const SWrapper = styled(Wrapper)`
  height: 100%;
`
export const Top = styled.div`
  display: flex;
  @media (max-width:600px) {
      /* flex-direction: column; */
      gap: 0.5rem;
    }
    @media (max-width:600px) and (min-height:650px) {
      flex-direction: column;
        &>input{
          width: 100%;
        }
    }
`

export const Pesquisa = styled.input`
  min-height: 1.5rem;
  width: 75%;
  border-radius: 20px;
  font-size: 1rem;
  outline: none;
  text-align: center;

  color: #FFFFFF;
  background-color: ${props => props.theme.black.fundoClaro};
  &:focus{
    outline: solid 1px ${props => props.theme.black.primaria};
  } 
`

export const Scroll = styled(ScrollVendas)`
    height: 100%;
    &::-webkit-scrollbar{
      height: .5rem;
    }
`

export const Produto = styled.section`
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
      /* width: clamp(150px , 75% , 200px); */
      width: clamp(50% , 2vw , 150%);
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

export const Titulo = styled.span`
  position: absolute;
  top: clamp( -2.5vw , 2.75vw ,-15px);
  font-size: clamp(.5rem , 1vw , .75rem);
  padding: 2% 10%;
  border-radius: 20px;
  background: linear-gradient(to bottom, ${props => props.theme.black.deFundo} 75%, rgba(217, 217, 217, 0) 25%);
`

export const WrapperBtn = styled.span`
  width: 90%;
  height: clamp(20px , 2vw , 1.75rem );

  display: flex;
  justify-content: space-evenly;
`

export const Btn = styled.button`
  background-color: unset;
  color: ${props => props.theme.black.Letra};
  height: clamp(100% , 1vw , 1rem);
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

export const Excluir = styled(Btn)`
  width: 40%;
  outline: solid 1px #ff3b19;
  &:hover{
    background-color: #ff3b19;
    outline: unset;
  }
`

export const Alterar = styled(Btn)`
  width: 40%;
  outline: solid 1px #2a8c4a;
  &:hover{
    background-color: #2a8c4a;
    outline: unset;
  }
`

export const Dados = styled.div`
  width: 100%;
  height: clamp(20px ,  2vw  , 1.75rem );
  font-size: clamp(70% , 1vw , .8rem);
  background-color: ${props => props.theme.black.deFundo};
  padding: 2%;
  border-radius: 20px;
  text-align: center;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

export function SScroll({children}){
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
        <Scroll
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
                {children}
        </Scroll>
    );
  };