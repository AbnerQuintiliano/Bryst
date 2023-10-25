import React from "react";
import * as V from '../../../../components/_variaveis'
import img from "../../../../img/sim.jpeg"


export default function Estoque() {
    return(
        <V.Wrapper $MinWidth={'49%'}>
            <V.BtnTitulo>Falta no Estoque</V.BtnTitulo>
            <V.SScrollCard height='100%' $HeightCel='100%'>
                <V.Card $CardFaltaEstoque $Width='clamp(70px , 15vw , 180px)' $Background={V.theme.black.fundoClaro}>
                    <V.MaisInfo>Moletom</V.MaisInfo>
                    <div>Id:223</div>
                    <img src={img} alt=""/>
                    <div>Cor: Azul</div>
                    <div>Tam:G</div>
                    <div style={{color: V.theme.color.vermelho}}>3 Un</div>
                    <V.MaisInfo>Sim</V.MaisInfo>
                    <V.MaisInfo>Sim</V.MaisInfo>
                </V.Card>
                <V.Card $CardFaltaEstoque $Width='clamp(70px , 15vw , 180px)' $Background={V.theme.black.fundoClaro}>
                    <V.MaisInfo>Moletom</V.MaisInfo>
                    <div>Id:223</div>
                    <img src={img} alt=""/>
                    <div>Cor: Azul</div>
                    <div>Tam:G</div>
                    <div style={{color: V.theme.color.vermelho}}>3 Un</div>
                    <V.MaisInfo>Sim</V.MaisInfo>
                    <V.MaisInfo>Sim</V.MaisInfo>
                </V.Card>
                <V.Card $CardFaltaEstoque $Width='clamp(70px , 15vw , 180px)' $Background={V.theme.black.fundoClaro}>
                    <V.MaisInfo>Moletom</V.MaisInfo>
                    <div>Id:223</div>
                    <img src={img} alt=""/>
                    <div>Cor: Azul</div>
                    <div>Tam:G</div>
                    <div style={{color: V.theme.color.vermelho}}>3 Un</div>
                    <V.MaisInfo>Sim</V.MaisInfo>
                    <V.MaisInfo>Sim</V.MaisInfo>
                </V.Card>
                <V.Card $CardFaltaEstoque $Width='clamp(70px , 15vw , 180px)' $Background={V.theme.black.fundoClaro}>
                    <V.MaisInfo>Moletom</V.MaisInfo>
                    <div>Id:223</div>
                    <img src={img} alt=""/>
                    <div>Cor: Azul</div>
                    <div>Tam:G</div>
                    <div style={{color: V.theme.color.vermelho}}>3 Un</div>
                    <V.MaisInfo>Sim</V.MaisInfo>
                    <V.MaisInfo>Sim</V.MaisInfo>
                </V.Card>
            </V.SScrollCard>
        </V.Wrapper>
    )
};