import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import * as V from "../../../components/_variaveis";
import { Card } from "../../home/components/Vendas/_Vendas";
import { useForm , useFieldArray } from "react-hook-form";


const Formulario = styled.form`
   width: 100%;
   height: 100%;

   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   & > div {
      width: 90%;
      display: flex;
      gap: 1rem;
   }
   & > img {
      position: absolute;
      left: 106% ;
      height: 20vw;
      width: 20vw;
      border-radius: 20px;
      @media (max-width: 450px) {
         display: none;
      }
   }
`;

const CardTQ = styled(Card)`
   background-color: ${({theme}) => (theme.black.fundoClaro)};
   min-width: 70%;
   max-width: 70%;
   padding: 0 0 1rem 0; //apenas pq no formulario do estoque ta me incomodando
   height: 100%;
   position: relative;
   & > div{
      width: 90%;
   }
`


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
         <Formulario>
            <div>
               <V.WrapperLC>
                  <V.Label>Id</V.Label>
                  <V.Campos placeholder="Id do Produto"  autoComplete="off" type='number' $Err={errors?.id} {...register('id',{required:true ,valueAsNumber:true})}></V.Campos>
                  {errors?.id?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
               </V.WrapperLC>
               <V.WrapperLC>
                  <V.Label>Marca</V.Label>
                  <V.Campos placeholder="Marca" autoComplete="off" $Err={errors?.marca} {...register('marca',{required:true})}></V.Campos>
                  {errors?.marca?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
               </V.WrapperLC>
            </div>
            <div>
               <V.WrapperLC>
                  <V.Label>Valor Un.</V.Label>
                  <V.Campos placeholder="Valor Unitario" autoComplete="off" type='number' $Err={errors?.Quantidade} {...register('Quantidade',{required:true ,valueAsNumber:true})}></V.Campos>
                  {errors?.Quantidade?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
               </V.WrapperLC>
               <V.WrapperLC>
                  <V.Label>Tipo</V.Label>
                  <V.Campos placeholder="Tipo" autoComplete="off" $Err={errors?.Tipo} {...register('Tipo',{required:true})}></V.Campos>
                  {errors?.Tipo?.type === 'required' && <V.Error $absolute='95%'>Necessário preencher o campo</V.Error>}
               </V.WrapperLC>
            </div>
            <img src={image} alt="" />
            <V.WrapperLC>
               <V.Campos $img type="file" id="image" accept="image/*" {...register('Img')} onChange={handleImageUpload}></V.Campos>
               <V.Add $click $width='100%' type='button' onClick={() => {document.getElementById('image').click();}}>Adicione a Imagem</V.Add>
            </V.WrapperLC>
            <V.ScrollCard height='45%' $Width='95%' $HeightCel='50vh'>
               {fieldsColors.map((Cores,CoresIndex) => {
               ColorsIndexbyConfirm.push(CoresIndex)
               ColorsTemTamanhos.push({Tamanho:false, ExistTam:false})
               return(
                  <Card style={{position:"relative"}} key={Cores.id}>
                     {console.log(ColorsTemTamanhos)}
                     <V.Close type="button" onClick={() => handleRemoveColors(CoresIndex)}>X</V.Close>
                     <V.WrapperLC>
                        <V.Label $center>Cor</V.Label>
                        <V.Campos $Background={V.theme.black.fundoClaro} autoComplete="off" $Err={errors?.Cores?.[CoresIndex]?.Cor} {...register(`Cores[${CoresIndex}].Cor`,{required:true , maxLength:10})}></V.Campos>
                        {errors?.Cores?.[CoresIndex]?.Cor?.type === 'required' && <V.Error $absolute='90%'>Necessário preencher o campo</V.Error>}
                        {errors?.Cores?.[CoresIndex]?.Cor?.type === 'maxLength' && <V.Error $absolute='90%'>O máximo e 10 caracteres</V.Error>}
                     </V.WrapperLC>
                     <V.SScrollCard height='70%' $Special='95%' $HeightCel='70%' >
                        {Cores.Tamanhos.map((Tamanhos, TamanhosIndex) => {
                           if(ColorsTemTamanhos[CoresIndex].ExistTam === false){
                              ColorsTemTamanhos[CoresIndex].Tamanho = true
                              ColorsTemTamanhos[CoresIndex].ExistTam = true
                           }
                           return(
                           <CardTQ key={Cores.id + TamanhosIndex}>
                              <V.Close type='button' $MinSpace onClick={() => {handleDeleteTamanho(CoresIndex ,TamanhosIndex)}}>X</V.Close>
                              <V.WrapperLC>
                                 <V.Label $center>Tamanho</V.Label>
                                 <V.Campos $Err={errors?.Cores?.[CoresIndex]?.Tamanhos?.[TamanhosIndex]?.Tamanho} placeholder="Tamanho" autoComplete="off" {...register(`Cores.${CoresIndex}.Tamanhos.${TamanhosIndex}.Tamanho`,{required:true , maxLength: 3})}></V.Campos>
                                 {errors?.Cores?.[CoresIndex]?.Tamanhos?.[TamanhosIndex]?.Tamanho?.type === 'required' && <V.Error $absolute='90%'>Necessário preencher o campo</V.Error>}
                                 {errors?.Cores?.[CoresIndex]?.Tamanhos?.[TamanhosIndex]?.Tamanho?.type === 'maxLength' && <V.Error $absolute='90%'>O máximo e 3 caracteres</V.Error>}
                              </V.WrapperLC>
                              <V.WrapperLC>
                                 <V.Label $center>Quantidade</V.Label>
                                 <V.Campos $Err={errors?.Cores?.[CoresIndex]?.Tamanhos?.[TamanhosIndex]?.Quantidade} placeholder="Quantidade" autoComplete="off" type="number" {...register(`Cores.[${CoresIndex}].Tamanhos.${TamanhosIndex}.Quantidade` ,{required:true, valueAsNumber:true})}></V.Campos>
                                 {errors?.Cores?.[CoresIndex]?.Tamanhos?.[TamanhosIndex]?.Quantidade?.type === 'required' && <V.Error $absolute='90%'>Necessário preencher o campo</V.Error>}
                              </V.WrapperLC>
                           </CardTQ>
                        )})}
                        <CardTQ $Width='95%'>
                           <V.Add type='button' onClick={() => ((handleAddTamanho(CoresIndex)))} >+</V.Add>
                           {ColorsTemTamanhos[CoresIndex]?.Tamanho === false && <V.Error $absolute='55%'>Necessário adicionar pelo menos um tamanho</V.Error>}
                        </CardTQ>
                     </V.SScrollCard>
                  </Card>
               )})}
               <Card style={{position:'relative'}}>
                  <V.Add type='button' onClick={handleAddColors}>+</V.Add>
                  { QtsdeCores <= 0 && <V.Error $absolute='70%'>Necessário adiciona ao menos uma cor</V.Error>}   
               </Card>
            </V.ScrollCard>
            <V.Button $Width='30%' $Height='2rem' $Color={V.theme.color.verde} $Font='1.25rem' type='button' onClick={()=>(handleConfirm())} style={{ height: "1.5rem" }}>
               Confirmar
            </V.Button>
         </Formulario>
      </V.ModalStyles>
   );
}