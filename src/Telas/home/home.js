import React from "react";
import NavLateral from "../../components/NavLateral"    //import do componente lateral
// import Tarefas from "./components/Tarefas/Tarefas";

export default function Home(){
    return(
    <body className="container">
        <NavLateral Home="true"/>
        <section className="tela_home"> 
            <div className="name">
                hey Sir. Abner e Crisp
            </div>
            {/* <Tarefas/> */}
            <div className="tasks">
                <div className="inner_tasks_btn">
                    <div className="tasks_btn">
                        Tarefas
                    </div>
                    <div className="tasks_btn">
                       Avisos
                    </div>
                </div>
                <div className="inner_tasks_show">
                    <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                    <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                    <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                    <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                    <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                    <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                </div>
            </div>

            <div className="container_2">
                <div className="calendario">
                    <div className="calendario_btn">
                        Vendas
                    </div>
                    <div className="inner_calendario">
                        <div className="calendario_show">compra realizada</div>
                        <div className="calendario_show">dias</div>
                        <div className="calendario_show">dias</div>
                        <div className="calendario_show">dias</div>
                        <div className="calendario_show">dias</div>
                    </div>
                </div>

                <div className="estoque">
                    <div className="estoque_btn">
                        Estoque
                    </div>
                    <div className="inner_estoque">
                        <div className="estoque_show">Seg, 31</div>
                        <div className="estoque_show">7:30 - 12:00</div>
                        <div className="estoque_show">1:10 - 5:00</div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show">Ter, 1</div>
                        <div className="estoque_show">7:00 - 11:00</div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                        <div className="estoque_show"></div>
                    </div>
                </div>
            </div>
        </section>
    </body>
    )

}