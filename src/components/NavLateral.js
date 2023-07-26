import { Link } from "react-router-dom";
import usuario from "../img/usuario.svg"
import home from "../img/home.svg"
import statics from "../img/statics.svg"
import estoque from "../img/estoque.svg"
import calendario from "../img/calendario.svg"
import log from "../img/Rectangle 3 (1).svg";

import styled from "styled-components"
import {corDasTabelas} from "./_variaveis"
import * as Cor from "./_variaveis"

const _NavLateral = styled.nav`
    flex: 2.5%;
    padding: 3rem 0 7.75rem 0;
    border-radius: 0 20px 20px 0 ;
    background-color: ${corDasTabelas};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .btn_nav{
        width: 50%;
        opacity: 0.5;
        img{
            width: 100%;
        }
    }
    [ativo="true"]{     //para ficar roxo onde está a pagina
        opacity: 1;
    }
    [logo]{     //para a logo se destacar
        width: 80%;
        opacity: 1;
        padding: 10px 0;
    }
`

export default function NavLateral(props){
    return(
            <_NavLateral> 
                {console.log(Cor.CorDeFundo)}
            <Link to="/Inicio" className="btn_nav" logo=""><img src={log} alt=""/></Link>
            <Link to='/User' className="btn_nav" ativo={props.User}><img src={usuario} /></Link>
            <Link to='/Home' className="btn_nav" ativo={props.Home}>< img  src={home} /></Link>
            <Link to='/Estoque' className="btn_nav" ativo={props.Estoque}><img src={estoque} /></Link>
            <Link to='/Statics' className="btn_nav" ativo={props.Statics}>< img src={statics} /></Link>
            <Link to='/Calendario' className="btn_nav"><img src={calendario} /></Link>
            </_NavLateral>
        
    )
}

