import React, { useState } from "react";
import equiplogo from '../../assets/img/logo/equiplogo.svg';
import mobilemenulist from '../img/svg/mobilemenulist.svg';
import mobilemenuhome from '../img/svg/mobilemenuhome.svg';
import mobilemenucontact from '../img/svg/mobilemenucontact.svg';


function HeaderSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <div className="sticky">
            <div className="small-screen-navbar">
                <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
                    <span className="bar"/>
                    <span className="bar"/>
                    <span className="bar"/>
                </div> 
                <a href="/" className="logo"><img src={equiplogo} /></a>
                <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`} id="nav-list">
                    <li><img src={mobilemenuhome} alt="home" /><a href="/" className="active">Home</a></li>
                    <li><img src={mobilemenulist} alt="lms" /><a href="/lms/lmshome">LMS</a></li>
                    <li className="mobile-hide"><a href="#">About Us</a></li>
                    <li><img src={mobilemenucontact} alt="" /><a href="#">Contact Us</a></li>
                    <li className="read-screen"><a href="#" id="generateSpeechButton">Read Screen</a></li>
                    <li>
                    <select name="" id="languageSelect">
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="es">Spanish</option>
                    </select>
                    </li>
                </ul>
                <div className="header-cta-container">
                    <a href="/signup" className="sign-up2">Sign up</a>
                    <a href="/equiplogin" className="log-in">Log in</a>
                </div>
            </div>
        </div>
    );
}

export default HeaderSection

