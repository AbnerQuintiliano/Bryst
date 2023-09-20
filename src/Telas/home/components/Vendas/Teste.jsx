import React from "react";
import styled from "styled-components";
import { Excluir , Alterar} from "../../../estoque/_Style";

const Exclui = styled(Excluir)`
width: 25%;
height: max( 1.5rem , 50%);
transition: 1s;
`
const Altera = styled(Alterar)`
width: 25%;
height: max( 1.5rem , 50%);
transition: 1s;
`

export default function Teste() {
    return(
        <>
            <Exclui>Excluir</Exclui>
            <Altera> Alterar</Altera>
        </>
    )
}