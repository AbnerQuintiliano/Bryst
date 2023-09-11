import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./Telas/styles/styles.css"

import {GlobalStyle} from "./components/_GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/_variaveis";

import Home from "./Telas/home/home.js";
import Login from "./Telas/login/Login";
import User from "./Telas/user/user.js";
import Inicio from "./Telas/inicio.js";
import Statics from "./Telas/statics/statics.js";
import Estoque from "./Telas/estoque/estoque.jsx";

export default function rotas(){
    return(
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/User" element={<User/>}/>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/statics" element={<Statics/>}/>
              <Route path="/Estoque" element={<Estoque/>}/>
              <Route path="/Inicio" element={<Inicio/>}/>
              <Route path="*" element={<div> Não encontrado </div>}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
        </>
    )
}
