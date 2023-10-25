import React, { useRef } from "react";
import FormsModalVendas from "./ModalAdd";
import roupa from "../../../../img/sim.jpeg";
import * as V from "../../../../components/_variaveis";
import {BtnAlterar, BtnExcluir}  from './buttons.jsx';
import Msg from "../../../../components/Mensagem";
import { useHover ,useMensage , useModal} from "../../../../hooks/MyHooks";


export default function Vendas() {
    
    const elementHover = useRef(false);

    const {HowHover, EnterHover, ExitHover} = useHover();
    const {Modal, openModal , closeModal} = useModal();
    const {HowMsg, handleMsg} = useMensage();
    const {HowMsg: HowMsgAlt, handleMsg: handleMsgAlt} = useMensage();
    const {HowMsg: HowMsgDel, handleMsg: handleMsgDel} = useMensage();
    const handleComplete = (handle) =>((handle(),ExitHover()))


    return (
        // <V.Wrapper style={{flexGrow: '2',alignSelf: 'baseline'}}>
        <V.Wrapper>
                <V.BtnTitulo>Vendas</V.BtnTitulo>
            <V.ScrollCard height='100%' $HeightCel='100%'>
                <V.Card $WMidia='85%' $Background={V.theme.black.fundoClaro}>
                    <V.Add onClick={openModal}>Adicionar</V.Add>
                    <FormsModalVendas isOpen={Modal} onClose={closeModal} Notification={handleMsg}/>
                    {HowMsg && <Msg message={"Venda realizada com sucesso!"}/>}
                </V.Card>
                <V.Card $WMidia='85%' $Background={V.theme.black.fundoClaro} style={{padding:'0.4rem 0.5rem'}}>
                    <V.Header>
                        <div num="">001</div>
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
                        <V.Card>
                            <div>Id Prod: 223</div>
                            <img src={roupa} alt=""/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Cor : Azul</div>
                        </V.Card>
                        <V.Card>
                            <img src={roupa} alt=""/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </V.Card>
                        <V.Card>
                            <img src={roupa} alt=""/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </V.Card>
                        <V.Card>
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
                            <BtnAlterar Complete={()=>(handleComplete(handleMsgAlt))}/>
                            <BtnExcluir Complete={()=>(handleComplete(handleMsgDel))}/>
                        </>}
                        {!HowHover && <><div>Total : 100.89R$</div> <div>pagamento : Pix</div></>}
                    </V.Total>
                </V.Card>
                {HowMsgAlt && <Msg message={"Venda alterada com sucesso!"}/>}
                {HowMsgDel && <Msg message={"Venda excluida com sucesso!"}/>}
            </V.ScrollCard>
    </V.Wrapper>
    )
}