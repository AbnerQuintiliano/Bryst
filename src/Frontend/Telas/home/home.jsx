import React from "react";
import * as S from "../../components/_variaveis";
import MainTela from "../../components/MainTela";
import Vendas from "./components/Vendas/Vendas";
import Tarefas from "./components/Tarefas/Tarefas";
import Estoque from "./components/estoque/estoque";
import { HandleLogin } from "../../hooks/MyHooks";
import { ContextModalProvider } from './components/ContextModal'
// import { ThemeProvider } from "styled-components"; ainda nao utilizei

export default function Home(){
   const token = sessionStorage.getItem('token')
   const user = sessionStorage.getItem('userName')

   HandleLogin(token)

   return(
   <ContextModalProvider>
      <MainTela Home="true">
         <h1>
            hey Sir. {user}
         </h1>
         <Vendas/>
         <S._ContainerItens $HeightMin='30%'>
            <Tarefas/>
            <Estoque/>
         </S._ContainerItens>
      </MainTela>
   </ContextModalProvider> 
   )

}