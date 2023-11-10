import React, { useRef, useState } from "react";
import styled from "styled-components";
import MainTela from "../../components/MainTela";
import * as V from "../../components/_variaveis";
import Tabela from "./components/Tabela";
import CreatModal from "./components/CreatModal"
import Msg from "../../components/Mensagem"
import { useModal, useMensage } from "../../hooks/MyHooks";

export const CPesquisa = styled(V.Pesquisa)`
    @media (max-width: 450px) {
        width: 100%;
    }
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
    const {HowMsg, handleMsg} = useMensage()

    const [PesquisaValue, setPesquisaValue] = useState('')
    const inputRef = useRef();
    const handlePesquisaValue = (e) => {
        setPesquisaValue(e.target.value)
    }

    return(
        <MainTela User="true">
                <V.Wrapper>
                    <V.Top $Justify='space-between'>
                        <V.BtnTitulo>Cadastro</V.BtnTitulo>
                        <CPesquisa placeholder="Pesquisar" onChange={handlePesquisaValue} ref={inputRef}></CPesquisa>
                        <BtnCreate $click onClick={openModal}>+</BtnCreate>
                    </V.Top>
                    <CreatModal isOpen={Modal} onClose={closeModal} Notification={handleMsg}></CreatModal>
                    {HowMsg && <Msg message={"Usuário criado com sucesso!"}/>}
                    <V.SScrollCard height='auto' $HeightCel='auto'>
                        <Tabela CreateModal={Modal} Pesquisa={PesquisaValue}/>
                    </V.SScrollCard>
                </V.Wrapper>
        </MainTela>
    )

}