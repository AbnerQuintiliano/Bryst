import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useForm , useFieldArray } from "react-hook-form";
import * as V from "../../../../components/_variaveis";
import { Card } from "./_Vendas";
Modal.setAppElement('#root');

const ModalVendas = styled(V.ModalStyles)`
  height: 95vh;
  width: max(50% , 300px);
`

const Valor = styled.span`
  font-size: 1.2rem;
`

const Formulario = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  &>div, & > section{
    width: 95%;
    display: flex;
    gap: .5rem;
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

export default function FormsModalVendas({ isOpen, onClose , Notification}) {
   const {register, handleSubmit , control , formState:{errors}} = useForm();
   const onSubmit=(data) => {
      console.log(data.produto)
      onClose();
      Notification();
   }

   const{fields , append , remove} = useFieldArray({
      control,
      name:"produto"
   })

   const [statusAdd , setAdd] = useState()
   const handleAdd = () => (( //uso dos dois e pq aparece o aviso no-sequences
      append({id:null, Tamanho:'', Cor:'' ,Quantidade: 1 }),
      setAdd(false)
   ))

   const handleConfirm = () => (fields.length > 0 ? handleSubmit(onSubmit)() : setAdd(true))

   return (
      <ModalVendas
         isOpen={isOpen}
         onRequestClose={onClose}
         style={{overlay:{backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
      >
         <Formulario>
            <Total><span>Id - 002</span> <span>Por - Marcos</span></Total>
            <V.SScrollCard height="70%">
               {fields.map((Compra, index) => (
                  <Card key={Compra.id} style={{position:'relative'}}>
                     <Close type="button" onClick={() => remove(index)}>X</Close>
                     <V.WrapperLC>
                        <V.Label $center>Id do produto</V.Label>
                        <V.Campos $Background={V.theme.black.fundoClaro} $Err={errors?.produto?.[index]?.id} {...register(`produto.${index}.id` ,{required: true, valueAsNumber:true})} autoComplete="off" type="number"></V.Campos>
                        {errors?.produto?.[index]?.id?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
                     </V.WrapperLC>
                     <V.WrapperLC>
                        <V.Label $center>Tamanho</V.Label>
                        <V.Campos $Background={V.theme.black.fundoClaro} $Err={errors?.produto?.[index]?.Tamanho} {...register(`produto.${index}.Tamanho` ,{required: true , maxLength:3})} autoComplete="off"></V.Campos>
                        {errors?.produto?.[index]?.Tamanho?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
                        {errors?.produto?.[index]?.Tamanho?.type === 'maxLength' && <V.Error>O maximo de caracteres e 3</V.Error>}
                     </V.WrapperLC>
                     <V.WrapperLC>
                        <V.Label $center>Cor</V.Label>
                        <V.Campos $Background={V.theme.black.fundoClaro} $Err={errors?.produto?.[index]?.Cor} {...register(`produto.${index}.Cor` ,{required: true})} autoComplete="off"></V.Campos>
                        {errors?.produto?.[index]?.Cor?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
                     </V.WrapperLC>
                     <V.WrapperLC>
                        <V.Label $center>Quantidade</V.Label>
                        <V.Campos $Background={V.theme.black.fundoClaro} $Err={errors?.produto?.[index]?.Quantidade} {...register(`produto.${index}.Quantidade` ,{required: true , valueAsNumber:true})} autoComplete="off" type="number"></V.Campos>
                        {errors?.produto?.[index]?.Quantidade?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
                     </V.WrapperLC>
                     <Valor>Valor: 240 R$</Valor>
                  </Card>
               ))}
               <Card>
                  <V.Button type='button' onClick={handleAdd}>+</V.Button>
                  { statusAdd && <V.Error $absolute='50%'>Necessário adicionar produto</V.Error> }
               </Card>
            </V.SScrollCard>
            <Total><span>Total : 4.000 R$</span> <span>24 Unidades</span></Total>
               <V.Button $Width='35%'
                  $Color={V.theme.color.verde} type="button" 
                  onClick={handleConfirm}
               >
                  Confirmar
               </V.Button>
         </Formulario>
      </ModalVendas>
   );
}