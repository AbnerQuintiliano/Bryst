import React from "react";
import Tarefas from "./components/Tarefas/Tarefas";
import * as S from "../../components/_variaveis";
import MainTela from "../../components/MainTela";
import Vendas from "./components/Vendas/Vendas";
// import { ThemeProvider } from "styled-components"; ainda nao utilizei 

export default function Home(){
    return(
    <MainTela Home="true">
        <h1>
            hey Sir. Crisp
        </h1>
        
        <Vendas/>

        <S._ContainerItens>
            <Tarefas/>
                <S._Wrapper a=""> {/*esse a e provisorio*/}
                <div className="estoque_btn">
                    Estoque
                </div>
                <div className="inner_estoque">
                    <div className="estoque_show">Seg, 31</div>
                    <div className="estoque_show">7:30 - 12:00</div>
                    <div className="estoque_show">1:10 - 5:00</div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show">Ter, 1</div>
                    <div className="estoque_show">7:00 - 11:00</div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                    <div className="estoque_show"></div>
                </div>
                </S._Wrapper>
            </S._ContainerItens>
    </MainTela>
    )

}