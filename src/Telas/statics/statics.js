import React from "react";
import "../styles/styles.css"
import blusa from "../../img/sim.jpeg";
import { _Main } from "../../components/_variaveis";
import MainTela from "../../components/MainTela";
export default function Home(){
    return(
        <MainTela Statics="true">
                <section className="container_produtos">
                    <div className="grid_titulo">
                        <title className="titulo_produtos">Produtos</title>
                        <input type="text" className="pesquisa_produtos" placeholder="Pesquisar" />
                    </div>
                    <section className="hover_produtos">
                        <div className="produto">
                            <div className="produto_conteudo">
                                <div>Tipo</div>
                                Moletom canguru
                            </div>
                            <div className="produto_conteudo">
                                <div>Marca</div>
                                nike
                            </div>
                            <img src={blusa}/>
                            <div className="produto_conteudo">
                            <div>Valor de venda</div>
                                295.90
                            </div> 
                            <div className="produto_conteudo">
                                <div>Valor de compra</div>
                                150.00
                                </div>
                            <div className="produto_conteudo" >
                                <div tamanhos="">Tamanhos</div>
                                <a>P</a>
                                <a>M</a>
                                <a>G</a>
                            </div>
                            <div className="produto_conteudo">
                                <div>Quantidade</div>
                                27
                                </div>
                            <div className="btns">
                                <div className="produto_btn_alterar">alterar</div>
                                <div className="produto_btn_excluir">excluir</div>
                            </div>
                            
                        </div>
                        <div className="produto">oi</div>
                        <div className="produto">oi</div>
                        <div className="produto">oi</div>
                        <div className="produto">oi</div>

                    </section>
                </section>
                <div className="container_statics">
                    <div className="null">sim2</div>
                    <div className="null">sim3</div>
                </div>
        </MainTela>
    )
}