import React from "react";
import styled from "styled-components";
import { ReactComponent as IcoDel }from "../../../img/delete.svg";
import { ReactComponent as IcoEdit} from "../../../img/edit.svg";
import EditModal from "./EditModal"
import DeleteModal from "../../../components/DeleteModal"
import Msg from "../../../components/Mensagem"
import { useModal } from "../../../hooks/useModal";
import { useMensage } from "../../../hooks/useMensage";

const Table = styled.table`
   width: 100%;
   background-color: ${props => props.theme.black.fundoClaro};
   ${props => console.log(props.theme)}
   border-collapse: collapse;
   border-radius: 20px;
   overflow: hidden;
   th{
      padding: .5rem;
      white-space: nowrap; 
   }
   tbody{
       td{
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

export default function Tabela() {

   const {Modal:ModalEdit , openModal:openModalEdit , closeModal:closeModalEdit} = useModal();
   const {HowMsg:HowMsgEdit , handleMsg:handleMsgEdit} = useMensage();

   const {Modal:ModalDelete , openModal:openModalDelete , closeModal:closeModalDelete} = useModal();
   const {HowMsg:HowMsgDelete , handleMsg:handleMsgDelete} = useMensage();

   return (
      <Table>
      <thead>
         <tr>
            <th>ID</th>
            <th>Usuário</th>
            <th>Senha</th>
            <th>Cargo</th>
            <th>Ação</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>1</td>
            <td>Abner de Oliveira Quintiliano </td>
            <td>QuantiaCerta1</td>
            <td>Administrador</td>
            <td>
               <Actions>
                     <Edit><IcoEdit onClick={openModalEdit}/></Edit>
                     <EditModal isOpen={ModalEdit} onClose={closeModalEdit} Notification={handleMsgEdit}/>
                     {HowMsgEdit && <Msg message={"Usuário atualizado com sucesso!"}/>}

                     <Delete onClick={openModalDelete}><IcoDel/></Delete>
                     <DeleteModal isOpen={ModalDelete} onClose={closeModalDelete} Notification={handleMsgDelete}>
                        Deseja excluir o usuário em questão?
                     </DeleteModal>
                     {HowMsgDelete && <Msg message={"Excluido com sucesso!"}/>}
               </Actions>
            </td>
         </tr>
      </tbody>
      </Table>
   );
}