import React, { useEffect, useState } from "react";
import * as V from "../../../components/_variaveis"
import axios from "axios";
import styled from "styled-components";
import { ReactComponent as IcoDel }from "../../../img/delete.svg";
import { ReactComponent as IcoEdit} from "../../../img/edit.svg";
import EditModal from "./EditModal"
import DeleteModal from "../../../components/DeleteModal"
import Msg from "../../../components/Mensagem"
import { useModal, useMensage } from "../../../hooks/MyHooks";

const Table = styled.table`
   width: 100%;
   background-color: ${props => props.theme.black.fundoClaro};
   border-collapse: collapse;
   border-radius: 20px;
   overflow: hidden;
   th{
      max-width: 250px;
      overflow-x: hidden;
      padding: .5rem;
      white-space: nowrap; 
   }
   tbody{
      td{
         max-width: 300px;
         white-space: nowrap; 
         text-align: center;
         border-top: 2px solid  ${props => props.theme.black.dasTabelas};
         padding: .5rem;
         &:has(div){
            padding: 0;
         }
      }
      tr{
         &:hover{
            background-color: ${props => props.theme.black.deFundo};
         }
         >:hover{
            color: ${props => props.theme.black.primaria};
         }
      }
   }
`
const Actions = styled.div`
   display: flex;
   justify-content: center;
   gap: 2rem;
   @media (max-width: 800px) {
      padding: 0 1rem ;
   }
`

const Delete = styled.div`
   height: 1.5rem;
   fill: ${props => props.theme.black.Letra};
   :hover{
      fill:${props => props.theme.color.vermelho};
   }
`;
const Edit = styled.div`
   height: 1.5rem;
   fill: ${props => props.theme.black.Letra};
   :hover{
      fill: ${props => props.theme.color.verde};
   }
`;

export default function Tabela({CreateModal ,Pesquisa}) {

   const {Modal:ModalEdit , openModal:openModalEdit , closeModal:closeModalEdit} = useModal();
   const {HowMsg:HowMsgEdit , handleMsg:handleMsgEdit} = useMensage();
   const {HowMsg:HowMsgEditErro , handleMsg:handleMsgEditErro} = useMensage();

   const {Modal:ModalDelete , openModal:openModalDelete , closeModal:closeModalDelete} = useModal();
   const {HowMsg:HowMsgDelete , handleMsg:handleMsgDelete} = useMensage();

   const [UsersData, setUsersData] = useState([]);

   useEffect (() => {
      const Controller = new AbortController();
      console.log('Atualizou...')
      axios.get('http://localhost:3001/api/User',{signal:Controller.signal})
      .then((response) => {
         setUsersData(response.data);
      })
      .catch((error) => {
         console.error('Erro ao buscar dados da API:', error);
      });
      return () => {
         console.log('cancelou...')
         Controller.abort();
      }
   }, [ModalEdit, CreateModal ,ModalDelete]);
   const [IdModal, setIdModal] = useState()

   return (
      <Table>
      <thead>
         <tr>
            <th>Usuário</th>
            <th>Nome do Usuário</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th>Ação</th>
         </tr>
      </thead>
      <tbody>
         {UsersData.filter((data) => data.user.toLowerCase().includes(Pesquisa.toLowerCase())).map((data) => (
            <tr key={data._id}>
               <td>
                  <V.SScrollCard $HeightCel='none' $HeightSB='0px' $Justify='center'>{data.user}</V.SScrollCard>  
               </td>
               <td>{data.userName}</td>
               <td>
                  <V.SScrollCard $HeightCel='none' $HeightSB='0px' $Justify='center'> {data.email} </V.SScrollCard>
               </td>
               <td>{data.office}</td>
               <td>
                  <Actions>
                        <Edit><IcoEdit onClick={() => ((openModalEdit(), setIdModal(data)))}/></Edit>
                        {HowMsgEdit && <Msg message={"Usuário atualizado com sucesso!"}/>}
                        {HowMsgEditErro && <Msg erro={true} message={'Não houve mudança nos dados'}/>}
                        <Delete onClick={() => ((openModalDelete(),setIdModal(data)))}><IcoDel/></Delete>
                        {HowMsgDelete && <Msg message={"Excluido com sucesso!"}/>}
                  </Actions>
               </td>
            </tr>
         ))}
         {/* Modais */}
         {ModalEdit && 
            <EditModal isOpen={ModalEdit} onClose={closeModalEdit}
               NotificationErro={handleMsgEditErro} Notification={handleMsgEdit} Data={IdModal}
            />
         }
         {ModalDelete && 
            <DeleteModal isOpen={ModalDelete} onClose={closeModalDelete} 
               Notification={handleMsgDelete} Url={`http://localhost:3001/api/UserD/${IdModal._id}`}
            >
               Deseja excluir o usuário em questão?
            </DeleteModal>
         }
      </tbody>
      </Table>
   );
}