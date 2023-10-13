import React from "react";
import styled from "styled-components";
import { Excluir , Alterar} from "../../../estoque/_Style";
import { JoinIn } from "./_Vendas";
import DeleteModal from '../../../../components/DeleteModal';
import ModalUpdate from "./ModalAdd"
import { useModal } from "../../../../hooks/useModal";

const Exclui = styled(Excluir)`
width: 25%;
height: clamp(0.75rem  , 2vw ,  1.5rem);
transition: 1s;
animation: ${JoinIn} 1s ease-in;
`
const Altera = styled(Alterar)`
width: 25%;
height: clamp(0.75rem  , 2vw ,  1.5rem);
transition: 1s;
animation: ${JoinIn} 1s ease-in;
`
export const BtnExcluir = ({Complete}) => {
    const {Modal , openModal , closeModal} = useModal();
    return(
        <>
            <Exclui onClick={openModal}>Excluir</Exclui>
            <DeleteModal isOpen={Modal} onClose={closeModal} Notification={Complete}>
                Deseja excluir a compra?
            </DeleteModal>
        </>
    )
} 

export const BtnAlterar = ({Complete}) => {
    const {Modal, openModal, closeModal} = useModal();
    return(
        <>
            <Altera onClick={openModal}>Alterar</Altera>
            <ModalUpdate isOpen={Modal} onClose={closeModal} Notification={Complete}/>
        </>
    )
} 