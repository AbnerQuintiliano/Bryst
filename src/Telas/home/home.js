import React from "react";
import NavLateral from "../../components/NavLateral"    //import do componente lateral
import Tarefas from "./components/Tarefas/_Tarefas";
import { _Main , _ContainerTela , _Wrapper} from "../../components/_variaveis";
import { _WrapperTela } from "./components/Tarefas/_Tarefas";

export default function Home(){
    return(
    // <body className="container">
    <_Main>
        <NavLateral Home="true"/>
        <_ContainerTela> 
            <h1>
                hey Sir. Abner e Crisp
            </h1>
            
            <_Wrapper>
                {/* <Tarefas/> */}
                <_WrapperTela>
                    <button>Tarefas</button>
                    <button>Avisos</button>
                </_WrapperTela>
                ???
                {/* <div className="inner_tasks_btn">
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
                </div> */}
            </_Wrapper>

            <div className="container_2">
                <_Wrapper>
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
                </_Wrapper>

                <_Wrapper>
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
                </_Wrapper>
            </div>
        </_ContainerTela>
    </_Main>
    //</body> 
    )

}