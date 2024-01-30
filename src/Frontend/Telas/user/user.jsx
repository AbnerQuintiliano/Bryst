import React, { useState } from "react";
import styled from "styled-components";
import MainTela from "../../components/MainTela";
import * as V from "../../components/_variaveis";
import Tabela from "./components/Tabela";
import CreatModal from "./components/CreatModal"
import Msg from "../../components/Mensagem"
import { useModal, useMensage , HandleLogin } from "../../hooks/MyHooks";

export const CPesquisa = styled(V.Pesquisa)`
    @media (max-width: 450px) {
        width: 100%;
    }
`

const Menssage = styled.span`
    color: ${({theme}) => (theme.black.Letra) };
    font-size: 2.0rem;
    font-weight: bolder;
    position: relative;
    top: 50%;
    transform: translate( 0, -50%);
`

export const BtnCreate = styled(V.BtnTitulo)`
    width: 8rem;
    margin: 0 0 0 1%;
    @media (max-width: 600px) {
        align-self: flex-end;
        position: absolute;
    }
`

export default function User(){
    const {Modal , openModal , closeModal} = useModal()
    const {HowMsg, handleMsg} = useMensage(false)

    const [PesquisaValue, setPesquisaValue] = useState('')
    const handlePesquisaValue = (e) => {
        setPesquisaValue(e.target.value)
    }

    const Office = HandleLogin(sessionStorage.getItem("token"))
    if(Office !== "Administrador"){
        return(
            <MainTela User="true">
                <Menssage>Você não tem permissão para acessar os usuários.</Menssage>
            </MainTela>
        )
    }

    return(
        <MainTela User="true">
                <V.Wrapper>
                    <V.Top $Justify='space-between'>
                        <V.BtnTitulo>Cadastro</V.BtnTitulo>
                        <CPesquisa placeholder="Pesquisar" onChange={handlePesquisaValue}></CPesquisa>
                        <BtnCreate $click onClick={openModal}>+</BtnCreate>
                    </V.Top>
                    <CreatModal isOpen={Modal} onClose={closeModal} Notification={handleMsg}></CreatModal>
                    <V.SScrollCard height='auto' $HeightCel='auto'>
                        <Tabela CreateModal={Modal} HowMsgAdd={HowMsg} Pesquisa={PesquisaValue}/>
                    </V.SScrollCard>
                    {HowMsg && <Msg message={"Usuário criado com sucesso!"}/>}
                </V.Wrapper>
        </MainTela>
    )

}