import React, { useState } from "react";
import Modal from "react-modal";
import * as V from "../../../components/_variaveis";
import { useForm , useFieldArray } from "react-hook-form";

Modal.setAppElement("#root");

export default function FormsModalEstoque({ isOpen, onClose, Complete }) {

   const [QtsdeCores , setQtsdeCores] = useState(0)
   const {control ,register, handleSubmit, formState:{errors} , setValue} = useForm();
   const{fields: fieldsColors , append , remove} = useFieldArray({
      control,
      name:'Cores'
   })
   const handleAddColors = () => ((
      (setQtsdeCores(QtsdeCores + 1)),
      append({Cor:'' , Tamanhos:[]})
   ))
   const handleRemoveColors = (Index) =>((remove(Index), (setQtsdeCores(QtsdeCores - 1))))

   const onSubimit = (data) => { 
      console.log(data);
      onClose();
   }

   const [image, setImage] = useState(null);
   const handleImageUpload = (e) => {
      const selectedImage = e.target.files[0];
      if (selectedImage) {
         const reader = new FileReader();
         reader.onload = (e) => {
            setImage(e.target.result);
         };
         reader.readAsDataURL(selectedImage);
      }
   };

   const [statusAdd , setAdd] = useState(0)
   const handleAddTamanho = (colorIndex) => ((fieldsColors[colorIndex].Tamanhos.push({Tamanho:'',Quantidade:''}),setAdd(statusAdd + 1)))
   const handleDeleteTamanho = (colorIndex , TamanhosIndex) => {
      fieldsColors[colorIndex].Tamanhos.splice((TamanhosIndex), 1);
      if(fieldsColors[colorIndex].Tamanhos.length === TamanhosIndex)
         fieldsColors[colorIndex].Tamanhos.splice((TamanhosIndex), 1)
      else{
         fieldsColors[colorIndex]?.Tamanhos[TamanhosIndex]?.Tamanho && (setValue(`Cores.${colorIndex}.Tamanhos.${TamanhosIndex}.Tamanho`, fieldsColors[colorIndex].Tamanhos[TamanhosIndex].Tamanho)); // quando tem valor
         !fieldsColors[colorIndex]?.Tamanhos[TamanhosIndex]?.Tamanho && setValue(`Cores.${colorIndex}.Tamanhos.${TamanhosIndex}.Tamanho`, ''); // limpa quando não tem valor, mas não deixa o ultimo ser excluido
         fieldsColors[colorIndex]?.Tamanhos[TamanhosIndex]?.Tamanho && (setValue(`Cores.${colorIndex}.Tamanhos.${TamanhosIndex}.Quantidade`, fieldsColors[colorIndex].Tamanhos[TamanhosIndex].Tamanho)); 
         !fieldsColors[colorIndex]?.Tamanhos[TamanhosIndex]?.Tamanho && setValue(`Cores.${colorIndex}.Tamanhos.${TamanhosIndex}.Quantidade`, ''); 
      }
      setAdd(statusAdd - 1);
   }

   var ColorsTemTamanhos = []
   let ColorsIndexbyConfirm = []
   let podeir = true
   const handleColorsTemTamanhos = () => {
      ColorsIndexbyConfirm.forEach((_, index) => {
         if(!ColorsTemTamanhos[index].Tamanho)
            podeir = false
      })
      statusAdd === 0 && handleSubmit()()
      return podeir; 
   }

   const handleConfirm = () => (handleColorsTemTamanhos() && handleSubmit(onSubimit)())
   return (
      <V.ModalStyles
         $Height='95vh'
         $Width='max(50%, 300px)'
         isOpen={isOpen}
         onRequestClose={onClose}
         style={{overlay: { backgroundColor: "rgba(27, 30, 39, 0.8)", backdropFilter: "blur(10px)"}}}
      >
         <V.Formulario>
            <V._ContainerItens $Width='90%' $Height='auto' $NoMedia>
               <V.WrapperLC>
                  <V.Label>Id</V.Label>
                  <V.Campos placeholder="Id do Produto"  autoComplete="off" type='number' $Err={errors?.id} {...register('id',{required:true ,valueAsNumber:true})}></V.Campos>
                  {errors?.id?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher</V.Error>}
               </V.WrapperLC>
               <V.WrapperLC>
                  <V.Label>Marca</V.Label>
                  <V.Campos placeholder="Marca" autoComplete="off" $Err={errors?.marca} {...register('marca',{required:true})}></V.Campos>
                  {errors?.marca?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher</V.Error>}
               </V.WrapperLC>
            </V._ContainerItens>
            <V._ContainerItens $Width='90%' $Height='auto' $NoMedia>
               <V.WrapperLC>
                  <V.Label>Valor Un.</V.Label>
                  <V.Campos placeholder="Valor Unitario" autoComplete="off" type='number' $Err={errors?.Quantidade} {...register('Quantidade',{required:true ,valueAsNumber:true})}></V.Campos>
                  {errors?.Quantidade?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher</V.Error>}
               </V.WrapperLC>
               <V.WrapperLC>
                  <V.Label>Tipo</V.Label>
                  <V.Campos placeholder="Tipo" autoComplete="off" $Err={errors?.Tipo} {...register('Tipo',{required:true})}></V.Campos>
                  {errors?.Tipo?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher</V.Error>}
               </V.WrapperLC>
            </V._ContainerItens>
            <img src={image} alt="" />
            <V.WrapperLC>
               <V.Campos $img type="file" id="image" accept="image/*" {...register('Img')} onChange={handleImageUpload}></V.Campos>
               <V.Button $click $Width='100%' type='button' onClick={() => {document.getElementById('image').click();}}>Adicione a Imagem</V.Button>
            </V.WrapperLC>
            <V.ScrollCard height='50%' $Width='95%' $HeightCel='50vh'>
               {fieldsColors.map((Cores,CoresIndex) => {
               ColorsIndexbyConfirm.push(CoresIndex)
               ColorsTemTamanhos.push({Tamanho:false, ExistTam:false})
               return(
                  <V.Card $WMidia='75%' key={Cores.id}>
                     {console.log(ColorsTemTamanhos)}
                     <V.Close type="button" onClick={() => handleRemoveColors(CoresIndex)}>X</V.Close>
                     <V.WrapperLC>
                        <V.Label $center>Cor</V.Label>
                        <V.Campos $Background={V.theme.black.fundoClaro} autoComplete="off" $Err={errors?.Cores?.[CoresIndex]?.Cor} {...register(`Cores[${CoresIndex}].Cor`,{required:true , maxLength:10})}></V.Campos>
                        {errors?.Cores?.[CoresIndex]?.Cor?.type === 'required' && <V.Error $absolute='90%'>Necessário preencher</V.Error>}
                        {errors?.Cores?.[CoresIndex]?.Cor?.type === 'maxLength' && <V.Error $absolute='90%'>O máximo e 10 caracteres</V.Error>}
                     </V.WrapperLC>
                     <V.SScrollCard height='70%' $Special='95%' $HeightCel='70%' >
                        {Cores.Tamanhos.map((Tamanhos, TamanhosIndex) => {
                           if(ColorsTemTamanhos[CoresIndex].ExistTam === false){
                              ColorsTemTamanhos[CoresIndex].Tamanho = true
                              ColorsTemTamanhos[CoresIndex].ExistTam = true
                           }
                           return(
                           <V.Card $WMidia='80%' $Background={V.theme.black.fundoClaro} $Width='70%' key={Cores.id + TamanhosIndex}>
                              <V.Close type='button' $MinSpace onClick={() => {handleDeleteTamanho(CoresIndex ,TamanhosIndex)}}>X</V.Close>
                              <V.WrapperLC>
                                 <V.Label $center>Tamanho</V.Label>
                                 <V.Campos $Err={errors?.Cores?.[CoresIndex]?.Tamanhos?.[TamanhosIndex]?.Tamanho} placeholder="Tamanho" autoComplete="off" {...register(`Cores.${CoresIndex}.Tamanhos.${TamanhosIndex}.Tamanho`,{required:true , maxLength: 3})}></V.Campos>
                                 {errors?.Cores?.[CoresIndex]?.Tamanhos?.[TamanhosIndex]?.Tamanho?.type === 'required' && <V.Error $absolute='90%'>Necessário preencher</V.Error>}
                                 {errors?.Cores?.[CoresIndex]?.Tamanhos?.[TamanhosIndex]?.Tamanho?.type === 'maxLength' && <V.Error $absolute='90%'>O máximo e 3 caracteres</V.Error>}
                              </V.WrapperLC>
                              <V.WrapperLC>
                                 <V.Label $center>Quantidade</V.Label>
                                 <V.Campos $Err={errors?.Cores?.[CoresIndex]?.Tamanhos?.[TamanhosIndex]?.Quantidade} placeholder="Quantidade" autoComplete="off" type="number" {...register(`Cores.[${CoresIndex}].Tamanhos.${TamanhosIndex}.Quantidade` ,{required:true, valueAsNumber:true})}></V.Campos>
                                 {errors?.Cores?.[CoresIndex]?.Tamanhos?.[TamanhosIndex]?.Quantidade?.type === 'required' && <V.Error $absolute='90%'>Necessário preencher</V.Error>}
                              </V.WrapperLC>
                           </V.Card>
                        )})}
                        <V.Card $WMidia='80%' $Background={V.theme.black.fundoClaro} $Width='70%'>
                           <V.Button $Height='2rem' type='button' onClick={() => ((handleAddTamanho(CoresIndex)))} >+</V.Button>
                           {ColorsTemTamanhos[CoresIndex]?.Tamanho === false && <V.Error $absolute='55%'>Necessário adicionar pelo menos um tamanho</V.Error>}
                        </V.Card>
                     </V.SScrollCard>
                  </V.Card>
               )})}
               <V.Card $WMidia='75%' style={{position:'relative'}}>
                  <V.Button $Height='2rem' type='button' onClick={handleAddColors}>+</V.Button>
                  { QtsdeCores <= 0 && <V.Error $absolute='70%'>Necessário adiciona ao menos uma cor</V.Error>}   
               </V.Card>
            </V.ScrollCard>
            <V.Button $Width='max(30%, 130px)' $Height='2rem' $Color={V.theme.color.verde} $Font='1.25rem' type='button' onClick={()=>(handleConfirm())}>
               Confirmar
            </V.Button>
         </V.Formulario>
      </V.ModalStyles>
   );
}