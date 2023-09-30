import React,{useState} from "react";
import styled from "styled-components";
import { ReactComponent as IcoDel }from "../../../img/delete.svg";
import { ReactComponent as IcoEdit} from "../../../img/edit.svg";
import EditModal from "./EditModal"
import DeleteModal from "../../../components/DeleteModal"
// import img from "../../../img/edit.svg"
// import { Add } from "../../../components/_variaveis";

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
            :hover{
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
    fill: #FF3B19;
  }
`;
const Edit = styled.div`
  height: 1.5rem;
  fill: ${props => props.theme.black.Letra};
  :hover{
    fill: #2A8C4A;
  }
`;

export default function Tabela() {

  const [ShowEditModal, setEditModal] = useState(false);
  const openEditModal = () => {
    setEditModal(true);
  };
  const closeEditModal = () => {
    setEditModal(false);
  };
  const [ShowDeleteModal, setDeleteModal] = useState(false);
  const openDeleteModal = () => {
    setDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

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
            <td> 1 </td>
            <td>Abner de Oliveira Quintiliano </td>
            <td>QuantiaCerta1</td>
            <td>Administrador</td>
            <td>
              <Actions>
                <Edit><IcoEdit onClick={openEditModal}/></Edit>
                <EditModal isOpen={ShowEditModal} onClose={closeEditModal}/>
                <Delete onClick={openDeleteModal}><IcoDel/></Delete>
                <DeleteModal isOpen={ShowDeleteModal} onClose={closeDeleteModal}>Deseja excluir o usuário em questão?</DeleteModal>
              </Actions>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dado 4</td>
            <td>Dado 5</td>
            <td>Dado 6</td>
            <td>
              <Actions>
                <Edit><IcoEdit onClick={() => console.log("edit")}/></Edit>
                <Delete onClick={()=>console.log("delete")}><IcoDel/></Delete>
              </Actions>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dado 4</td>
            <td>Dado 5</td>
            <td>Dado 6</td>
            <td></td>
          </tr>
          
        </tbody>
      </Table>
    );
  }