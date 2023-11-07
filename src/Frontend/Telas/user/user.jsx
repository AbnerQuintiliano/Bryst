import React from "react";
import styled from "styled-components";
import MainTela from "../../components/MainTela";
import * as V from "../../components/_variaveis";
import Tabela from "./components/Tabela";
import CreatModal from "./components/CreatModal"
import Msg from "../../components/Mensagem"
import { useModal } from "../../hooks/useModal";
import { useMensage } from "../../hooks/useMensage";

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


    return(
        <MainTela User="true">
                <V.Wrapper>
                    <V.Top $Justify='space-between'>
                        <V.BtnTitulo>Cadastro</V.BtnTitulo>
                        <CPesquisa placeholder="Pesquisar"></CPesquisa>
                        <BtnCreate $click onClick={openModal}>+</BtnCreate>
                    </V.Top>
                    <CreatModal isOpen={Modal} onClose={closeModal} handleMsg={handleMsg}></CreatModal>
                    {HowMsg && <Msg message={"Usuário criado com sucesso!"}/>}
                    <V.SScrollCard height='auto' $HeightCel='auto'>
                        <Tabela CreateModal={Modal}/>
                    </V.SScrollCard>
                </V.Wrapper>
        </MainTela>
    )

}