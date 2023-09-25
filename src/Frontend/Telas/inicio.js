import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollCard , Card } from "./home/components/Vendas/_Vendas";

export default function Inicio(){
    return(
      <>
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