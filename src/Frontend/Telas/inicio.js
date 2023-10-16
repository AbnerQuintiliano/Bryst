import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ScrollCard , Card } from "./home/components/Vendas/_Vendas";

const FileInput = styled.input`
  display: none;
`;

const CustomFileLabel = styled.label`
  background-color: ${({theme}) => (theme.black.deFundo)};
  color: #333;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ddd;
  }
`;

const Container = styled.div`
  display: inline-block; /* Certifique-se de que o rótulo e o botão fiquem no mesmo nível */
  height: 100px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-items: center;
`;

export default function Inicio(){
    return(
      <>
        <Container>
          <FileInput type="file" id="file" />
          <CustomFileLabel htmlFor="file">Escolher arquivo</CustomFileLabel>
        </Container>
        <Teste>
            <Card>sim</Card>
            <Card>sim</Card>
            <Card>sim</Card>
            <Card>sim</Card>
            <Card>sim</Card>
            <Card>sim</Card>
        </Teste>
      </>
    )
    
  }
   function Teste(props){
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
        <ScrollCard
          className="scrollable-container"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
                <Link to="/" className="" >login</Link>
                {props.children} 
        </ScrollCard>
    ); 
    }