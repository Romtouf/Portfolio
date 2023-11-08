import React from 'react';
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
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
          <NavLink to='/'
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Accueil
          </NavLink>
          <Link
            to="#presentation"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Présentation
          </Link>
          <Link to='#mes-travaux'
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Mes travaux
          </Link>
          <Link to='#competences'
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Compétences
          </Link>
          <Link to='#mon-cv'
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Mon CV
          </Link>
          <Link to='#contact'
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Contact
          </Link>
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