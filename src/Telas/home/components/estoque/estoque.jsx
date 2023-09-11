import React, { useState } from "react";
import Modal from 'react-modal';
import {EWrapper , ScrollConteudo, WrapperProdutos , MaisInfo, ModalStyles } from "./_estoque";
import { BtnTitulo } from '../../../../components/_variaveis'
import img from "../../../../img/sim.jpeg"

Modal.setAppElement('#root')

export default function Estoque() {
    const [setModal, setOpenModal] = useState(false)

    const handleDoubleClick = () => {
        setOpenModal(true);
    };
    const closeModal = () => {
        setOpenModal(false);
    };

    return(
        <EWrapper>
            <BtnTitulo>Falta no Estoque</BtnTitulo>
            <ScrollConteudo>
                <WrapperProdutos onDoubleClick={handleDoubleClick}>
                    <ModalStyles
                        isOpen={setModal}
                        onRequestClose={closeModal}
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(27, 30, 39, 0.8)'
                            }
                          }}
                    >
                        <div>Moletom</div>
                        <div>Id:223</div>
                        <img src={img}/>
                        <div>Cor: Azul</div>
                        <div>Tam:G</div>
                        <div red="">3 Un</div>
                        <div>Sim</div>
                        <div>Sim</div>
                    </ModalStyles>

                    <MaisInfo>Moletom</MaisInfo>
                    <div>Id:223</div>
                    <img src={img}/>
                    <div>Cor: Azul</div>
                    <div>Tam:G</div>
                    <div red="">3 Un</div>
                    <MaisInfo>Sim</MaisInfo>
                    <MaisInfo>Sim</MaisInfo>
                </WrapperProdutos>

                <WrapperProdutos>
                    <MaisInfo>Moletom</MaisInfo>
                    <div>Id:223</div>
                    <img src={img}/>
                    <div>Cor: Azul</div>
                    <div>Tam:G</div>
                    <div red="">3 Un</div>
                    <MaisInfo>Sim</MaisInfo>
                    <MaisInfo>Sim</MaisInfo>
                </WrapperProdutos>
                <WrapperProdutos>
                    <MaisInfo>Moletom</MaisInfo>
                    <div>Id:223</div>
                    <img src={img}/>
                    <div>Cor: Azul</div>
                    <div>Tam:G</div>
                    <div red="">3 Un</div>
                    <MaisInfo>Sim</MaisInfo>
                    <MaisInfo>Sim</MaisInfo>
                </WrapperProdutos>
                <WrapperProdutos>
                    <MaisInfo>Moletom</MaisInfo>
                    <div>Id:223</div>
                    <img src={img}/>
                    <div>Cor: Azul</div>
                    <div>Tam:G</div>
                    <div red="">3 Un</div>
                    <MaisInfo>Sim</MaisInfo>
                    <MaisInfo>Sim</MaisInfo>
                </WrapperProdutos>
                <WrapperProdutos>
                    <MaisInfo>Moletom</MaisInfo>
                    <div>Id:223</div>
                    <img src={img}/>
                    <div>Cor: Azul</div>
                    <div>Tam:G</div>
                    <div red="">3 Un</div>
                    <MaisInfo>Sim</MaisInfo>
                    <MaisInfo>Sim</MaisInfo>
                </WrapperProdutos>
            </ScrollConteudo>
        </EWrapper>
    )
};