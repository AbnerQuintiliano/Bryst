import React from "react";
import MainTela from "../../components/MainTela";
import * as V from "../../components/_variaveis";
import { Produto, Dados, LabelEstoque, WrapperBtn, WrapperDados} from "./_Style";
import FormsModalEstoque from "./components/FormularioAdd";
import roupa from "../../img/sim.jpeg";
import ButtonSelector from "./components/Buttom";
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";

Modal.setAppElement("#root");

export default function Estoque() {
   const { Modal, openModal, closeModal } = useModal();

   return (
   <MainTela Estoque="true">
      <V.Wrapper $Height="100%">
         <V.Top>
            <V.BtnTitulo>Estoque</V.BtnTitulo>
            <V.Pesquisa type="search" placeholder="Pesquisar" id="teste" enterKeyHint="search" autoComplete="off"/>
         </V.Top>
         <V.ScrollCard height="100%" $HeightCel="100%">
            <Produto>
               <V.Add onClick={openModal}> Adicionar </V.Add>
               <FormsModalEstoque isOpen={Modal} onClose={closeModal}/>
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
                  <V.Button $Width='45%' $Height='1.5rem' $Font='1rem' $Color={V.theme.color.vermelho}>Excluir</V.Button>
                  <V.Button $Width='45%' $Height='1.5rem' $Font='1rem' $Color={V.theme.color.verde}>Alterar</V.Button>
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
   </MainTela>
   );
}
