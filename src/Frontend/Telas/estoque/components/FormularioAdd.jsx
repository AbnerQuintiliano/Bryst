import React, { useState } from "react";
import Modal from "react-modal";
import { Buffer } from "buffer";
import * as V from "../../../components/_variaveis";
import { useForm , useFieldArray , useWatch } from "react-hook-form";
import axios from "axios";
Modal.setAppElement("#root");

export default function FormsModalEstoque({ isOpen, onClose, Complete}) {
   const {control ,register, handleSubmit, reset, setValue, formState:{errors}} = useForm();


   const{fields: fieldsColors , append , remove} = useFieldArray({
      control,
      name:'Cores'
   })
   const [QtsdeCores , setQtsdeCores] = useState(0)
   const handleAddColors = () => ((
      (setQtsdeCores(QtsdeCores + 1)),
      append({Cor:'' , Tamanhos:[]})
   ))
   const handleRemoveColors = (Index) =>((remove(Index), (setQtsdeCores(QtsdeCores - 1), setAdd(statusAdd - fieldsColors[Index].Tamanhos.length))))

   const [Nome, setNome] = useState('')
   const ValueNome = useWatch({
      control,
      name: 'nome',
      defautValue:''
   })
   const onSubimit = (data) => { 
      console.log(data);
      axios.post('http://localhost:3001/api/Produto/Create',data)
      .then((response) => ((
         console.log(response),
         Complete(),
         onClose(),
         reset(),
         setNome(''),
         setImage(''),
         handleRemoveColors(ColorsIndexbyConfirm.map((value) => (value)))
      )))
      .catch((error) => ((
         console.log(error.response.data),
         setNome(ValueNome)
      )))
   }

   const [image, setImage] = useState()
   const handleImageUpload = (e) => {
      const selectedImage = e.target.files[0];
      if (selectedImage) {
         const reader = new FileReader();
         reader.onload = (e) => {
            setImage(e.target.result);
            setValue('Img', e.target.result)
            var dadosBinarios = Buffer.from(e.target.result.split(',')[1], 'base64');
            console.log(dadosBinarios)
            // setValue('Img', e.target.result)
         };
         reader.readAsDataURL(selectedImage);
      }
   };


   const [statusAdd , setAdd] = useState(0)
   const handleAddTamanho = (colorIndex) => ((fieldsColors[colorIndex].Tamanhos.push({Tamanho:'',Quantidade:0}),setAdd(statusAdd + 1)))
   const handleDeleteTamanho = (colorIndex , TamanhosIndex) => {
      console.log(TamanhosIndex)
      console.log(fieldsColors[colorIndex].Tamanhos)
      if(fieldsColors[colorIndex].Tamanhos.length - 1 === TamanhosIndex)
         fieldsColors[colorIndex].Tamanhos.splice((TamanhosIndex), 1)
      else{
         console.log(fieldsColors[colorIndex].Tamanhos.splice((TamanhosIndex), 1))
         fieldsColors[colorIndex].Tamanhos.map((Tamanhos, i) => ((
            setValue(`Cores.${colorIndex}.Tamanhos.${i}.Quantidade`, Tamanhos.Quantidade),
            setValue(`Cores.${colorIndex}.Tamanhos.${i}.Tamanho`, Tamanhos.Tamanho)
         )))
      }
      setAdd(statusAdd - 1);
   }

   var ColorsTemTamanhos = []
   let ColorsIndexbyConfirm = []
   const handleColorsTemTamanhos = () => {
      let podeir = true
      if(0 === ColorsIndexbyConfirm.length){
         return podeir = false
      }
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
                  <V.Label>Marca</V.Label>
                  <V.Campos placeholder="marca" autoComplete="off" $Err={errors?.marca} {...register('marca',{required:true})}></V.Campos>
                  {errors?.marca?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher</V.Error>}
               </V.WrapperLC>
               <V.WrapperLC>
                  <V.Label>Nome</V.Label>
                  <V.Campos placeholder="nome"  autoComplete="off" $Err={errors?.nome || Nome === ValueNome} {...register('nome',{required:true})}></V.Campos>
                  {errors?.nome?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher</V.Error>}
                  {Nome === ValueNome && <V.Error $absolute='95%'>Ja existe o produto {Nome}</V.Error>}
               </V.WrapperLC>
            </V._ContainerItens>
            <V._ContainerItens $Width='90%' $Height='auto' $NoMedia>
               <V.WrapperLC>
                  <V.Label>Valor Un.</V.Label>
                  <V.Campos placeholder="Valor Unitario" autoComplete="off" type='number' $Err={errors?.valor} {...register('valor',{required:true ,valueAsNumber:true})}></V.Campos>
                  {errors?.valor?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher</V.Error>}
               </V.WrapperLC>
               <V.WrapperLC>
                  <V.Label>Tipo</V.Label>
                  <V.Campos placeholder="tipo" autoComplete="off" $Err={errors?.tipo} {...register('tipo',{required:true})}></V.Campos>
                  {errors?.tipo?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher</V.Error>}
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
                     <V.Close type="button" onClick={() => handleRemoveColors(CoresIndex)}>X</V.Close>
                     <V.WrapperLC>
                        <V.Label $center>Cor</V.Label>
                        <V.Campos $Background={V.theme.black.fundoClaro} autoComplete="off" $Err={errors?.Cores?.[CoresIndex]?.Cor} {...register(`Cores[${CoresIndex}].Cor`,{required:true , maxLength:10})}></V.Campos>
                        {errors?.Cores?.[CoresIndex]?.Cor?.type === 'required' && <V.Error $absolute='90%'>Necessário preencher</V.Error>}
                        {errors?.Cores?.[CoresIndex]?.Cor?.type === 'maxLength' && <V.Error $absolute='90%'>O máximo e 10 caracteres</V.Error>}
                     </V.WrapperLC>
                     <V.SScrollCard height='70%' $Special='95%' $HeightCel='70%' >
                        {Cores.Tamanhos.map((_, TamanhosIndex) => {
                           if(ColorsTemTamanhos[CoresIndex].ExistTam === false){
                              ColorsTemTamanhos[CoresIndex].Tamanho = true
                              ColorsTemTamanhos[CoresIndex].ExistTam = true
                           }
                           // console.log(_ + `${TamanhosIndex}`) 
                           // console.log(_) 
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