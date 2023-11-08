import React from 'react';
import logo from "../assets/photo-portfolio.webp";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__logos'>
            <img className='logo-portrait' src={logo} alt="Logo"></img>
            </div>
            <div className="footer__text">
                <p> © 2023 Romain Girard. All right reserved</p>
            </div>
            
        </div>
    );
};

export default Footer;