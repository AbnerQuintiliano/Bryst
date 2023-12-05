import React from "react"
import styled, { css } from "styled-components";
import {ReactComponent as IcoDel} from '../../../../img/delete.svg';
import DeleteModal from "../../../../components/DeleteModal";
import { useHover, useModal } from "../../../../hooks/MyHooks";
import * as V from '../../../../components/_variaveis'
import { useContextModal } from "../ContextModal";

const Delete = styled.button`
    width: 30px;
    fill: ${V.theme.black.Letra};
    position: absolute;
    animation:${($hover) => ($hover === 'true' && css` ${V.JoinIn} .5s ease-in;`)};
    opacity: ${({ $hover }) => ($hover === 'false' && 0 )};
    transition: .5s ;
    background: linear-gradient(to right, transparent -30%, ${props => props.theme.black.fundoClaro} 40%);
    
    top: 51%;
    right: 0px;
    transform: translate(-50% , -50%);
    &:hover{
        fill:${V.theme.color.vermelho};
    }
`

export const Conteudo = ({children, $Msg, $_id}) => {

    const {attValueModais} = useContextModal()
    const { HowHover , EnterHover , ExitHover } = useHover();
    const {Modal, openModal , closeModal} = useModal();

    return(
        <>
            <V.Card $Width='100%' $Height='auto' $WMidia='0'$HMidia='0'
                $Background={V.theme.black.fundoClaro} style={{padding:'0.4rem 0.75rem', whiteSpace: 'nowrap' , fontSize:'clamp(80% , 3vw , 1rem)'}} 
                onMouseEnter={EnterHover} onMouseLeave={ExitHover} 
            >
                {children}
                <Delete $hover={`${HowHover}`} onClick={() => {openModal(); attValueModais()}}>
                    <IcoDel style={{width:'clamp(16px , 3vw , 1.5rem)'}}/>
                </Delete>
            </V.Card>

            <DeleteModal isOpen={Modal} onClose={() => {closeModal(); attValueModais()}} Notification={$Msg} Url={`http://localhost:3001/api/Tarefa/Deletando/${$_id}`}>
                Deseja excluir a tarefa?
            </DeleteModal>
        </>
    )
}