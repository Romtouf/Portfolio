import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
        )
        .then((result)=> {alert('Message envoyé avec succès');
            console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    };
    return (
        <div className='contact'>
            <form className='contact__form' ref={form} onSubmit={sendEmail}>
                <div className='contact__form__infos'>
                    <input type="text" placeholder='Nom' name='user_name' />
                    <input type="email" placeholder='Adresse email' name='user_email' />
                    <textarea name="message" type="text" placeholder='Votre message'></textarea>
                </div>
                <input type="submit" value='Envoyer' id='input-submit' />
            </form>
        </div>
    );
};

export default Contact;