import equiplogo from '../img/logo/equiplogo.svg';
import React, { useState } from "react";
import mobilemenulist from '../img/svg/mobilemenulist.svg';
import mobilemenuhome from '../img/svg/mobilemenuhome.svg';
import mobilemenucontact from '../img/svg/mobilemenucontact.svg';

function LoginHeader() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  
    return (
        <>
        <div className="sticky">
            <div className="small-screen-navbar" style={{backgroundColor: '#275c6f'}}>
                <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <a href='/' className="logo"><img src={equiplogo} /></a>
                <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`} id="nav-list">
                    <li><img src={mobilemenuhome} alt=""/><a href='/'>Home</a></li>
                    <li><img src={mobilemenulist} alt=""/><a href='/lms/lmshome'>LMS</a></li>
                    <li className="mobile-hide"><a href="#">About Us</a></li>
                    <li><img src={mobilemenucontact} alt=""/><a href="#">Contact Us</a></li>
                    <li className="read-screen"><a href="#">Read Screen</a></li>
                    <li>
                    <select name="" id="">
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                    </li>
                    <li className="mobile-cta"><a href='/signup'>Sign Up</a></li>
                    <li className="mobile-cta"><a href='/equiplogin'>Log In</a></li>
                </ul>
                <div className="header-cta-container">
                    <a className="r-sign-up2" href='/signup'>Sign up</a>
                    {/* <a className="log-in" href="home-login.html">Log in</a> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginHeader;