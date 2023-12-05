import {useState} from 'react';
import React from 'react';
import logo from '../../img/logo.svg';
import person from '../../img/person1.svg'
import olho1 from '../../img/olho1.svg';
import olho2 from '../../img/olho2.svg';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { Error } from '../../components/_variaveis';
import { useForm } from 'react-hook-form';
import axios from 'axios';

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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('ue')
      handleSubmit(onSubmit)()
    }
  };


  const Navigate = useNavigate()
  const [Erro, setErro] = useState(false)
  const {register, handleSubmit} = useForm();


  const onSubmit = (data) => {
    console.log('foi')
    axios.post(`http://localhost:3001/api/Login`, data)
    .then((response) => ((
      console.log(response),
      sessionStorage.setItem('token', response.data.token),
      sessionStorage.setItem('userName', response.data.userName),
      Navigate("/home")
    )))
    .catch((error) => ((
      console.log(error.response.data.message),
      setErro(error.response.data.message)
    )))
  };
  return (
  <div className="tela">
      <div className="tela-login">
        <div className="fundo-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={logo} alt="logo da tela de login"/> {/* LOGO */}
            </span>
            
            <div className="estilo-input">
              <input
              onKeyDown={handleKeyPress}
              className= {user !== "" ? 'has-val input' : 'input'}
              id="mail"
              type="text"  /*BAGUIETI QUE FAZ O EMAIL FICAR EM CIMA DA PALAVRA*/
              value={user}
              {...register("user",{required: true})}
              autoComplete='off'
              onChange={e => setUser(e.target.value)}
              onInput={Pessoa}/>
              <span className="focus-input" data-placeholder="Usuário"></span>

              <div className="esconder" id="esconder1">
                <img src={person} alt='person'/>
              </div>
            </div>

            <div className="estilo-input">
              <input
              onKeyDown={handleKeyPress}
              className={password !== "" ? 'has-val input' : 'input'}
              id="password"
              type="password"
              value={password} /*IGUAL AO DO EMAIL*/
              {...register("password",{required: true})}
              autoComplete='off'
              onChange={e => setPassoword(e.target.value)} 
              onInput={Olho}/>
              <span className="focus-input" data-placeholder="Senha"></span>
                <div className="esconder" id="esconder2">
                  <img src={olho2} id="olho"  onClick={verSenha} alt='eyes'/>  {/*icone do carinha do email*/}
                </div>
            </div>
            <div className="Error">
              {Erro && <Error $absolute='-30px'>{Erro}</Error>}
            </div>

            <button id='Enviar' type='button'className="login-btn" tabIndex={0} onClick={handleSubmit(onSubmit)}>
              Login
            </button>

            <div className="text-center">
              <span className="txt1">Esqueceu a senha?</span>
              <a className="txt2" href='https://www.google.com/search?client=opera-gx&q=react%2Fjsx-pascal-case&sourceid=opera&ie=UTF-8&oe=UTF-8'>Recuperar senha</a>
            </div>
          </form>
        </div>        
      </div>
  </div>

  );
}

export default Login;

