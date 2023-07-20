import { Link } from "react-router-dom";
import usuario from "../img/usuario.svg"
import home from "../img/home.svg"
import statics from "../img/statics.svg"
import estoque from "../img/estoque.svg"
import calendario from "../img/calendario.svg"
import log from "../img/Rectangle 3 (1).svg";

export default function NavLateral(props){
    return(
        <nav className="nav">
            <Link to="/Inicio"className="btn_nav" logo=""><img src={log} alt=""/></Link>
            <Link to='/User' className="btn_nav" ativo={props.User}><img src={usuario} /></Link>
            <Link to='/Home' className="btn_nav" ativo={props.Home}>< img  src={home} /></Link>
            <Link to='/Estoque' className="btn_nav" ativo={props.Estoque}><img src={estoque} /></Link>
            <Link to='/Statics' className="btn_nav" ativo={props.Statics}>< img src={statics} /></Link>
            <Link to='/Calendario' className="btn_nav"><img src={calendario} /></Link>
        </nav>
        
    )
}