import {  ScrollVendas ,Conteudo, Header , ScrollCard , Card, VWrapper, Total} from "./_Vendas";
import roupa from "../../../../img/sim.jpeg"
import { SScrollCard } from "./_Vendas"
import {  Caralho } from "./_Vendas"

export default function Vendas() {
    return (
        <VWrapper>
                <button>Vendas</button>
            <ScrollVendas>
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
                            <div>Tipo: Moletom</div> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa}/>
                            <div>Tipo: Moletom</div> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa}/>
                            <div>Tipo: Moletom</div> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa}/>
                            <div>Tipo: Moletom</div> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                    </SScrollCard>
                    <Total>
                        <div>Total : 100.89R$</div>
                        <div>Forma de pagamento :Pix</div>
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
                            <div>Tipo: Moletom</div> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa}/>
                            <div>Tipo: Moletom</div> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa}/>
                            <div>Tipo: Moletom</div> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                        <Card>
                            <img src={roupa}/>
                            <div>Tipo: Moletom</div> 
                            <div>Valor UN : 129.90</div>
                            <div>Qts : 2</div>
                            <div>Tam : G</div>
                            <div>Id Prod: 223</div>
                            <div>Cor : Azul</div>
                        </Card>
                    </SScrollCard>
                    <Total>
                        <div>Total : 100.89R$</div>
                        <div>Forma de pagamento :Pix</div>
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