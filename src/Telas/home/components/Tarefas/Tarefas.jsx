import { Conteudo, WrapperConteudo , TWrapper} from "./_Tarefas";

export default function Tarefas() {
    return(
        <TWrapper>
            <div>
                <button click="">Tarefas</button>
                <button click="">Avisos</button>
            </div>
        <WrapperConteudo>
            {/* <div className="inner_tasks_show"> */}
                <Conteudo>Sim</Conteudo>
                <Conteudo>Sim</Conteudo>
                <Conteudo>Sim</Conteudo>
                <Conteudo>Sim</Conteudo>
                <Conteudo>Sim</Conteudo>
                <Conteudo>Sim</Conteudo>
                <Conteudo>Sim</Conteudo>
                <Conteudo>Sim</Conteudo>
                <Conteudo>Sim</Conteudo>
                <Conteudo>Sim</Conteudo>
                
                {/* <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                <div className="tasks_show">nao sei como vai funcionar aqui dentro</div> */}
            {/* </div> */}
        </WrapperConteudo>
        </TWrapper>
    )
}