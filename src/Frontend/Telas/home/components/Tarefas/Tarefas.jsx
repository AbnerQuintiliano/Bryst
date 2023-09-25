import { BtnTitulo } from "../../../../components/_variaveis";
import { Conteudo, WrapperConteudo , TWrapper} from "./_Tarefas";
export default function Tarefas() {
    return(
        <TWrapper>
            <div>
                <BtnTitulo>Tarefas</BtnTitulo>
                <BtnTitulo possivel="">+</BtnTitulo>
            </div>
        <WrapperConteudo>
                <Conteudo>Limpar Banheiro Masc</Conteudo>
                <Conteudo>Retirar roupas dos Provadores</Conteudo>
                <Conteudo>Limpar vidros</Conteudo>
                <Conteudo>Trocar notas do caixa</Conteudo>
                <Conteudo>Tirar roupas reservadas</Conteudo>
                <Conteudo>Troca das roupas de verão pelas de inverno</Conteudo>
                <Conteudo>Trocar Lampada</Conteudo>
                <Conteudo>Troca roupa do manequin</Conteudo>
                <Conteudo>proxima semana irá chegar novos produtos</Conteudo>
                <Conteudo>colocar produtos no sistema</Conteudo>
        </WrapperConteudo>
        </TWrapper>
    )
}