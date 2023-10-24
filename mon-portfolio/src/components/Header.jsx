import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/photo-portfolio.webp";

const Header = () => {
    return (
       
              <>
      <div className="header">
        <div className="header__image">
          <img src={logo} alt="Logo"></img>
        </div>
        <div className="header__links">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/presentation"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Présentation
          </NavLink>
          <NavLink
            to="/competences"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Compétences
          </NavLink>
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Contact
          </NavLink>
          <NavLink
            to="/cv"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Mon CV
          </NavLink>
        </div>
      </div>
    </>
    
    );
};

export default Header;