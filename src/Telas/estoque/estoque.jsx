import React, { useState } from "react";
import MainTela from "../../components/MainTela";
import { BtnTitulo } from "../../components/_variaveis";
import { SWrapper , Produto, Pesquisa , SScroll, Dados , Titulo , Top, Btn , Add, ModalAdd, WrapperBtn, Excluir, Alterar, WrapperDados, Campos, Formulario } from "./_Style";
import roupa from "../../img/sim.jpeg"
import ButtonSelector from "./components/Buttom";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Estoque(){
    const [atualModal , setModal] = useState(false);

    const AbrirModal = () => setModal(true);
    const FecharModal = () => setModal(false);

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

    return(
        <MainTela Estoque="true">
            <SWrapper>
                <Top>
                    <BtnTitulo>Estoque</BtnTitulo>
                    <Pesquisa type="search" placeholder="Pesquisar" id="teste" enterKeyHint="search"></Pesquisa>
                </Top>
                <SScroll>
                    <Produto>
                        <Add onClick={AbrirModal}>Adicionar</Add>
                        <ModalAdd
                          isOpen={atualModal}
                          onRequestClose={FecharModal}
                          style={{overlay: {backgroundColor: 'rgba(27, 30, 39, 0.8)'}}}
                        >
                            <Formulario>
                                <div>
                                    <Campos placeholder="Id do Produto"></Campos>
                                    <Campos placeholder="Marca"></Campos>
                                </div>
                                <div>
                                    <Campos placeholder="Valor Unitario"></Campos>
                                    <Campos placeholder="Tipo"></Campos>
                                </div>
                                <img src={image} />
                                <Campos img="true" type="file" id="image" accept="image/*" onChange={handleImageUpload}></Campos>
                                <Campos placeholder="Quantidade"></Campos>
                                <Campos placeholder="Tamanhos"></Campos>
                                <Campos placeholder="Cores"></Campos>
                                <Alterar style={{height: '1.5rem'}}>Confirmar</Alterar>
                            </Formulario>

                        </ModalAdd>

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
                        
                        <img src={roupa}/>

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
                            <Dados> <ButtonSelector/> </Dados>
                        </div>
                        <div>
                            <Titulo>Cores</Titulo>
                            <Dados><ButtonSelector/></Dados>
                        </div>
                        <WrapperBtn>
                            <Excluir>Excluir</Excluir><Alterar>Alterar</Alterar>
                        </WrapperBtn>
                    </Produto>
                    <Produto>
                        {/* <WrapperDados>
                            <div>
                                <Titulo>Marca</Titulo>
                                <Dados>Nike Falso meo</Dados>
                            </div>
                            <div>
                                <Titulo>Marca</Titulo>
                                <Dados>Nike Falso meo</Dados>
                            </div>
                        </WrapperDados> */}
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
                        
                            <img src={roupa}/>
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
                                <Dados> <ButtonSelector/> </Dados>
                            </div>
                            <div>
                                <Titulo>Cores</Titulo>
                                <Dados><ButtonSelector/></Dados>
                            </div>
                            <WrapperBtn>
                                <Excluir>Excluir</Excluir><Alterar>Alterar</Alterar>
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
    )

}