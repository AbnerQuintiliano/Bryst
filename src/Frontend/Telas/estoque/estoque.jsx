import React from "react";
import MainTela from "../../components/MainTela";
import { BtnTitulo, Add } from "../../components/_variaveis";
import {SWrapper, Produto, Pesquisa, Dados, LabelEstoque, Top, WrapperBtn, Excluir, Alterar, WrapperDados} from "./_Style";
import FormsModalEstoque from "./components/FormularioAdd";
import roupa from "../../img/sim.jpeg";
import ButtonSelector from "./components/Buttom";
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";
import { ScrollCard } from "../home/components/Vendas/_Vendas";

Modal.setAppElement("#root");

export default function Estoque() {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <MainTela Estoque="true">
      <SWrapper>
        <Top>
          <BtnTitulo>Estoque</BtnTitulo>
          <Pesquisa type="search" placeholder="Pesquisar" id="teste" enterKeyHint="search"></Pesquisa>
        </Top>
        <ScrollCard height='100%' $HeightCel='100%'>
          <Produto>
            <Add onClick={openModal}> Adicionar </Add>
            <FormsModalEstoque
              isOpen={Modal}
              onClose={closeModal}
            ></FormsModalEstoque>
          </Produto>
          <Produto>
            <div>
              <LabelEstoque>Id produto</LabelEstoque>
              <Dados>233</Dados>
            </div>

            <div>
              <LabelEstoque>Marca</LabelEstoque>
              <Dados>Nike Falso meo</Dados>
            </div>

            <img src={roupa} alt="" />

            <div>
              <LabelEstoque>Tipo</LabelEstoque>
              <Dados>Moletom</Dados>
            </div>
            <div>
              <LabelEstoque>Valor Unitario</LabelEstoque>
              <Dados>129.90 R$</Dados>
            </div>
            <div>
              <LabelEstoque>Quantidade</LabelEstoque>
              <Dados>2</Dados>
            </div>
            <div>
              <LabelEstoque>Tamanhos</LabelEstoque>
              <Dados>
                {" "}
                <ButtonSelector />{" "}
              </Dados>
            </div>
            <div>
              <LabelEstoque>Cores</LabelEstoque>
              <Dados>
                <ButtonSelector />
              </Dados>
            </div>
            <WrapperBtn>
              <Excluir>Excluir</Excluir>
              <Alterar>Alterar</Alterar>
            </WrapperBtn>
          </Produto>

          <Produto>
            <WrapperDados>
              <div>
                <LabelEstoque>Id produto</LabelEstoque>
                <Dados>233</Dados>
              </div>
              <div>
                <LabelEstoque>Marca</LabelEstoque>
                <Dados>Nike</Dados>
              </div>
            </WrapperDados>

            <img src={roupa} alt="" />
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
            <div>
              <LabelEstoque>Quantidade</LabelEstoque>
              <Dados>2</Dados>
            </div>
            <div>
              <LabelEstoque>Tamanhos</LabelEstoque>
              <Dados>
                {" "}
                <ButtonSelector />{" "}
              </Dados>
            </div>
            <div>
              <LabelEstoque>Cores</LabelEstoque>
              <Dados>
                <ButtonSelector />
              </Dados>
            </div>
            <WrapperBtn>
              <Excluir>Excluir</Excluir>
              <Alterar>Alterar</Alterar>
            </WrapperBtn>
          </Produto>
          <Produto></Produto>
          <Produto></Produto>
          <Produto></Produto>
          <Produto></Produto>
          <Produto></Produto>
          <Produto></Produto>
        </ScrollCard>
      </SWrapper>
    </MainTela>
  );
}
