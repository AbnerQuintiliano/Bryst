import React, { useRef, useState } from "react"
import {  ScrollVendas ,Conteudo, Header , Card, VWrapper, Total} from "./_Vendas";
import FormsModalVendas from "./ModalAdd";
import roupa from "../../../../img/sim.jpeg"
import { SScrollCard } from "./_Vendas"
import { BtnTitulo , Add} from "../../../../components/_variaveis";
import  Buttons  from './buttons.jsx'
import Msg from "../../../../components/Mensagem"

export default function Vendas() {

    const [Hover , setHover] = useState(false);
    const elementHover = useRef(false);
    const SHover = () => setHover(true);
    const NHover = () => setHover(false);

    const[Modal , setModal] = useState(false);
    const openModal = () => {
        setModal(true);
      };
      const closeModal = () => {
        setModal(false);
      };

    const [whoMsg , setMsg] = useState(false);
    const handleMsg = () => {
        setMsg(true)
        setTimeout(() => {
            setMsg(false)
        }, 3000)
    }
    return (
        <VWrapper>
                <BtnTitulo>Vendas</BtnTitulo>
            <ScrollVendas>
                <Conteudo>
                    <Add onClick={openModal}>Adicionar</Add>
                    <FormsModalVendas isOpen={Modal} onClose={closeModal} Notification={handleMsg}/>
                    {whoMsg && <Msg message={"Venda realizada com sucesso!"}/>}
                </Conteudo>
                <Conteudo>
                    <Header>
                        <div num="">001</div>
                        <div>
                            <data>18/08/2023</data>
                            <time>12:35</time>
                        </div>
                        <div>
                            <data>Autor</data>
                            <time>Crisp</time>
                        </div>
                    </Header>
                    <SScrollCard>
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
                    <Total key="1" ref={elementHover} onMouseEnter={SHover} onMouseLeave={NHover}>
                        {Hover ? <Buttons/> :<> <div>Total : 10.89R$</div><div>Forma de pagamento : Pix</div> </>}
                    </Total>
                </Conteudo>
                <Conteudo>
                <Header>
                        <div num="">001</div>
                        <div>
                            <data>18/08/2023</data>
                            <time>12:35</time>
                        </div>
                    </Header>
                    <SScrollCard>
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
                        <Card>
                            <img src={roupa} alt=""/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                    </SScrollCard>
                    <Total key="2" ref={elementHover} onMouseEnter={SHover} onMouseLeave={NHover}>
                        {Hover && elementHover ?<Buttons/>:<><div>Total : 100.89R$</div> <div>Forma de pagamento :Pix</div></>}
                    </Total>
                </Conteudo>
                <Conteudo>
                    
                </Conteudo>
                <Conteudo>
                    
                </Conteudo>
                <Conteudo>
                    
                </Conteudo>
                <Conteudo>
                    
                </Conteudo>
            </ScrollVendas>
    </VWrapper>
    )
}