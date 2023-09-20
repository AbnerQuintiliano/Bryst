import React from "react";
import * as S from "../../components/_variaveis";
import MainTela from "../../components/MainTela";
import Vendas from "./components/Vendas/Vendas";
import Tarefas from "./components/Tarefas/Tarefas";
import Estoque from "./components/estoque/estoque";
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

            <Estoque/>
            
        </S._ContainerItens>
    </MainTela>
    )

}