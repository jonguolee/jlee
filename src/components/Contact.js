import React from 'react';
import { Button } from './Button';
import './Contact.css';


function Contact() {
    return (
        <div id="contact" className='contact'>
            <h1>Get In Touch.</h1>
            <div className="cta">
                <p className="intro-text">Have a project I can work on? Or any tips/advice? I am always looking for feedback and guidance on how I can improve!</p>
                <Button onClick={"mailto:jonguolee@gmail.com"} buttonStyle="btn--primary" buttonSize="btn--large" >CONTACT ME</Button>
            </div>
        </div>
    );
}

export default Contact;