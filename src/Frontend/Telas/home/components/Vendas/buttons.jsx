import React from "react";
import * as V from '../../../../components/_variaveis'
import DeleteModal from '../../../../components/DeleteModal';
import ModalUpdate from "./ModalAdd"
import { useModal } from "../../../../hooks/useModal";
import { useContextModal } from "../ContextModal";

export const BtnExcluir = ({Complete ,ExitHover}) => {
    const {Modal , openModal , closeModal} = useModal();
    const {attValueModais} = useContextModal();

    return(
        <>
            <V.Button $Transition $Color={V.theme.color.vermelho}
                $Width='clamp(100px, 8vw, 25%)' $Height='70%' $Font='1rem'
                onClick={()=> ((openModal(), attValueModais()))}
            >
                Excluir
            </V.Button>
            <DeleteModal isOpen={Modal} onClose={()=>((closeModal(), ExitHover(), attValueModais()))} Notification={Complete}>
                Deseja excluir a compra?
            </DeleteModal>
        </>
    )
} 

export const BtnAlterar = ({Complete, ExitHover}) => {
    const {Modal, openModal, closeModal} = useModal();
    const {attValueModais} = useContextModal();

    return(
        <>
            <V.Button $Transition $Color={V.theme.color.verde}
                $Width='clamp(100px, 8vw, 25%)' $Height='70%' $Font='1rem' 
                onClick={() => ((openModal(), attValueModais()))}
            >
                Alterar
            </V.Button>
            <ModalUpdate isOpen={Modal} onClose={() => ((closeModal(), ExitHover(), attValueModais()))} Notification={Complete}/>
        </>
    )
} 