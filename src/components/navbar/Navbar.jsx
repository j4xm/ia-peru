import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import logoia from "../../assets/logoia.png"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
            <p><a href="#home">Inicio</a></p>
            <p><a href="#wgpt3">Qué es chat GPT?</a></p>
            <p><a href="#possibility">En qué me ayuda?</a></p>
            <p><a href="#features">Aplicación Práctica</a></p>
            <p><a href="#blog">Noticias</a></p>
        </div>
      </div>
      <div style={{marginBottom: '15px'}} className="gpt3__navbar-sign">
        <img style={{borderRadius: '8px'}} src={logoia} alt="logo" width={100} />
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Inicio</a></p>
            <p><a href="#wgpt3">Qué es chat GPT?</a></p>
            <p><a href="#possibility">En qué me ayuda?</a></p>
            <p><a href="#features">Aplicación Práctica</a></p>
            <p><a href="#blog">Noticias</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <img style={{borderRadius: '8px'}} src={logoia} alt="logo" width={100} />
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;