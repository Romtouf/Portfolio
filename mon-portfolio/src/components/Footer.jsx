import React from 'react';
import logoGithub from "../assets/github-mark-white.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__logos'>
            <a href="https://github.com/Romtouf"><img src={logoGithub} alt="Logo Github" /></a>
            <a href="mailto:romain.formationoc@gmail.com"><FontAwesomeIcon className='enveloppe' icon={faEnvelope} /></a>
            </div>
            <div className="footer__text">
                <p> © 2023 Romain Girard. All right reserved</p>
            </div>
            
        </div>
    );
};

export default Footer;