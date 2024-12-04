// import React from "react";
import equiplogo from '../img/logo/equiplogo.svg';
import imageicon from '../img/imageicon.png';
import notifications from '../img/svg/notifications.svg';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import mobilemenulist from '../img/svg/mobilemenulist.svg';
import mobilemenuhome from '../img/svg/mobilemenuhome.svg';
import mobilemenucontact from '../img/svg/mobilemenucontact.svg';

function LoginHeader() {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  
    const [isProfileOpen, setIsOpen] = useState(false);

    const toggleProfile = () => {
        setIsOpen(!isProfileOpen);
    };

    const confirmLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            navigate('/equiplogin');
        }
    };
    return (
        <>
        <div className="sticky">
            <div className="small-screen-navbar" style={{backgroundColor: '#275c6f'}}>
                <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
                    <span className="e-bar"></span>
                    <span className="e-bar"></span>
                    <span className="e-bar"></span>
                </div>
                <a className="logo" href='/'><img src={equiplogo} /></a>
                <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`} id="nav-list">
                    <li><img src={mobilemenuhome} alt=""/><a href='/'>Home</a></li>
                    <li><img src={mobilemenulist} alt=""/><a href="/lms/lmshome">LMS</a></li>
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
                </ul>
                <div className="top-right">
                    <div className="notification">
                        <img src={notifications} alt="" />
                        <div className="line" />
                    </div>
                    <div className="profile">
                        <a href="dashboard.html">
                        <img src={imageicon} alt="" />
                        </a>
                    </div>
                    <div className="eq-name">
                        <a href="javascript:void(0)" onClick={toggleProfile}>
                        <p>PRINCE</p>
                        </a>
                    </div>
                    <div className="user-id">
                        <a href="javascript:void(0)">
                        <p onClick={toggleProfile}>2023/Q4/7223</p>
                        </a>
                    </div>
                    <div className="dropdown" onClick={toggleProfile}>
                        <a href="javascript:void(0)">
                        <i className='fa-solid fa-caret-down profile-drop'></i>
                        </a>
                        {isProfileOpen && (
                        <div className="dropdown-content" id="myDropdown">
                        <a href="dashboard.html">
                            <i className="fa-solid fa-gauge" /> Dashboard
                        </a>
                        <a href="settings.html">
                            <i className="fa-solid fa-circle-user" /> Profile
                        </a>
                        <a href="settings.html">
                            <i className="fa-solid fa-lock" /> Security
                        </a>
                        <a href="settings.html">
                            <i className="fa-solid fa-list-check" /> Preferences
                        </a>
                        <a href="#" onClick={confirmLogout}>
                            <i className="fa-solid fa-arrow-right-from-bracket" /> Logout
                        </a>
                        </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default LoginHeader;