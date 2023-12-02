import styled from "styled-components"

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
  top: -60%;
  font-size: clamp(.5rem , 1vw , .75rem);
  padding: 2% 10%;
  border-radius: 20px;
  background: linear-gradient(to bottom, ${props => props.theme.black.deFundo} 75%, rgba(217, 217, 217, 0) 25%);
`

export const WrapperBtn = styled.span`
  width: 90%;

  display: flex;
  justify-content: space-evenly;
`

export const BtnEscolha = styled.button`
  background-color: unset;
  color: ${props => props.theme.black.Letra};
  /* color: red; //remover */
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