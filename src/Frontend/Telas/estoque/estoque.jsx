import React, { useEffect, useRef, useState } from "react";
import MainTela from "../../components/MainTela";
import * as V from "../../components/_variaveis";
import { Produto, Dados, LabelEstoque, WrapperBtn, WrapperDados} from "./_Style";
import FormsModalEstoque from "./components/FormularioAdd";
import roupa from "../../img/sim.jpeg";
import ButtonSelector from "./components/Buttom";
import Modal from "react-modal";
import Msg from "../../components/Mensagem";
import DeleteModal from "../../components/DeleteModal";
import { useModal, useMensage } from "../../hooks/MyHooks";
import axios from "axios";

Modal.setAppElement("#root");

export default function Estoque() {
   const { Modal:ModalAdd, openModal:openModalAdd, closeModal:closeModalAdd } = useModal();
   const { Modal:ModalDel, openModal:OpenModalDel, closeModal:CloseModalDel } = useModal();
   const { Modal:ModalAlt, openModal:OpenModalAlt, closeModal:CloseModalAlt } = useModal();
   const {HowMsg:HowMsgDel, handleMsg:handleMsgDel} = useMensage()
   const {HowMsg:HowMsgCreate, handleMsg:handleMsgCreate} = useMensage()
   
   const [ProdutoData, setProdutoData] = useState([])
   const [Load, setLoad] = useState(true)
   useEffect(() => {
      const Controller = new AbortController();
      axios.get('http://localhost:3001/api/Produto', {signal:Controller.signal})
      .then((response) => {
         setProdutoData(response.data);
         HowMsgDel === null && HowMsgCreate === null && setLoad(false)
      })
      .catch((error) => {
         console.error('Erro ao buscar dados da API:', error);
         HowMsgDel === null && HowMsgCreate === null && setLoad(false)
      });
      return () => {
         console.log('cancelou...')
         setLoad(true) //remover dependendo
         Controller.abort();
      }
   },[HowMsgDel,HowMsgCreate])

   const PesquisaRef = useRef();
   const [Pesquisa , setPesquisa] = useState('')
   return (
   <MainTela Estoque="true">
      <V.Wrapper $Height="100%">
         <V.Top>
            <V.BtnTitulo>Estoque</V.BtnTitulo>
            <V.Pesquisa type="search" placeholder="Pesquisar" ref={PesquisaRef} 
               enterKeyHint="search" autoComplete="off" 
               onChange={()=>setPesquisa(PesquisaRef.current.value)}
            />
         </V.Top>
         <V.ScrollCard height="100%" $HeightCel="100%">
            <Produto>
               <V.Button onClick={openModalAdd}> Adicionar </V.Button>
            </Produto>
            {Load && <Produto>loading</Produto>}
               {ProdutoData.length !== 0 && ProdutoData.filter((Data) => (Data.nome.toLowerCase().includes(Pesquisa.toLowerCase()))).map((data)=>(
                  <Produto key={data._id}>
                     <WrapperDados>
                        <div>
                           <LabelEstoque>Marca</LabelEstoque>
                           <Dados>{data.marca}</Dados>
                        </div>
                        <div>
                           <LabelEstoque>Nome</LabelEstoque>
                           <Dados>{data.nome}</Dados>
                        </div>
                     </WrapperDados>
                     <WrapperDados>
                        <div>
                           <LabelEstoque>Tipo</LabelEstoque>
                           <Dados>{data.tipo}</Dados>
                        </div>
                        <div>
                           <LabelEstoque>Valor Un</LabelEstoque>
                           <Dados>{data.valor}R$</Dados>
                        </div>
                     </WrapperDados>
                     <img src={roupa} alt="" />
                     <div>
                        <LabelEstoque>Cores</LabelEstoque>
                        <Dados>
                           <ButtonSelector Data={data.Cores}/>
                        </Dados>
                     </div>
                     <div>
                        <LabelEstoque>Tamanhos</LabelEstoque>
                        <Dados>
                           <ButtonSelector/>
                        </Dados>
                     </div>
                     <div>
                        <LabelEstoque>Quantidade</LabelEstoque>
                        <Dados>2</Dados>
                     </div>
                     <WrapperBtn>
                        <V.Button $Width='40%' $Height='clamp(1.25rem, 2vw , 1.75rem )'
                           $Font='1rem' $Color={V.theme.color.verde}
                           onClick={OpenModalAlt}
                        >
                           Alterar
                        </V.Button>
                        <V.Button $Width='40%' $Height='clamp(1.25rem, 2vw , 1.75rem )' 
                           $Font='1rem' $Color={V.theme.color.vermelho} 
                           onClick={OpenModalDel}
                        >
                           Excluir
                        </V.Button>
                     </WrapperBtn>
                  </Produto>
               ))}
               {/* <div>
                  <LabelEstoque>Id produto</LabelEstoque>
                  <Dados>233</Dados>
               </div>
               <WrapperDados>
                  <div>
                     <LabelEstoque>Marca</LabelEstoque>
                     <Dados>Nike</Dados>
                  </div>
                  <div>
                     <LabelEstoque>Nome</LabelEstoque>
                     <Dados>Balce N20</Dados>
                  </div>
               </WrapperDados>
               <WrapperDados>
                  <div>
                     <LabelEstoque>Tipo</LabelEstoque>
                     <Dados>Moletom</Dados>
                  </div>
                  <div>
                     <LabelEstoque>Valor Un</LabelEstoque>
                     <Dados>129.90 R$</Dados>
                  </div>
               </WrapperDados>
               <img src={roupa} alt="" />
               <div>
                  <LabelEstoque>Tamanhos</LabelEstoque>
                  <Dados>
                     <ButtonSelector />
                  </Dados>
               </div>
               <div>
                  <LabelEstoque>Cores</LabelEstoque>
                  <Dados>
                     <ButtonSelector />
                  </Dados>
               </div>
               <div>
                  <LabelEstoque>Quantidade</LabelEstoque>
                  <Dados>2</Dados>
               </div>
               <WrapperBtn>
                  <V.Button $Width='40%' $Height='clamp(1.25rem, 2vw , 1.75rem )'
                     $Font='1rem' $Color={V.theme.color.verde}
                     onClick={OpenModalAlt}
                  >
                     Alterar
                  </V.Button>
                  <V.Button $Width='40%' $Height='clamp(1.25rem, 2vw , 1.75rem )' 
                     $Font='1rem' $Color={V.theme.color.vermelho} 
                     onClick={OpenModalDel}
                  >
                     Excluir
                  </V.Button>
               </WrapperBtn> */}
         </V.ScrollCard>
      </V.Wrapper>

      {/*modal*/} <FormsModalEstoque isOpen={ModalAdd} onClose={closeModalAdd} Complete={handleMsgCreate}/>
      <DeleteModal isOpen={ModalDel} onClose={CloseModalDel} Notification={handleMsgDel}>Deseja excluir produto?</DeleteModal>
      {HowMsgDel && <Msg message='Produto excluido com sucesso!'/>}
      {HowMsgCreate && <Msg message='Produto criado com sucesso!'/>}


   </MainTela>
   );
}
