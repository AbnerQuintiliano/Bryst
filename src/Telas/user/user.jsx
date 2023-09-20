import React from "react";
import "../styles/styles.css"
import usuario from "../../img/usuario.svg"
import setaL from "../../img/setaL.svg"
import setaR from "../../img/setaR.svg"
import MainTela from "../../components/MainTela";
import * as S from "./_style"
import { BtnTitulo, _Wrapper } from "../../components/_variaveis";



export default function User(){

    function expandirContainer() {
        var container = document.getElementById("container_dados");
        var setas = document.getElementById("seta");
        container.classList.toggle("expandir");
        setas.classList.toggle("seta");

        if (container.classList.contains("expandir")) {
            setas.setAttribute("src", setaR)
          } else {
            setas.setAttribute("src", setaL)
          }
      }

    return(
        <MainTela User="true">
            <S.ContainerAll>
                <_Wrapper>
                    <div>
                        <BtnTitulo>Cadastro</BtnTitulo>
                        <S.CPesquisa placeholder="Pesquisar"></S.CPesquisa>
                    </div>
                    <table>
                      <tr>
                        <td>Dado 1</td>
                        <td>Dado 2</td>
                        <td>Dado 3</td>
                      </tr>
                      <tr>
                        <td>Dado 4</td>
                        <td>Dado 5</td>
                        <td>Dado 6</td>
                      </tr>
                    </table>

                </_Wrapper>
                <div className="container_dados" id="container_dados">
                    <div className="foto_perfil">
                        <div className="img">
                        <img src={usuario} alt="foto perf" /> 
                        </div>
                    </div>
                    <p>O tal do Marcos Crisp????</p>

                    <div className="botao_push">
                        <img src={setaL} id="seta" alt="seta esquerda" onClick={expandirContainer} /> 
                    </div>
                </div>
            </S.ContainerAll>
        </MainTela>
    )

}