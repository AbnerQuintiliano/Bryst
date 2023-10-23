import React from "react";
import * as V from '../../../../components/_variaveis'
import DeleteModal from '../../../../components/DeleteModal';
import ModalUpdate from "./ModalAdd"
import { useModal } from "../../../../hooks/useModal";

export const BtnExcluir = ({Complete}) => {
    const {Modal , openModal , closeModal} = useModal();
    return(
        <>
            <V.Button $Color={V.theme.color.vermelho}
                $Width='25%' $Height='70%' 
                $Font='1rem' $Transition 
                onClick={openModal}
                >
                    Excluir
                </V.Button>
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
            <V.Button $Color={V.theme.color.verde}
                $Width='25%' $Height='70%' 
                $Font='1rem' $Transition
                onClick={openModal}
            >
                Alterar
            </V.Button>
            <ModalUpdate isOpen={Modal} onClose={closeModal} Notification={Complete}/>
        </>
    )
} 