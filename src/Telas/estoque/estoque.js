import React from "react";
import "../styles/styles.css"
import NavLateral from "../../components/NavLateral";
import { _Main ,_ContainerTela } from "../../components/_variaveis";


export default function Estoque(){

    return(
        <_Main>
            <NavLateral Estoque="true"/>
            <_ContainerTela>
                
            </_ContainerTela>
       </_Main>
    )

}