import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { ModalStyles , Add , StyleCampo , Label , Error} from "../../../../components/_variaveis";
import { Card , SScrollCard } from "./_Vendas";

const ModalAdd = styled(ModalStyles)`
  height: 95vh;
  width: max(50% , 300px);
`

const WrapperLC = styled.div `
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:2px;
`
const Campos = styled.input`
  ${StyleCampo};
  background-color: ${props => props.theme.black.fundoClaro};
`
const Valor = styled.span`
  font-size: 1.2rem;
`

const Formulario = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  &>div{
    width: 95%;
    display: flex;
    gap: .5rem;
  }
  &>img{
    height: 200px;
    width: 200px;
    border-radius: 20px;
  }
`
const Confirmar = styled(Add)`
  width: 40%;
  height: 1.75rem;
  font-size: 1.25rem;
  outline: solid 1px ${props => props.theme.color.verde};
  &:hover{
    background-color: ${props => props.theme.color.verde};
    outline: unset;
  }
`
const Total = styled.section`
  width: 95%;
  border-radius: 20px;
  height: 2rem;
  background-color: ${props => props.theme.black.deFundo};
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Close = styled.button`
  position: absolute;
  background-color: unset;
  color: ${props => props.theme.black.Letra};
  top: 15px;
  right: 15px;
  width: 10px;
  height: 10px;
  &:hover{
    color: ${props => props.theme.color.vermelho};
  }
`

Modal.setAppElement('#root');

export default function FormsModalVendas({ isOpen, onClose , handleMsg}) {
  const {register, handleSubmit , formState:{errors}} = useForm();
  const onSubmit=(data) => {
    console.log(data)
    onClose();
    handleMsg();
  }

  return (
      <ModalAdd
          isOpen={isOpen}
          onRequestClose={onClose}
          style={{overlay:{backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
      >
          <Formulario>
            <SScrollCard>
              <Card style={{position:'relative'}}>
                <Close>X</Close>
                <WrapperLC>
                  <Label center="true">Id do produto</Label>
                  <Campos err={errors?.Id} {...register("Id" ,{required: true})} autoComplete="off"></Campos>
                  {errors?.Id?.type === 'required' && <Error>Necessário preencher o campo</Error>}
                </WrapperLC>
                <WrapperLC>
                  <Label center="true">Tamanho</Label>
                  <Campos err={errors?.Tamanho} {...register("Tamanho" ,{required: true , maxLength:3})} autoComplete="off"></Campos>
                  {errors?.Tamanho?.type === 'required' && <Error>Necessário preencher o campo</Error>}
                  {errors?.Tamanho?.type === 'maxLength' && <Error>O maximo de caracteres e 3</Error>}
                </WrapperLC>
                <WrapperLC>
                  <Label center="true">Cor</Label>
                  <Campos err={errors?.Cor} {...register("Cor" ,{required: true})} autoComplete="off"></Campos>
                  {errors?.Cor?.type === 'required' && <Error>Necessário preencher o campo</Error>}
                </WrapperLC>
                <WrapperLC>
                  <Label center="true" >Quantidade</Label>
                  <Campos err={errors?.Qts} {...register("Qts" ,{required: true})} autoComplete="off"></Campos>
                  {errors?.Qts?.type === 'required' && <Error>Necessário preencher o campo</Error>}
                </WrapperLC>
                <Valor>Valor: 240 R$</Valor>
              </Card>
               <Card><Add>+</Add></Card> 
            </SScrollCard>
            <Total><span>Total : 4.000 R$</span> <span>24 Unidades</span></Total>

              <Confirmar type="button" onClick={() => handleSubmit(onSubmit)()}>Confirmar</Confirmar>
          </Formulario>
      </ModalAdd>
  );
  }