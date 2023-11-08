import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


const Contact = () => {
    
    return (
        <NavLink to="mailto:romain.formationoc@gmail.com"><FontAwesomeIcon className='enveloppe' icon={faEnvelope} /></NavLink>
    );
};

export default Contact;