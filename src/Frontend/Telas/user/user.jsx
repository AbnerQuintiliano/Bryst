import React , {useState}from "react";
import MainTela from "../../components/MainTela";
import * as S from "./_style"
import { BtnTitulo} from "../../components/_variaveis";
import Tabela from "./components/Tabela";
import CreatModal from "./components/CreatModal"
import Msg from "../../components/Mensagem"

export default function User(){

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
      setShowModal(true);
    };
    const closeModal = () => {
      setShowModal(false);
    };

    const [HowIsMsg, setMsg] = useState(false);
    const handleMsg = () => {
        setMsg(true)
        setTimeout(() => {
            setMsg(false)
        }, 3000)
    }

    return(
        <MainTela User="true">
                <S.CWrapper>
                    <S.HeaderUser>
                        <BtnTitulo>Cadastro</BtnTitulo>
                        <S.CPesquisa placeholder="Pesquisar"></S.CPesquisa>
                        <S.BtnCreate possivel="" onClick={openModal}>+</S.BtnCreate>
                        <CreatModal isOpen={showModal} onClose={closeModal} handleMsg={handleMsg}></CreatModal>
                        {HowIsMsg && <Msg message={"Usuário criado com sucesso!"}/>}
                    </S.HeaderUser>
                    <S.Scrol>
                        <Tabela></Tabela>
                    </S.Scrol>
                </S.CWrapper>
        </MainTela>
    )

}