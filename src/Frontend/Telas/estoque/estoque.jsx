import React from "react";
import MainTela from "../../components/MainTela";
import { BtnTitulo, Add } from "../../components/_variaveis";
import {SWrapper, Produto, Pesquisa, SScroll, Dados, Titulo, Top, WrapperBtn, Excluir, Alterar, WrapperDados} from "./_Style";
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
      <SWrapper>
        <Top>
          <BtnTitulo>Estoque</BtnTitulo>
          <Pesquisa type="search" placeholder="Pesquisar" id="teste" enterKeyHint="search"></Pesquisa>
        </Top>
        <SScroll>
          <Produto>
            <Add onClick={openModal}> Adicionar </Add>
            <FormsModalEstoque
              isOpen={Modal}
              onClose={closeModal}
            ></FormsModalEstoque>
          </Produto>
          <Produto>
            <div>
              <Titulo>Id produto</Titulo>
              <Dados>233</Dados>
            </div>

            <div>
              <Titulo>Marca</Titulo>
              <Dados>Nike Falso meo</Dados>
            </div>

            <img src={roupa} alt="" />

            <div>
              <Titulo>Tipo</Titulo>
              <Dados>Moletom</Dados>
            </div>
            <div>
              <Titulo>Valor Unitario</Titulo>
              <Dados>129.90 R$</Dados>
            </div>
            <div>
              <Titulo>Quantidade</Titulo>
              <Dados>2</Dados>
            </div>
            <div>
              <Titulo>Tamanhos</Titulo>
              <Dados>
                {" "}
                <ButtonSelector />{" "}
              </Dados>
            </div>
            <div>
              <Titulo>Cores</Titulo>
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
                <Titulo>Id produto</Titulo>
                <Dados>233</Dados>
              </div>
              <div>
                <Titulo>Marca</Titulo>
                <Dados>Nike</Dados>
              </div>
            </WrapperDados>

            <img src={roupa} alt="" />
            <WrapperDados>
              <div>
                <Titulo>Tipo</Titulo>
                <Dados>Moletom</Dados>
              </div>
              <div>
                <Titulo>Valor Un</Titulo>
                <Dados>129.90 R$</Dados>
              </div>
            </WrapperDados>
            <div>
              <Titulo>Quantidade</Titulo>
              <Dados>2</Dados>
            </div>
            <div>
              <Titulo>Tamanhos</Titulo>
              <Dados>
                {" "}
                <ButtonSelector />{" "}
              </Dados>
            </div>
            <div>
              <Titulo>Cores</Titulo>
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
        </SScroll>
      </SWrapper>
    </MainTela>
  );
}
