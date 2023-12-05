import { useForm } from 'react-hook-form';
import * as V from '../../../../components/_variaveis'
import axios from 'axios';
import { useState } from 'react';

export const ModalAdd = ({isOpen , closeModal, Notification}) =>{
   const { register, handleSubmit, formState:{errors} } = useForm();
   const [ErroApi , setErroApi] = useState(false)
   const onSubmit=(data) => {
      axios.post('http://localhost:3001/api/Tarefa/Create', data)
      .then((response) => {
         console.log(response);
         Notification();
         closeModal()
         setErroApi(false)
      })
      .catch((error) => {
         console.log(error.response.data)
         closeModal()
         setErroApi(true)
      })
   }

   return(
      <V.ModalStyles $Width='max(50% , 300px)'
      $Height='25vh'
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{overlay:{backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
      >
      <V.WrapperLC>
         <V.Label>Escreva a Tarefa</V.Label>
         <V.Campos $Background={V.theme.black.deFundo} $Err={errors?.conteudo ||  ErroApi} {...register('conteudo',{required: true , maxLength:35})} autoComplete="off"></V.Campos>
         {errors?.conteudo?.type === 'required' && <V.Error>Necessário preencher o campo!</V.Error>}
         {ErroApi && <V.Error>Houve erro ao tentar registrar a tarefa!</V.Error>}
         {errors?.conteudo?.type === 'maxLength' && <V.Error>Muitas caracteres, o máximo e de 35!</V.Error>}
      </V.WrapperLC>
      <V.Button $Width='max(35%,150px)' $Height='2rem' $Color={V.theme.color.verde} onClick={handleSubmit(onSubmit)}>Criar tarefa</V.Button>
      </V.ModalStyles>
   )
}