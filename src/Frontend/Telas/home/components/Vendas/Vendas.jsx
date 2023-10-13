import React, { useRef } from "react";
import {  ScrollVendas ,Conteudo, Header , Card, VWrapper, Total} from "./_Vendas";
import FormsModalVendas from "./ModalAdd";
import { useModal } from "../../../../hooks/useModal";
import roupa from "../../../../img/sim.jpeg";
import { SScrollCard } from "./_Vendas";
import { BtnTitulo , Add} from "../../../../components/_variaveis";
import {BtnAlterar, BtnExcluir}  from './buttons.jsx';
import Msg from "../../../../components/Mensagem";
import { useMensage } from "../../../../hooks/useMensage";
import { useHover } from "../../../../hooks/useHover";


export default function Vendas() {
    
    const elementHover = useRef(false);

    const {HowHover, EnterHover, ExitHover} = useHover();
    const {Modal, openModal , closeModal} = useModal();
    const {HowMsg, handleMsg} = useMensage();
    const {HowMsg: HowMsgAlt, handleMsg: handleMsgAlt} = useMensage();
    const {HowMsg: HowMsgDel, handleMsg: handleMsgDel} = useMensage();
    const handleComplete = (handle) => {return(handle(),ExitHover())}


    return (
        <VWrapper>
                <BtnTitulo>Vendas</BtnTitulo>
            <ScrollVendas>
                <Conteudo>
                    <Add onClick={openModal}>Adicionar</Add>
                    <FormsModalVendas isOpen={Modal} onClose={closeModal} Notification={handleMsg}/>
                    {HowMsg && <Msg message={"Venda realizada com sucesso!"}/>}
                </Conteudo>
                <Conteudo>
                    <Header>
                        <div num="">001</div>
                        <div>
                            <data>18/08/2023</data>
                            <time>12:35</time>
                        </div>
                        <div>
                            <data>18/08/2023</data>
                            <time>M:Abner</time>
                        </div>
                        <div>
                            <data>Autor</data>
                            <time>Crisp</time>
                        </div>
                    </Header>
                    <SScrollCard $HeightCel='55vh'>
                        <Card>
                            <div>Id Prod: 223</div>
                            <img src={roupa} alt=""/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa} alt=""/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa} alt=""/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa} alt=""/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                    </SScrollCard>
                    <Total key="2" ref={elementHover} onMouseEnter={EnterHover} onMouseLeave={ExitHover}>
                        {HowHover && <>
                            <BtnAlterar Complete={()=>{return(handleComplete(handleMsgAlt))}}/>
                            <BtnExcluir Complete={()=>{return(handleComplete(handleMsgDel))}}/>
                        </>}
                        {!HowHover && <><div>Total : 100.89R$</div> <div>Forma de pagamento :Pix</div></>}
                    </Total>
                </Conteudo>
                {HowMsgAlt && <Msg message={"Venda alterada com sucesso!"}/>}
                {HowMsgDel && <Msg message={"Venda excluida com sucesso!"}/>}
                <Conteudo/>
            </ScrollVendas>
    </VWrapper>
    )
}