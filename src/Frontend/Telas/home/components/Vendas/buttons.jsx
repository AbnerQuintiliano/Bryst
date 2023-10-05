import React, { useState } from "react";
import styled from "styled-components";
import { Excluir , Alterar} from "../../../estoque/_Style";
import DeleteModal from '../../../../components/DeleteModal';
import ModalUpdate from "./ModalAdd"
import Msg from '../../../../components/Mensagem'

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
    const [HowIsDeleteModal , setDeleteModal] = useState(false);
    const ModalDeleteClose = () => {setDeleteModal(false);};
    const ModalDeleteOpen = () => {setDeleteModal(true)};
    const [HowIsDeleteMsg , setDeleteMsg] = useState(false)
    const handleDeleteMsg = () => {
        setDeleteMsg(true);
        setTimeout( () => {setDeleteMsg(false)} , 3000);
    }

    const [HowIsUpdateModal , setUpdateModal] = useState(false);
    const ModalUpdateClose = () => {setUpdateModal(false);};
    const ModalUpdateOpen = () => {setUpdateModal(true)};
    const [HowIsUpdateMsg , setUpdateMsg] = useState(false)
    const handleUpdateMsg = () => {
        setUpdateMsg(true);
        setTimeout( () => {setUpdateMsg(false)} , 3000);
    }
    return(
        <>
            <Exclui onClick={ModalDeleteOpen}>Excluir</Exclui>
            <DeleteModal isOpen={HowIsDeleteModal} onClose={ModalDeleteClose}  Notification={handleDeleteMsg}>
                Deseja excluir a compra?
            </DeleteModal>
            {HowIsDeleteMsg && <Msg message={"Venda excluida com sucesso!"}/>}
            <Altera onClick={ModalUpdateOpen}>Alterar</Altera>
            <ModalUpdate isOpen={HowIsUpdateModal} onClose={ModalUpdateClose} Notification={handleUpdateMsg}/>
            {HowIsUpdateMsg && <Msg message={"Venda alterada com sucesso!"}/>}
        </>
    )
}