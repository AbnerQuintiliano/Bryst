import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { Error, ModalStyles , StyleCampo , Add, BtnTitulo, Label } from "../../../components/_variaveis";
import { SScrollCard , ScrollCard , Card } from "../../home/components/Vendas/_Vendas";
import { BtnEscolha } from "../_Style";
import { useForm , useFieldArray } from "react-hook-form";

const ModalAdd = styled(ModalStyles)`
   height: 95vh;
   width: max(50%, 300px);
`

const Campos = styled.input`
   ${StyleCampo}
   width: 100%;
   height: ${({$img}) => ($img && '3rem')};
   display: ${({$img}) => ($img && 'none')};
   background-image: ${({$img}) => ($img || 'none')};
   background-color: ${({$insideCard , theme}) => ($insideCard && theme.black.fundoClaro)};
`;
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

const WrapperLC = styled.div `
   width: 80%;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap:5px;
   position: relative;
`

const Confirmar = styled(BtnEscolha)`
   width: 40%;
   outline: solid 1px #2a8c4a;
   &:hover {
      background-color: #2a8c4a;
      outline: unset;
   }
`;

const CardTQ = styled(Card)`
   background-color: ${({theme}) => (theme.black.fundoClaro)};
   min-width: 70%;
   max-width: 70%;
   padding: 0 0 1rem 0; //apenas pq no formulario do estoque ta me incomodando
   height: 100%;
   & > div{
      width: 90%;
   }
`


Modal.setAppElement("#root");

export default function FormsModalEstoque({ isOpen, onClose, Complete }) {

   const {control ,register, handleSubmit, formState:{errors} } = useForm();
   const{fields , append , remove} = useFieldArray({
      control,
      name:'type'
    })

   const onSubimit = (data) => { 
      console.log(data);
      onClose()
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
   return (
      <ModalAdd
         isOpen={isOpen}
         onRequestClose={onClose}
         style={{overlay: { backgroundColor: "rgba(27, 30, 39, 0.8)", backdropFilter: "blur(10px)"}}}
      >
         <Formulario>
            <div>
               <WrapperLC>
                  <Label>Id</Label>
                  <Campos placeholder="Id do Produto"  autoComplete="off" type='number' $err={errors?.id} {...register('id',{required:true ,valueAsNumber:true})}></Campos>
                  {errors?.id?.type === 'required' && <Error $absolute='95%'>Necessário preencher o campo</Error>}
               </WrapperLC>
               <WrapperLC>
                  <Label>Marca</Label>
                  <Campos placeholder="Marca" autoComplete="off" $err={errors?.marca} {...register('marca',{required:true})}></Campos>
                  {errors?.marca?.type === 'required' && <Error $absolute='95%'>Necessário preencher o campo</Error>}
               </WrapperLC>
            </div>
            <div>
               <WrapperLC>
                  <Label>Valor Un.</Label>
                  <Campos placeholder="Valor Unitario" autoComplete="off" type='number' $err={errors?.Quantidade} {...register('Quantidade',{required:true ,valueAsNumber:true})}></Campos>
                  {errors?.Quantidade?.type === 'required' && <Error $absolute='95%'>Necessário preencher o campo</Error>}
               </WrapperLC>
               <WrapperLC>
                  <Label>Tipo</Label>
                  <Campos placeholder="Tipo" autoComplete="off" $err={errors?.Tipo} {...register('Tipo',{required:true})}></Campos>
                  {errors?.Tipo?.type === 'required' && <Error $absolute='95%'>Necessário preencher o campo</Error>}
               </WrapperLC>
            </div>
            <img src={image} alt="" />
            <WrapperLC>
               <Campos $img type="file" id="image" accept="image/*" {...register('Img')} onChange={handleImageUpload}></Campos>
               <Add $click $width='100%' type='button' onClick={() => {document.getElementById('image').click();}}>Adicione a Imagem</Add>
            </WrapperLC>
            <ScrollCard height='45%' $Special='95%' $HeightCel='50vh'>
               <Card>
                  <Add type='button'>+</Add>   
               </Card>
               <Card>
                  <WrapperLC>
                     <Label $center>Cor</Label>
                     <Campos $insideCard placeholder="Cores"></Campos>
                     <Error $absolute='90%'>sim</Error>
                  </WrapperLC>
                  <SScrollCard height='70%' $Special='95%' $HeightCel='70%' >
                     <CardTQ>
                        <WrapperLC>
                           <Label $center>Tamanho</Label>
                           <Campos placeholder="Tamanhos"></Campos>
                           <Error $absolute='90%'>sim</Error>
                        </WrapperLC>
                        <WrapperLC>
                           <Label $center>Quantidade</Label>
                           <Campos placeholder="Quantidade"></Campos>
                           <Error $absolute='90%'>sim</Error>
                        </WrapperLC>
                     </CardTQ>
                     <CardTQ>
                        <Add type='button'>+</Add>
                     </CardTQ>
                  </SScrollCard>
               </Card>
               <Card>
               </Card>
            </ScrollCard>
            <Confirmar type='button' onClick={()=>(handleSubmit(onSubimit)())} style={{ height: "1.5rem" }}>
               Confirmar
            </Confirmar>
         </Formulario>
      </ModalAdd>
   );
}
