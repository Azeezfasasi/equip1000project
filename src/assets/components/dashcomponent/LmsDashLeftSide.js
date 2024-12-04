import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assessmenticon from '../../img/svg/assessmenticon.svg';
import certificate from '../../img/svg/certificate.svg';
import coursesicon from '../../img/svg/coursesicon.svg';
import dashboardicon from '../../img/svg/dashboardicon.svg';
import instructorsicon from '../../img/svg/instructorsicon.svg';
import messagingcon from '../../img/svg/messagingcon.svg';
import communityicon from '../../img/svg/communityicon.svg';
import logouticon from '../../img/svg/logouticon.svg';
import settingsicon from '../../img/svg/settingsicon.svg';
import { Link, NavLink } from "react-router-dom";


function LmsDashLeftSide() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const confirmLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
        navigate('/lms/lmshome');
    }
};
    return (
        <>
        <div id="mobile-menu-toggle" onClick={toggleMenu}>☰</div>
        {/* <div className="sidebar-active" id="sidebar-active"> */}
        <div className={`sidebar-active ${menuOpen ? 'active' : ''}`} id="sidebar-active">
            <NavLink to="/lms/lmsdashboard" className="side-link">
            <img src={dashboardicon} alt="Dashboard Icon" />
            <p>Dashboard</p>
            </NavLink>
            <NavLink to="/lms/courses" className="side-link">
            <img src={coursesicon} alt="Couse Icon" />
            <p>Courses</p>
            </NavLink>
            <NavLink to="/lms/assessment" className="side-link">
            <img src={assessmenticon} alt="Assessment Icon" />
            <p>Assessment</p>
            </NavLink>
            <NavLink to="/lms/certificate" className="side-link">
            <img src={certificate} alt="Certificate Icon" />
            <p>Certificates</p>
            </NavLink>
            <NavLink to="/lms/messaging" className="side-link">
            <img src={messagingcon} alt="Message Icon" />
            <p>Messaging</p>
            </NavLink>
            <NavLink to="/lms/instructors" className="side-link">
            <img src={instructorsicon} alt="Instructors Icon" />
            <p>Instructors</p>
            </NavLink>
            <a
            className="side-link community"
            href=""
            style={{ pointerEvents: "none" }}
            >
            <img src={communityicon} alt="Community Icon" />
            <p>Community</p>
            </a>
            <NavLink to="/lms/settings" className="side-link">
            <img src={settingsicon} alt="Settings Icon" />
            <p>Settings</p>
            </NavLink>
            <a className="side-link logout" href="#" onClick={confirmLogout}>
            <img src={logouticon} alt="Logout Icon" />
            <p>Logout</p>
            </a>
        </div>
        </>
    )
}

export default LmsDashLeftSide;