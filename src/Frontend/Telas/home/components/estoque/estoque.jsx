import React from "react";
import Modal from 'react-modal';
import {EWrapper , WrapperProdutos , MaisInfo } from "./_estoque";
import { BtnTitulo } from '../../../../components/_variaveis'
import img from "../../../../img/sim.jpeg"
import { SScrollCard } from "../Vendas/_Vendas";

Modal.setAppElement('#root')

export default function Estoque() {
    return(
        <EWrapper>
            <BtnTitulo>Falta no Estoque</BtnTitulo>
            <SScrollCard $HeightCel='100%'>
                <WrapperProdutos>
                    <MaisInfo>Moletom</MaisInfo>
                    <div>Id:223</div>
                    <img src={img} alt=""/>
                    <div>Cor: Azul</div>
                    <div>Tam:G</div>
                    <div red="">3 Un</div>
                    <MaisInfo>Sim</MaisInfo>
                    <MaisInfo>Sim</MaisInfo>
                </WrapperProdutos>
                <WrapperProdutos>
                    <MaisInfo>Moletom</MaisInfo>
                    <div>Id:223</div>
                    <img src={img} alt=""/>
                    <div>Cor: Azul</div>
                    <div>Tam:G</div>
                    <div red="">3 Un</div>
                    <MaisInfo>Sim</MaisInfo>
                    <MaisInfo>Sim</MaisInfo>
                </WrapperProdutos>
                <WrapperProdutos>
                    <MaisInfo>Moletom</MaisInfo>
                    <div>Id:223</div>
                    <img src={img} alt=""/>
                    <div>Cor: Azul</div>
                    <div>Tam:G</div>
                    <div red="">3 Un</div>
                    <MaisInfo>Sim</MaisInfo>
                    <MaisInfo>Sim</MaisInfo>
                </WrapperProdutos>
                <WrapperProdutos>
                    <MaisInfo>Moletom</MaisInfo>
                    <div>Id:223</div>
                    <img src={img} alt=""/>
                    <div>Cor: Azul</div>
                    <div>Tam:G</div>
                    <div red="">3 Un</div>
                    <MaisInfo>Sim</MaisInfo>
                    <MaisInfo>Sim</MaisInfo>
                </WrapperProdutos>
            </SScrollCard>
        </EWrapper>
    )
};