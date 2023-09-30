import React , {useState}from "react";
import MainTela from "../../components/MainTela";
import * as S from "./_style"
import { BtnTitulo} from "../../components/_variaveis";
import Tabela from "./components/Tabela";
import CreatModal from "./components/CreatModal"

export default function User(){

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
      setShowModal(true);
    };
    const closeModal = () => {
      setShowModal(false);
    };

    return(
        <MainTela User="true">
                <S.CWrapper>
                    <S.HeaderUser>
                        <BtnTitulo>Cadastro</BtnTitulo>
                        <S.CPesquisa placeholder="Pesquisar"></S.CPesquisa>
                        <S.BtnCreate possivel="" onClick={openModal}>+</S.BtnCreate>
                        <CreatModal isOpen={showModal} onClose={closeModal}></CreatModal>
                    </S.HeaderUser>
                    <S.Scrol>
                        <Tabela></Tabela>
                    </S.Scrol>
                </S.CWrapper>
        </MainTela>
    )

}