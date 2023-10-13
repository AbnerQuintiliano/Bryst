import React from "react"
import * as T from "./_Tarefas"
import styled, { css } from "styled-components";
import {ReactComponent as IcoDel} from '../../../../img/delete.svg';
import DeleteModal from "../../../../components/DeleteModal";
import Msg from '../../../../components/Mensagem'
import { useModal } from "../../../../hooks/useModal";
import { useMensage } from "../../../../hooks/useMensage";
import { useHover } from "../../../../hooks/useHover";
import { JoinIn } from "../Vendas/_Vendas";


const Delete = styled.button`
    width: 30px;
    fill: ${props => props.theme.black.Letra};
    position: absolute;
    animation:${props => props.$hover === 'true' && css` ${JoinIn} .5s ease-in;`};
    opacity: ${({ $hover }) => ($hover === 'false' && 0 )};
    transition:${({ $hover }) => ($hover === 'false' && '.5s' )};
    transition: .6s ;
    background: linear-gradient(to right, transparent -30%, ${props => props.theme.black.fundoClaro} 40%);
    

    top: 51%;
    right: 0px;
    transform: translate(-50% , -50%);
    &:hover{
        fill:${props => props.theme.color.vermelho};
    }
`

export const Conteudo = (props) => {

    const { HowHover , EnterHover , ExitHover } = useHover();
    const {Modal, openModal , closeModal} = useModal();
    const {HowMsg , handleMsg} = useMensage();

    return(
        <>
            <T.Conteudo onMouseEnter={EnterHover} onMouseLeave={ExitHover}>
                {props.children}
                <Delete $hover={`${HowHover}`} onClick={openModal}>
                    <IcoDel style={{width:'clamp(16px , 3vw , 1.5rem)'}}/>
                </Delete>
            </T.Conteudo>

            <DeleteModal isOpen={Modal} onClose={closeModal} Notification={handleMsg} >
                Deseja excluir a tarefa?
            </DeleteModal>

            {HowMsg && <Msg message={'Tarefa deletada com sucesso!'}/>}
        </>
    )
}