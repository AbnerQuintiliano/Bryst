import {useState} from 'react';
import React from 'react';
import logo from '../../img/logo.svg';
import person from '../../img/person1.svg'
import olho1 from '../../img/olho1.svg';
import olho2 from '../../img/olho2.svg';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
  const[user, setUser] = useState("")
  const[password, setPassoword] = useState("")
  const senha = document.getElementById("password")
  const icone = document.getElementById("olho")
  
  
  function Olho() {
    const inputField = document.getElementById("password");
    const hiddenDiv = document.getElementById("esconder2");

    if (inputField.value.trim() !== "") {
        hiddenDiv.style.display = "block";
    } else {
        hiddenDiv.style.display = "none";
    }
  }

  function Pessoa() {
    const inputField = document.getElementById("mail");
    const hiddenDiv = document.getElementById("esconder1");

    if (inputField.value.trim() !== "") {
        hiddenDiv.style.display = "block";
    } else {
        hiddenDiv.style.display = "none";
    }
  }

  function verSenha() {
    let inputTypePassword = senha.type === "password"
    if (inputTypePassword){
       senha.setAttribute("type","text")
       icone.setAttribute("src", olho1)
    } else {
       senha.setAttribute("type","password")
       icone.setAttribute("src", olho2)
    }
   }
  


  return (

   <div className="tela">
      <div className="tela-login">
        <div className="fundo-login">
          <form className="login-form">
            {/* <span className="login-form-title"> </span> COLOCAR TITULO EM CIMA DO LOGO*/}

            <span className="login-form-title">
              <img src={logo} alt="logo da tela de login" /> {/* LOGO */}
            </span>
            
            <div className="estilo-input">
              <input 
              className= {user !== "" ? 'has-val input' : 'input'}
              id="mail"
              type="text"      /*BAGUIETI QUE FAZ O EMAIL FICAR EM CIMA DA PALAVRA*/
              value={user} 
              onChange={e => setUser(e.target.value)}
              onInput={Pessoa}/>
              <span className="focus-input" data-placeholder="Usuário"></span>

              <div className="esconder" id="esconder1">
                <img src={person}/>
              </div>
            </div>

            <div className="estilo-input">
              <input 
              className={password !== "" ? 'has-val input' : 'input'}
              id="password"
              type="password"
              value={password} /*IGUAL AO DO EMAIL*/
              onChange={e => setPassoword(e.target.value)} 
              onInput={Olho}/>
              <span className="focus-input" data-placeholder="Senha"></span>
        
                <div className="esconder" id="esconder2">
                  <img src={olho2} id="olho"  onClick={verSenha} />  {/*icone do carinha do email*/}
                </div>
            
            </div>

            <div className="fundo-btn">
              <Link to="/Home" className="login-btn">LOGIN</Link>
            </div>

            <div className="text-center">
              <span className="txt1">Esqueceu a senha?</span>
              <a className="txt2" href="">Recuperar senha</a>
            </div>
          </form>
        </div>        
      </div>
  </div>

  );
}

export default Login;

