import React, { useRef } from "react";
import FormsModalVendas from "./ModalAdd";
import roupa from "../../../../img/sim.jpeg";
import * as V from "../../../../components/_variaveis";
import {BtnAlterar, BtnExcluir}  from './buttons.jsx';
import Msg from "../../../../components/Mensagem";
import { useHover ,useMensage , useModal} from "../../../../hooks/MyHooks";
import { useContextModal } from "../ContextModal.jsx";


export default function Vendas() {
    
    const {attValueModais} = useContextModal()
    const elementHover = useRef(false);    

    const {HowHover, EnterHover, ExitHover} = useHover();
    const {Modal, openModal , closeModal} = useModal();
    const {HowMsg, handleMsg} = useMensage();
    const {HowMsg: HowMsgAlt, handleMsg: handleMsgAlt} = useMensage();
    const {HowMsg: HowMsgDel, handleMsg: handleMsgDel} = useMensage();
    const handleComplete = (handle) =>((handle(),ExitHover()))


    return (
        <V.Wrapper>
                <V.BtnTitulo>Vendas</V.BtnTitulo>
            <V.ScrollCard height='100%' $HeightCel='100%'>
                <V.Card $Width='40%' $WMidia='80%' $Background={V.theme.black.fundoClaro}>
                    <V.Button  $Height='2rem' onClick={()=>((openModal(), attValueModais()))}>Adicionar</V.Button>
                    {Modal && <FormsModalVendas isOpen={Modal} onClose={() => ((closeModal(), attValueModais()))} Notification={handleMsg}/>}
                    {HowMsg && <Msg message={"Venda realizada com sucesso!"}/>}
                </V.Card>
                <V.Card $Width='40%' $WMidia='80%' $Background={V.theme.black.fundoClaro} style={{padding:'0.4rem 0.5rem'}}>
                    <V.Header>
                        <div>
                            <data>18/08/2023</data>
                            <time>12:35</time>
                        </div>
                        <div>
                            <data>Autor</data>
                            <time>Crisp</time>
                        </div>
                    </V.Header>
                    <V.SScrollCard $HeightCel='60vh'>
                        <V.Card $WMidia='80%' >
                            <div>Nome: AI</div>
                            <img src={roupa} alt=""/> 
                            <div>Valor Un: 129.90</div>
                            <div>Tamanho : 2</div>
                            <div>Cor : G</div>
                            <div>Quantidade : Azul</div>
                        </V.Card>
                        <V.Card $WMidia='80%'>
                            <img src={roupa} alt=""/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </V.Card>
                        <V.Card $WMidia='80%'>
                            <img src={roupa} alt=""/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </V.Card>
                        <V.Card $WMidia='80%'>
                            <img src={roupa} alt=""/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </V.Card>
                    </V.SScrollCard>
                    <V.Total key="2" ref={elementHover} onMouseEnter={EnterHover} onMouseLeave={ExitHover}>
                        {HowHover && <>
                            <BtnAlterar ExitHover={ExitHover} Complete={()=>(handleComplete(handleMsgAlt))}/>
                            <BtnExcluir ExitHover={ExitHover} Complete={()=>(handleComplete(handleMsgDel))}/>
                        </>}
                        {!HowHover && <><div>Total:100.89R$</div> <div>Pagamento:C.D</div></>}
                    </V.Total>
                </V.Card>
                {HowMsgAlt && <Msg message={"Venda alterada com sucesso!"}/>}
                {HowMsgDel && <Msg message={"Venda excluida com sucesso!"}/>}
            </V.ScrollCard>
    </V.Wrapper>
    )
}