// import React from "react";
import React, { useState } from "react";
import equiplogo from '../img/logo/equiplogo.svg';
// import { useNavigate } from 'react-router-dom';
import mobilemenulist from '../img/svg/mobilemenulist.svg';
import mobilemenuhome from '../img/svg/mobilemenuhome.svg';
import mobilemenucontact from '../img/svg/mobilemenucontact.svg';


function LmsHomeHeader(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <div className="lms-sticky">
            <div className="lms-header-section">
                <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
                </div>
                <a className="logo" href="/">
                <img src={equiplogo} />
                </a>
                <ul className={`lms-nav-list ${isMenuOpen ? 'open' : ''}`} id="nav-list">
                    <li className="glink">
                        <img src={mobilemenuhome} alt="" />
                        <a href="/">Home</a>
                    </li>
                    <li className="link">
                        <img src={mobilemenulist} alt="" />
                        <a className="lms-active" href="/lms/lmshome">
                        LMS
                        </a>
                    </li>
                    <li className="link mobile-hide">
                        <a href="/lms/lmsdashboard">About Us</a>
                    </li>
                    <li className="link">
                        <img src={mobilemenucontact} alt="" />
                        <a href="#">Contact Us</a>
                    </li>
                    <li className="link read-screen">
                        <a href="#">Read Screen</a>
                    </li>
                    <li>
                        <select name="" id="">
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                        </select>
                    </li>
                </ul>
                <div className="lms-header-cta-container">
                    <a
                        className="sign-up2"
                        href="javascript:void(0)"
                        onclick="togglePopup('signup')"
                    >
                        Sign up
                    </a>
                    <a
                        className="log-in2"
                        href="javascript:void(0)"
                        onclick="togglePopup('login')"
                    >
                        Log in
                    </a>
                </div>
            </div>
        </div>

        </>
    )
}

export default LmsHomeHeader;