import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useForm , useFieldArray, useWatch } from "react-hook-form";
import * as V from "../../../../components/_variaveis";
import axios from "axios";
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
      append({nome:0, Tamanho:'', Cor:'' ,Quantidade: 1 }),
      setAdd(false)
   ))

   const [Produtos , setProdutos]  = useState()
   const [Nome , setNome]  = useState(0)
   const ValueNome = useWatch({
      control,
      name:'nome',
      defaultValue:''
   })
   useEffect(()=>{
      if(isOpen === true){
         axios.get('http://localhost:3001/api/Produto/Compra')
         .then((response) => {
            setProdutos(response.data)
         })
         .catch(
            console.log('api catch')
         )
      }
   },[setProdutos, isOpen])
   // console.log(isOpen)
   // console.log(Nome)
   // console.log(control._fields.produto)

   const handleConfirm = () => (fields.length > 0 ? handleSubmit(onSubmit)() : setAdd(true))
   return (
      <V.ModalStyles $Width='clamp(300px, 50vw, 60%)'
         $Height='95vh'
         isOpen={isOpen}
         onRequestClose={onClose}
         style={{overlay:{backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
      >
         <V.Formulario>
            <V.Card $Direction='row' $Height='2rem' $Width='95%' $WMidia='0' $HMidia='0'> <span>Por - {sessionStorage.getItem('userName')}</span></V.Card>
            <V.SScrollCard $Width='95%' height="70%">
               {fields.map((Compra, index) => (
                  <V.Card key={Compra.nome} style={{position:'relative'}}>
                     <V.Close type="button" onClick={() => remove(index)}>X</V.Close>
                     <V.WrapperLC>
                        <V.Label $center>Nome do produto</V.Label>
                        {/* <V.CampoOption $Background={V.theme.black.fundoClaro} $width='100%' $height='1.75rem' $Err={errors?.produto?.[index]?.nome} {...register(`produto.${index}.nome` ,{required: true, validate:(value) => {return value !== "0"}})}>
                           <option value="0">Selecione Produto</option>
                           {
                              Produtos.map((obj, i) => (
                                 <option key={i} value={obj.nome}>{obj.nome}</option>
                              ))
                           }
                        </V.CampoOption> */}
                        <V.Campos $Background={V.theme.black.fundoClaro} $Err={errors?.produto?.[index]?.nome} {...register(`produto.${index}.nome` ,{required: true})} autoComplete="off"></V.Campos>
                        {errors?.produto?.[index]?.nome?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
                     </V.WrapperLC>
                     <V.WrapperLC>
                        <V.Label $center>Cor</V.Label>
                        {/* <V.CampoOption $Background={V.theme.black.fundoClaro} $width='100%' $height='1.75rem' $Err={errors?.produto?.[index]?.Cor} {...register(`produto.${index}.Cor` ,{required: true, validate:(value) => {return value !== "0"}})}>
                           <option value="0">Pagamento...</option>
                           {
                              Nome !== 0 && Produtos.filter(produto => produto.nome === Nome).map((obj) => (
                                 console.log(obj)
                              ))
                           }
                        </V.CampoOption> */}
                        <V.Campos $Background={V.theme.black.fundoClaro} $Err={errors?.produto?.[index]?.Cor} {...register(`produto.${index}.Cor` ,{required: true})} autoComplete="off"></V.Campos>
                        {errors?.produto?.[index]?.Cor?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
                     </V.WrapperLC>
                     <V.WrapperLC>
                        <V.Label $center>Tamanho</V.Label>
                        {/* <V.CampoOption $Background={V.theme.black.fundoClaro} $width='100%' $height='1.75rem' $Err={errors?.produto?.[index]?.Tamanho} {...register(`produto.${index}.Tamanho` ,{required: true , validate:(value) => {return value !== "0"}})}>
                           <option value="0">Pagamento...</option>
                           <option value="Pix/dinheiro">Pix/dinheiro</option>
                           <option value="Débito">Cartão de débito</option>
                           <option value="Crédito">Cartão de crédito</option>
                        </V.CampoOption> */}
                        <V.Campos $Background={V.theme.black.fundoClaro} $Err={errors?.produto?.[index]?.Tamanho} {...register(`produto.${index}.Tamanho` ,{required: true , maxLength:3})} autoComplete="off"></V.Campos>
                        {errors?.produto?.[index]?.Tamanho?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
                        {errors?.produto?.[index]?.Tamanho?.type === 'maxLength' && <V.Error>O maximo de caracteres e 3</V.Error>}
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


const AutoComplete = ({ suggestions }) => {
 const [filteredSuggestions, setFilteredSuggestions] = useState([]);
 const [userInput, setUserInput] = useState('');
 const [selectedSuggestion, setSelectedSuggestion] = useState(0);

 const onInputChange = (e) => {
    const userInput = e.currentTarget.value;
    setUserInput(userInput);

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setFilteredSuggestions(filteredSuggestions);
    setSelectedSuggestion(0);
 };

 const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setUserInput(filteredSuggestions[selectedSuggestion]);
      setFilteredSuggestions([]);
    } else if (e.keyCode === 38) {
      if (selectedSuggestion === 0) {
        return;
      }
      setSelectedSuggestion(selectedSuggestion - 1);
    } else if (e.keyCode === 40) {
      if (selectedSuggestion === filteredSuggestions.length - 1) {
        return;
      }
      setSelectedSuggestion(selectedSuggestion + 1);
    }
 };

 return (
    <div>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />
      {filteredSuggestions.length > 0 && (
        <ul>
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              style={{
                backgroundColor:
                 index === selectedSuggestion ? 'lightgray' : 'white',
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
 );
};