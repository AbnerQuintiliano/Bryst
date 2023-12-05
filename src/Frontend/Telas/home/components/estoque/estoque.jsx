import React, { useEffect, useState } from "react";
import * as V from '../../../../components/_variaveis'
import * as E from '../../../estoque/_Style'
import { useContextModal } from "../ContextModal";
import axios from "axios";
import { Swiper , SwiperSlide } from "swiper/react";
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

export default function Estoque() {

    const { Modais } = useContextModal();
    const [Data, setData] = useState()
    useEffect(() => {
        axios.get('http://localhost:3001/api/Produto/Faltando')
        .then((response) => {
            
            setData(response.data)
        })
        .catch(() => {
            console.log('erro')
        })
    },[setData])

    return(
        <V.Wrapper $MinWidth={'49%'} style={{position:'relative'}}>
            <V.BtnTitulo>Falta no Estoque</V.BtnTitulo>
            <V.BtnTitulo style={{position: "absolute", right:'1px'}}>5 ou menos</V.BtnTitulo>
            <V.SScrollCard height='100%' $HeightCel='100%'>
                {Data && Data.map((obj)=>(
                <V.Card _id={obj._id} $CardFaltaEstoque $Width='clamp(70px , 15vw , 180px)' $Background={V.theme.black.fundoClaro}>
                    <div style={{ display:"flex", width:'90%', alignItems:'center', position:"relative"}}>
                        <E.LabelEstoque $Special>Produto</E.LabelEstoque>
                        <E.Dados $Special>{obj.nome}</E.Dados>
                    </div>
                    <V.MaisInfo>
                        <E.LabelEstoque $Special>Marca</E.LabelEstoque>
                        <E.Dados $Special>{obj.marca}</E.Dados>
                    </V.MaisInfo>
                    <V.MaisInfo>
                        <E.LabelEstoque $Special>Tipo</E.LabelEstoque>
                        <E.Dados $Special>{obj.tipo}</E.Dados>
                    </V.MaisInfo>
                    <V.MaisInfo>
                        <E.LabelEstoque $Special>Valor</E.LabelEstoque>
                        <E.Dados $Special>{obj.valor}R$</E.Dados>
                    </V.MaisInfo>
                    <ButtonSelection key={obj._id} _id={obj._id} Data={obj.Cores} Modal={Modais}/>
                </V.Card>
                ))}
            </V.SScrollCard>
        </V.Wrapper>
    )
};


function ButtonSelection({Data , Modal}){
    const [selectedButtonColor, setSelectedButtonColor] = useState(0);
    const handleButtonColor = (buttonId) => {
        if(selectedButtonColor !== buttonId){
            setSelectedButtonColor(buttonId);
        }
    }

    const [selectedButtonTamanho, setSelectedButtonTamanho] = useState(0);
    const handleButtonTamanho = (buttonId) => {
        if(selectedButtonTamanho !== buttonId){
            setSelectedButtonTamanho(buttonId);
        }
    }
    
    return(
    <>
        <div style={{ display:"flex", width:'90%', alignItems:'center', position:"relative"}}>
            <E.LabelEstoque $Special>Cores</E.LabelEstoque>
            <E.Dados $Special>
                {!Modal && (<Swiper
                    scrollbar={{hide:true}}
                    modules={[Scrollbar]}
                    slidesPerView={Data.length >=3 ? 3 : 2}
                    centeredSlides={false || Data.length >=3 || Data.length ===  1 }
                >
                    {Data.map((button, i) => (
                        <SwiperSlide>
                            <E.BtnEscolha
                                key={button._id}
                                onClick={() => (handleButtonColor(i))}
                                style={{
                                    backgroundColor:  selectedButtonColor === i ? '#7688C9': 'unset',
                                }}
                            >
                                {button.Cor}
                            </E.BtnEscolha>
                        </SwiperSlide>
                    ))}
                </Swiper>)}
            </E.Dados>
        </div>
        <div style={{ display:"flex", width:'90%', alignItems:'center', position:"relative"}}>
            <E.LabelEstoque $Special>Tamanhos</E.LabelEstoque>
            <E.Dados $Special>
                {!Modal && (<Swiper
                    scrollbar={{hide:true}}
                    modules={[Scrollbar]}
                    slidesPerView={Data[selectedButtonColor].Tamanhos.length >=3 ? 3 : 2}
                    centeredSlides={false || Data[selectedButtonColor].Tamanhos.length >=3 || Data[selectedButtonColor].Tamanhos.length ===  1 }
                >
                    {Data[selectedButtonColor].Tamanhos.map((Tamanhos, i) => (
                        <SwiperSlide>
                            <E.BtnEscolha
                            key={Tamanhos._id}
                            onClick={() => (handleButtonTamanho(i))}
                            style={{
                                backgroundColor: '#7688C9',
                            }}
                            >
                            {Tamanhos.Tamanho}
                            </E.BtnEscolha>
                        </SwiperSlide>
                    ))}
                </Swiper>)}
            </E.Dados>
        </div>

    <V.MaisInfo>
        <E.LabelEstoque $Special>Quantidade</E.LabelEstoque>
        <E.Dados $Special>{(Data[selectedButtonColor].Tamanhos[selectedButtonTamanho].Quantidade)}</E.Dados>
    </V.MaisInfo>
    </>
)}