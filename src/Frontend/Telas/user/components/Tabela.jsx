import styled from "styled-components";

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
export default function Tabela() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Senha</th>
            <th>Cargo</th>
            <th>ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abner de Oliveira Quintiliano </td>
            <td>QuantiaCerta1</td>
            <td>Administrador</td>
            <td>acão</td>
          </tr>
          <tr>
            <td>Dado 4</td>
            <td>Dado 5</td>
            <td>Dado 6</td>
            <td>acao</td>
          </tr>
          <tr>
            <td>Dado 4</td>
            <td>Dado 5</td>
            <td>Dado 6</td>
            <td>acao</td>
          </tr>
          
        </tbody>
      </Table>
    );
  }