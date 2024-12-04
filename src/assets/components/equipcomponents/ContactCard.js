import React from "react";
import '../../css/ContactCard.css';
import contact from '../../img/contact.svg';

function ContactCard() {
    return (
        <>
        <div className="contact-card-container">
            <form>
                <div className="contact-card-frame">
                    <div className="contact-header-frame">
                    <div className="contact-icon-frame">
                        <img className="contact-icon" src={contact} alt="Contact Icon" />
                    </div>
                    <div className="contact-title">Contact Us</div>
                    </div>
                        <input type="text" className="contact-field name-field" placeholder="name"/>
                        <input type="text" className="contact-field email-field" placeholder="Email"/>
                        <input type="text" className="contact-field subject-field" placeholder="Subject" />
                        <input type="text" className="contact-field message-field" placeholder="Message" />
                        <button className="contact-button-frame">
                            <div className="send-button">Send Message</div>
                        </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default ContactCard;