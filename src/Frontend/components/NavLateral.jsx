import { Link } from "react-router-dom";
import usuario from "../img/usuario.svg"
import home from "../img/home.svg"
import statics from "../img/statics.svg"
import estoque from "../img/estoque.svg"
import log from "../img/Rectangle 3 (1).svg";
import styled from "styled-components";

const NavLaterals = styled.nav`
    flex: max(3.5% , 35px);
    padding: 3rem 0 7.75rem 0;
    border-radius: 0 20px 20px 0 ;
    background-color: ${props => props.theme.black.dasTabelas};

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
    [ativo]{     //para ficar roxo onde está a pagina
        opacity: 1;
    }
    [logo]{     //para a logo se destacar
        width: 80%;
        opacity: 1;
        padding: 10px 0;
    }
    
    @media (max-width: 650px) {
        padding: 2.5em 0 5.5rem 0;
        flex: 30px;
    }
    @media (max-width: 450px) {
        flex: 40px;
    }
`

export default function NavLateral(props){
    return(
            <NavLaterals>
            <Link to="/Inicio" className="btn_nav" logo=""><img src={log} alt="Logo"/></Link>
            <Link to='/User' className="btn_nav" ativo={props.User}><img src={usuario} alt="user"/></Link>
            <Link to='/Home' className="btn_nav" ativo={props.Home}>< img  src={home} alt="home"/></Link>
            <Link to='/Estoque' className="btn_nav" ativo={props.Estoque}><img src={estoque} alt="estoque"/></Link>
            <Link to='/Statics' className="btn_nav" ativo={props.Statics}>< img src={statics} alt="statics"/></Link>
            </NavLaterals>
        
    )
}

