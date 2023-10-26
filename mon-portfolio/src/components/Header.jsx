import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/photo-portfolio.webp";
import logoGithub from "../assets/github-mark-white.svg";

const Header = () => {
    return (
       
    <>
      <div className="header">
        <div className="header__image">
          <img className='logo-portrait' src={logo} alt="Logo"></img>
        </div>
        <div className="header__links">
          <a href='/'
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Accueil
          </a>
          <a
            href="#presentation"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Présentation
          </a>
          <a href='#mes-travaux'
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Mes travaux
          </a>
          <a href='#competences'
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Compétences
          </a>
          <a href='#mon-cv'
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Mon CV
          </a>
          <a href='#contact'
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Contact
          </a>
        </div>
        <NavLink className="logo-github"
          to="https://github.com/Romtouf"
          ><img src={logoGithub} alt="Logo Github" />
          </NavLink>
      </div>
    </>
    
    );
};

export default Header;