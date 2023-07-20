import React from "react";
import "../styles/styles.css"
// import setaL from "../../img/setaL.svg"
// import setaR from "../../img/setaR.svg"
import NavLateral from "../../components/NavLateral";


export default function Estoque(){

    // function expandirContainer() {
    //     var container = document.getElementById("container_dados");
    //     var setas = document.getElementById("seta");
    //     container.classList.toggle("expandir");
    //     setas.classList.toggle("seta");

    //     if (container.classList.contains("expandir")) {
    //         setas.setAttribute("src", setaR)
    //       } else {
    //         setas.setAttribute("src", setaL)
    //       }
    //   }

    return(
    <div className="container">
        
       <NavLateral Estoque="true"/>
       <div className="tela_estoque">

       </div>
        
        {/* <div className="tela_estoque">
            <div className="estoque_all">
                <div className="desc_prod">
                    <div className="desc_prod_show">ID Produto</div>
                    <div className="desc_prod_show">Produto</div>
                    <div className="desc_prod_show">Unidades</div>
                    <div className="desc_prod_show">Preço</div>
                    <div className="desc_prod_show">Localização</div>
                    <div className="desc_prod_show">Ações</div>
                </div>

            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                
            }
                <div className="produtos">
                    produto png
                </div>   
                <div className="produtos_2">
                    produto png
                </div>   
            </div>
        </div> */}
    </div>
    )

}