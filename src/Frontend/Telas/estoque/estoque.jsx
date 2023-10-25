import React from "react";
import MainTela from "../../components/MainTela";
import * as V from "../../components/_variaveis";
import { Produto, Dados, LabelEstoque, WrapperBtn, WrapperDados} from "./_Style";
import FormsModalEstoque from "./components/FormularioAdd";
import roupa from "../../img/sim.jpeg";
import ButtonSelector from "./components/Buttom";
import Modal from "react-modal";
import Msg from "../../components/Mensagem";
import DeleteModal from "../../components/DeleteModal";
import { useModal, useMensage } from "../../hooks/MyHooks";

Modal.setAppElement("#root");

export default function Estoque() {
   const { Modal:ModalAdd, openModal:openModalAdd, closeModal:closeModalAdd } = useModal();
   const { Modal:ModalDel, openModal:OpenModalDel, closeModal:CloseModalDel } = useModal();
   const { Modal:ModalAlt, openModal:OpenModalAlt, closeModal:CloseModalAlt } = useModal();
   const {HowMsg:HowMsgDel, handleMsg:handleMsgDel} = useMensage()

   return (
   <MainTela Estoque="true">
      <V.Wrapper $Height="100%">
         <V.Top>
            <V.BtnTitulo>Estoque</V.BtnTitulo>
            <V.Pesquisa type="search" placeholder="Pesquisar" id="teste" enterKeyHint="search" autoComplete="off"/>
         </V.Top>
         <V.ScrollCard height="100%" $HeightCel="100%">
            <Produto>
               <V.Button onClick={openModalAdd}> Adicionar </V.Button>
               <FormsModalEstoque isOpen={ModalAdd} onClose={closeModalAdd}/>
            </Produto>
            <Produto>
               <div>
                  <LabelEstoque>Id produto</LabelEstoque>
                  <Dados>233</Dados>
               </div>
               <WrapperDados>
                  <div>
                     <LabelEstoque>Marca</LabelEstoque>
                     <Dados>Nike</Dados>
                  </div>
                  <div>
                     <LabelEstoque>Nome</LabelEstoque>
                     <Dados>Balce N20</Dados>
                  </div>
               </WrapperDados>
               <WrapperDados>
                  <div>
                     <LabelEstoque>Tipo</LabelEstoque>
                     <Dados>Moletom</Dados>
                  </div>
                  <div>
                     <LabelEstoque>Valor Un</LabelEstoque>
                     <Dados>129.90 R$</Dados>
                  </div>
               </WrapperDados>
               <img src={roupa} alt="" />
               <div>
                  <LabelEstoque>Tamanhos</LabelEstoque>
                  <Dados>
                     <ButtonSelector />
                  </Dados>
               </div>
               <div>
                  <LabelEstoque>Cores</LabelEstoque>
                  <Dados>
                     <ButtonSelector />
                  </Dados>
               </div>
               <div>
                  <LabelEstoque>Quantidade</LabelEstoque>
                  <Dados>2</Dados>
               </div>
               <WrapperBtn>
                  <V.Button $Width='45%' $Height='1.5rem'
                     $Font='1rem' $Color={V.theme.color.verde}
                     onClick={OpenModalAlt}
                  >
                     Alterar
                  </V.Button>
                  <V.Button $Width='45%' $Height='1.5rem' 
                     $Font='1rem' $Color={V.theme.color.vermelho} 
                     onClick={OpenModalDel}
                  >
                     Excluir
                  </V.Button>
               </WrapperBtn>
            </Produto>
            <Produto></Produto>
            <Produto></Produto>
            <Produto></Produto>
            <Produto></Produto>
            <Produto></Produto>
            <Produto></Produto>
         </V.ScrollCard>
      </V.Wrapper>

      <FormsModalEstoque isOpen={ModalAlt} onClose={CloseModalAlt}/>
      <DeleteModal isOpen={ModalDel} onClose={CloseModalDel} Notification={handleMsgDel}>Deseja excluir produto?</DeleteModal>
      {HowMsgDel && <Msg message='Produto excluido com sucesso!'/>}


   </MainTela>
   );
}
