import React from 'react';
import '../css/contact.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';

function Title() {
    return (
        <h3 id="titulo">CONTACT ME</h3>
    );
}

const Contact = () => {
    return (
        <>
            <div id="contact-page">
                <Title />
                <div id="contacts">
                    <a className="contact_item" href="mailto:joaovitorsilvaluciano@gmail.com" target="blank" rel="noopener noreferrer">
                        <img src={gmail} />
                    </a>
                    <a className="contact_item" href="https://www.linkedin.com/in/joaovitorsl/" target="blank" rel="noopener noreferrer">
                        <img src={linkedin} />
                    </a>
                    <a  className="contact_item"href="https://github.com/joaovitorsl" target="blank" rel="noopener noreferrer">
                        <img src={github} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact