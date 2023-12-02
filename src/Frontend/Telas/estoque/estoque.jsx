import React, { useEffect, useRef, useState } from "react";
import MainTela from "../../components/MainTela";
import * as V from "../../components/_variaveis";
import { Produto, Dados, LabelEstoque, WrapperBtn, WrapperDados} from "./_Style";
import FormsModalEstoque from "./components/FormularioAdd";
import FormsModalEdit from "./components/FormEdit";
import ButtonSelection from "./components/Buttom";
import Modal from "react-modal";
import Msg from "../../components/Mensagem";
import DeleteModal from "../../components/DeleteModal";
import { useModal, useMensage } from "../../hooks/MyHooks";
import axios from "axios";

Modal.setAppElement("#root");

export default function Estoque() {
   const { Modal:ModalAdd, openModal:openModalAdd, closeModal:closeModalAdd } = useModal();
   const { Modal:ModalEdit, openModal:openModalEdit, closeModal:closeModalEdit } = useModal();
   const { Modal:ModalDel, openModal:OpenModalDel, closeModal:CloseModalDel } = useModal();
   const {HowMsg:HowMsgCreate, handleMsg:handleMsgCreate} = useMensage()
   const {HowMsg:HowMsgEdit, handleMsg:handleMsgEdit} = useMensage()
   const {HowMsg:HowMsgEditErro, handleMsg:handleMsgEditErro} = useMensage()
   const {HowMsg:HowMsgDel, handleMsg:handleMsgDel} = useMensage()
   const [DataModif , setDataModif] = useState() 
   const [Primeiro , setPrimeiro] = useState(true) 

   
   const [ProdutoData, setProdutoData] = useState([]) 
   useEffect(() => {
      if(HowMsgDel || HowMsgCreate || HowMsgEdit || Primeiro === true){
         const Controller = new AbortController();
         console.log('foi')
         axios.get('http://localhost:3001/api/Produto', {signal:Controller.signal})
         .then((response) => {
            setProdutoData(response.data);
         })
         .catch((error) => {
            console.error('Erro ao buscar dados da API:', error);
         })
         .finally(()=>{
            (!Controller.signal.aborted && Primeiro === true) && setPrimeiro(false)
         })
         return () => {
            console.log('cancelou...')
            Controller.abort();
         }
      }
   },[HowMsgDel,HowMsgCreate, HowMsgEdit, Primeiro])
   console.log('render')

   const PesquisaRef = useRef();
   const [Pesquisa , setPesquisa] = useState('')
   const [DelID , setDelID] = useState('')
   return (
   <MainTela Estoque="true">
      <V.Wrapper $Height="100%">
         <V.Top>
            <V.BtnTitulo>Estoque</V.BtnTitulo>
            <V.Pesquisa type="search" placeholder="Pesquisar" ref={PesquisaRef} 
               enterKeyHint="search" autoComplete="off" 
               onChange={()=>setPesquisa(PesquisaRef.current.value)}
            />
         </V.Top>
         <V.ScrollCard height="100%" $HeightCel="100%">
            <Produto>
               <V.Button onClick={openModalAdd}> Adicionar </V.Button>
            </Produto>
               {ProdutoData.filter((Data) => (Data.nome.toLowerCase().includes(Pesquisa.toLowerCase()))).map((data ,i)=>(
                  <Produto key={data._id}>
                     <WrapperDados>
                        <div>
                           <LabelEstoque>Marca</LabelEstoque>
                           <Dados>{data.marca}</Dados>
                        </div>
                        <div>
                           <LabelEstoque>Nome</LabelEstoque>
                           <Dados>{data.nome}</Dados>
                        </div>
                     </WrapperDados>
                     <WrapperDados>
                        <div>
                           <LabelEstoque>Tipo</LabelEstoque>
                           <Dados>{data.tipo}</Dados>
                        </div>
                        <div>
                           <LabelEstoque>Valor Un</LabelEstoque>
                           <Dados>{data.valor}R$</Dados>
                        </div>
                     </WrapperDados>
                     <img src={data.Img} alt="" />
                     <ButtonSelection Data={data.Cores}/>
                     <WrapperBtn>
                        <V.Button $Width='40%' $Height='clamp(1.25rem, 2vw , 1.75rem )'
                           $Font='1rem' $Color={V.theme.color.verde}
                           onClick={() => {openModalEdit(); setDataModif(data)}} 
                        >
                           Alterar
                        </V.Button>
                        <V.Button $Width='40%' $Height='clamp(1.25rem, 2vw , 1.75rem )' 
                           $Font='1rem' $Color={V.theme.color.vermelho} 
                           onClick={() => ((setDelID(data._id),OpenModalDel()))}
                        >
                           Excluir
                        </V.Button>
                     </WrapperBtn>
                  </Produto>
               ))}
         </V.ScrollCard>
      </V.Wrapper>

      {/* modal */}
      <DeleteModal isOpen={ModalDel} onClose={CloseModalDel} Notification={handleMsgDel} Url={`http://localhost:3001/api/Produto/Deletando/${DelID}`}>Deseja excluir produto?</DeleteModal>
      <FormsModalEstoque isOpen={ModalAdd} onClose={closeModalAdd} Complete={handleMsgCreate}/>
      {ModalEdit && <FormsModalEdit isOpen={ModalEdit} onClose={closeModalEdit} Notification={handleMsgEdit} NotificationErro={handleMsgEditErro} Data={DataModif}/>}
      {HowMsgCreate && <Msg message='Produto criado com sucesso!'/>}
      {HowMsgEdit && <Msg message='Produto modififcado com sucesso!'/>}
      {HowMsgEditErro && <Msg erro message='Não Houve mudança no produto!'/>}
      {HowMsgDel && <Msg message='Produto excluido com sucesso!'/>}


   </MainTela>
   );
}
