import React, { useState } from "react";
import Modal from "react-modal";
import { useForm , useFieldArray } from "react-hook-form";
import * as V from "../../../../components/_variaveis";
Modal.setAppElement('#root');

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
            <V.Card $Direction='row' $Height='2rem' $Width='95%' $WMidia='0' $HMidia='0'><span>Id - 002</span> <span>Por - Marcos</span></V.Card>
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
                     <span>Valor: 240 R$</span>
                  </V.Card>
               ))}
               <V.Card>
                  <V.Button $Height='2rem' type='button' onClick={handleAdd}>+</V.Button>
                  { statusAdd && <V.Error $absolute='55%'>Necessário adicionar produto</V.Error> }
               </V.Card>
            </V.SScrollCard>
            
            <V.Card $Direction='row' $Height='2rem' $Width='95%' $WMidia='0' $HMidia='0'>
               <span>24 Unidades</span>
               <span>Total : 4.000 R$</span>
            </V.Card>
            <V.CampoOption $width='80%' $height='2rem' $Err={errors?.FormaPg} {...register("FormaPg" ,{required: true ,validate:(value) => {return value !== "0"}})}>
                  <option value="0">Pagamento...</option>
                  <option value="Pix/dinheiro">Pix/dinheiro</option>
                  <option value="Débito">Cartão de débito</option>
                  <option value="Crédito">Cartão de crédito</option>
               </V.CampoOption>
            <V.Button $Width='max(35%,125px)' $Height='2rem'
               $Color={V.theme.color.verde} type="button" 
               onClick={handleConfirm}
            >
               Confirmar
            </V.Button>
         </V.Formulario>
      </V.ModalStyles>
   );
}