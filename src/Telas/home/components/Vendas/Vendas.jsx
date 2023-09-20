import React, { useRef, useState } from "react"
import {  ScrollVendas ,Conteudo, Header , Card, VWrapper, Total} from "./_Vendas";
import roupa from "../../../../img/sim.jpeg"
import { SScrollCard } from "./_Vendas"
import { BtnTitulo } from "../../../../components/_variaveis";
import  Teste  from './Teste.jsx'

export default function Vendas() {

    const [Hover , setHover] = useState(false);
    const elementHover = useRef(false)
    console.log(elementHover);
    const SHover = () => setHover(true);
    const NHover = () => setHover(false);

    return (
        <VWrapper>
                <BtnTitulo>Vendas</BtnTitulo>
            <ScrollVendas>
                <Conteudo>
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
                            <div>Id Prod: 223</div>
                            <img src={roupa}/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa}/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa}/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa}/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                    </SScrollCard>
                    <Total key="1" ref={elementHover} onMouseEnter={SHover} onMouseLeave={NHover}>
                        {Hover ? <Teste/> :<> <div>Total : 10.89R$</div><div>Forma de pagamento : Pix</div> </>}
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
                            <img src={roupa}/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa}/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa}/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa}/> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                    </SScrollCard>
                    <Total key="2" ref={elementHover} onMouseEnter={SHover} onMouseLeave={NHover}>
                        {Hover && elementHover ?<Teste/>:<><div>Total : 100.89R$</div> <div>Forma de pagamento :Pix</div></>}
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