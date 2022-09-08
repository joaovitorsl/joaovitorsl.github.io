import React from 'react';
import contact from '../../info/contact';
import './styles.css';

const Contact = ({ href, icon, alt }) => {
    return (
        <a className="contact-item" href={href}>
            <img src={icon} alt={alt} />
        </a>
    )
}

const Contacts = () => {
    const contacts = contact.map(contact => <Contact href={contact.href} icon={contact.icon} alt={contact.alt} />);

    return (
        <div className="contact-page">
            <h3 className="contact-title">CONTACT</h3>
            <div className="contacts">
                {contacts}
            </div>
        </div>
    )
}

export default Contacts