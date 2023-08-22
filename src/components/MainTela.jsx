import NavLateral from "./NavLateral"
import * as S from "./_variaveis"

export default function MainTela (props) {
    return(
        <S._Main>
                <NavLateral {...props} />
                <S._ContainerTela>
                   {props.children}
                </S._ContainerTela>
        </S._Main>
    )
}