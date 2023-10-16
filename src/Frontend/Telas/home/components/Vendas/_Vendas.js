import React, { useRef, useState } from 'react';
import styled , {css, keyframes} from "styled-components";
import { Wrapper, _OverflowStyle } from "../../../../components/_variaveis"

export const JoinIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const VWrapper = styled(Wrapper)`
  flex-grow: 2;
  @media (max-width: 700px) {
   min-height: 80vh;
  }
`

export const Conteudo = styled.div`
  min-width: 40%; 
  padding: 0.4rem 0.5rem;
  background-color: ${props => props.theme.black.fundoClaro};
  color: ${props => props.theme.black.Letra};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
    @media (max-width: 600px) {
      min-width: 60vw;
    }
`
export const Header = styled.div`
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
export const ScrollCard = styled.section`
  height: ${props => props.height || '80%' };
  width: ${({$Special}) => ($Special ||  '100%' )};
  gap: .35rem;
  
  display: flex;
  flex-direction: ${({$direction}) => ($direction? 'column' : 'row')};
  overflow: auto;
  ${_OverflowStyle}
  & div{
    cursor: default;
  }
  @media(max-width: 700px){
    height: 80%;
  }
    @media(max-width: 500px){
    height:${ props => props.$HeightCel || '65vh'};
  }
  ${({$Special}) => ($Special && css`
    justify-content:space-between;
    align-items: center ;
  `)}
`

export const Card = styled.div`
  min-width: 45%;
  height: 100%;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-color: ${props => props.theme.black.deFundo};
  & img{
    width: 100px;
    border-radius: 20px;
  }
  & div{
    font-size: 0.75rem;
  }
  @media (max-width:760px){
    min-width: 50vw;
  }
`
export const Total =styled.div`
  height: clamp(2rem , 10% , 3rem );
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9rem;

  border-radius: 20px;
  background-color: ${props=> props.theme.black.deFundo};
  transition: opacity 0.5s ease-in-out;
  /* opacity: ${({ $isVisible }) => ($isVisible ? 0.5 : 1)}; */
  &:has(div){
    & > div{
      animation: ${JoinIn} 1s ease-in;
    }
  }
  @media(max-width: 1000px){
    font-size: 65%;
    height: 7.5%;
  }
`

export function SScrollCard(props){
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
    const walk = (x - startX) * 3; // Ajuste a velocidade do scroll conforme necessário
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
