import React from "react";
import {EWrapper , WrapperProdutos , MaisInfo } from "./_estoque";
import * as V from '../../../../components/_variaveis'
import img from "../../../../img/sim.jpeg"


export default function Estoque() {
    return(
        <EWrapper $MinWidth={'49%'}>
            <V.BtnTitulo>Falta no Estoque</V.BtnTitulo>
            <V.SScrollCard height='100%' $HeightCel='100%'>
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
                <WrapperProdutos/>
                <WrapperProdutos/>
                <WrapperProdutos/>
            </V.SScrollCard>
        </EWrapper>
    )
};