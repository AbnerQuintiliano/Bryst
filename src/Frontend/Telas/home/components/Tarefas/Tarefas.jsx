import React , {useState} from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { BtnTitulo , ModalStyles ,StyleCampo , Label , Add , Error} from "../../../../components/_variaveis";
import Msg from "../../../../components/Mensagem"
import { Conteudo, WrapperConteudo , TWrapper} from "./_Tarefas";

const ModalAddTarefa = styled(ModalStyles)`
  height: 25vh;
  width: max(50% , 300px);
`

const Campos = styled.input`
  ${StyleCampo};
  background-color: ${props => props.theme.black.deFundo};
`
const WrapperLC = styled.div `
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:5px;
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

Modal.setAppElement('#root');
export default function Tarefas() {
  const { register, handleSubmit , formState:{errors} } = useForm(); 
  const onSubmit=(data) => {
    console.log(data)
    closeModal();
    handleMsg();
    const dataG = {...data , User:HowIsMsg}
    console.log(dataG)
  }

  const[Modal , setModal] = useState(false);
  const openModal = () => {setModal(true)};
  const closeModal = () => {setModal(false)};

  const [HowIsMsg, setMsg] = useState(false);
  const handleMsg = () => {
    setMsg(true)
    setTimeout(() => {
      setMsg(false)
    },3000)
  }
  return(
      <TWrapper>
          <div>
              <BtnTitulo >Tarefas</BtnTitulo>
              <BtnTitulo possivel="" onClick={openModal}>+</BtnTitulo>
              <ModalAddTarefa
                  isOpen={Modal}
                  onRequestClose={closeModal}
                  style={{overlay:{backgroundColor: 'rgba(27, 30, 39, 0.8)',backdropFilter: 'blur(10px)'}}}
              >
                  <WrapperLC>
                      <Label>Coloque a Tarefa</Label>
                      <Campos err={errors?.Tarefa} {...register('Tarefa',{required: true , maxLength:30})} autoComplete="off"></Campos>
                      {errors?.Tarefa?.type === 'required' && <Error>Necessário preencher o campo</Error>}
                      {errors?.Tarefa?.type === 'maxLength' && <Error>Muitas caracteres, o maximo e 30.</Error>}
                  </WrapperLC>
                  <Confirmar onClick={() => handleSubmit(onSubmit)()}>Criar tarefa</Confirmar>
              </ModalAddTarefa>
          </div>
      <WrapperConteudo>
              <Conteudo>Limpar Banheiro Masc</Conteudo>
              <Conteudo>Retirar roupas dos Provadores</Conteudo>
              <Conteudo>Limpar vidros</Conteudo>
              <Conteudo>Trocar notas do caixa</Conteudo>
              <Conteudo>Tirar roupas reservadas</Conteudo>
              <Conteudo>Troca das roupas de verão pelas de inverno</Conteudo>
              <Conteudo>Trocar Lampada</Conteudo>
              <Conteudo>Troca roupa do manequin</Conteudo>
              <Conteudo>proxima semana irá chegar novos produtos</Conteudo>
              <Conteudo>colocar produtos no sistema</Conteudo>
      </WrapperConteudo>
      {HowIsMsg && <Msg message={'Tarefa criada com sucesso!'}/> }
      </TWrapper>
  )
}