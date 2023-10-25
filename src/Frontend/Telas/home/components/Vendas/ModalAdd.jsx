import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useForm , useFieldArray } from "react-hook-form";
import * as V from "../../../../components/_variaveis";
Modal.setAppElement('#root');

const Valor = styled.span`
  font-size: 1.2rem;
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
      <V.ModalStyles $Width='clamp(300px, 50vw, 60%)'
         $Height='95vh'
         isOpen={isOpen}
         onRequestClose={onClose}
         style={{overlay:{backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
      >
         <V.Formulario>
            <Total><span>Id - 002</span> <span>Por - Marcos</span></Total>
            <V.SScrollCard $Width='95%' height="70%">
               {fields.map((Compra, index) => (
                  <V.Card key={Compra.id} style={{position:'relative'}}>
                     <V.Close type="button" onClick={() => remove(index)}>X</V.Close>
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
                  </V.Card>
               ))}
               <V.Card>
                  <V.Button type='button' onClick={handleAdd}>+</V.Button>
                  { statusAdd && <V.Error $absolute='50%'>Necessário adicionar produto</V.Error> }
               </V.Card>
            </V.SScrollCard>
            <Total><span>Total : 4.000 R$</span> <span>24 Unidades</span></Total>
               <V.Button $Width='35%'
                  $Color={V.theme.color.verde} type="button" 
                  onClick={handleConfirm}
               >
                  Confirmar
               </V.Button>
         </V.Formulario>
      </V.ModalStyles>
   );
}