import React from "react";
import styled from "styled-components";
import { Excluir , Alterar} from "../../../estoque/_Style";

const Exclui = styled(Excluir)`
width: 25%;
height: clamp(0.75rem  , 2vw ,  1.5rem);
transition: 1s;
`
const Altera = styled(Alterar)`
width: 25%;
height: clamp(0.75rem  , 2vw ,  1.5rem);
transition: 1s;
`

export default function Buttons() {
    return(
        <>
            <Exclui>Excluir</Exclui>
            <Altera> Alterar</Altera>
        </>
    )
}