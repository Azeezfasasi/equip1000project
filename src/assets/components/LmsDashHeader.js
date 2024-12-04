// import React from "react";
import equiplogo from '../img/logo/equiplogo.svg';
import imageicon from '../img/imageicon.png';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LmsDashboardHeader() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const confirmLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            navigate('/lms/lmshome');
        }
    };

    return (
        <>
        <div className="lms-sticky">
            <div className="lms-screen-navbar">
                <a className="logo" href="/lms/lmshome">
                <img src={equiplogo} />
                </a>
                <div className="lms-top-right">
                    <div className="lms-notification">
                        <i className="fa-regular fa-bell" id="notificationBtn" />
                        <div className="d-line" />
                    </div>
                    <div className="lms-profile">
                        <a href="lms-dashboard.html">
                        <img src={imageicon} alt="" />
                        </a>
                    </div>
                    <div className="lms-name">
                        <a href="lms-dashboard.html">
                        <p>PRINCE</p>
                        </a>
                    </div>
                    <div className="lms-id">
                        <a href="javascript:void(0)">
                        <p>2023/Q4/7223</p>
                        </a>
                    </div>
                    <div className="lms-dropdown" onClick={toggleDropdown}>
                        <a href="javascript:void(0)">
                        <i className="fa-solid fa-caret-down" />
                        </a>
                        {isOpen && (
                            <div className="lms-dropdown-content" id="myDropdown">
                                <Link to="/lms/lmsdashboard">
                                    <i className="fa-solid fa-gauge" /> Dashboard
                                </Link>
                                <Link to="/lms/settings">
                                    <i className="fa-solid fa-circle-user" /> Profile
                                </Link>
                                <Link to="/lms/settings">
                                    <i className="fa-solid fa-lock" /> Security
                                </Link>
                                <Link to="/lms/settings">
                                    <i className="fa-solid fa-list-check" /> Preferences
                                </Link>
                                <Link to="" onClick={confirmLogout}>
                                    <i className="fa-solid fa-arrow-right-from-bracket" /> Logout
                                </Link>
                            </div>
                         )}
                    </div>
                </div>
                <div className="second-top-right">
                <a href="" className="read-container">
                    <p>Read Screen</p>
                </a>
                <div className="d-language-selection">
                    <select name="" id="">
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    </select>
                </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default LmsDashboardHeader;