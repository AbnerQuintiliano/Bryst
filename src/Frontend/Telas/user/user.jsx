import React from "react";
import MainTela from "../../components/MainTela";
import * as S from "./_style"
import { BtnTitulo} from "../../components/_variaveis";
import Tabela from "./components/Tabela";
import CreatModal from "./components/CreatModal"
import Msg from "../../components/Mensagem"
import { SScrollCard } from "../home/components/Vendas/_Vendas";
import { useModal } from "../../hooks/useModal";
import { useMensage } from "../../hooks/useMensage";

export default function User(){

    const {Modal , openModal , closeModal} = useModal()
    const {HowMsg, handleMsg} = useMensage()


    return(
        <MainTela User="true">
                <S.CWrapper>
                    <S.HeaderUser>
                        <BtnTitulo>Cadastro</BtnTitulo>
                        <S.CPesquisa placeholder="Pesquisar"></S.CPesquisa>
                        <S.BtnCreate $click onClick={openModal}>+</S.BtnCreate>
                        <CreatModal isOpen={Modal} onClose={closeModal} handleMsg={handleMsg}></CreatModal>
                        {HowMsg && <Msg message={"Usuário criado com sucesso!"}/>}
                    </S.HeaderUser>
                    <SScrollCard height='auto'>
                        <Tabela/>
                    </SScrollCard>
                </S.CWrapper>
        </MainTela>
    )

}