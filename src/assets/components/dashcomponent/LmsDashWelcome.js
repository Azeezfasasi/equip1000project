import React from "react";
import mssuite from '../../img/mssuite.png';
import googlesuite from '../../img/googlesuite.png';
import canvaimg from '../../img/canvaimg.png';
import kahootimg from '../../img/kahootimg.png';
import LmsAnnouncement from "./LmsAnnouncement";
import CompletedCourse from "./CompletedCourses";
import NoteSection from "./NoteSection";
import '../../css/dashstyles/NoteSection.css';
import CalendarWidget from '../../components/dashcomponent/CalendarWidget';
import '../../css/dashstyles/CalendarWidget.css';
import gtranslate from '../../img/gtranslate.png';


function LmsDashWelcome() {
    return (
        <>
        <div className="content">
            <div className="main-screen">
                <div className="dashboard-header">
                    <p className="welcome-text">
                        Welcome, <span id="firstName" />
                        Prince!
                    </p>
                    <p className="welcome-sub-text">It is time to continue learning. Take a step closer to Mastery!</p>
                    <p className="mobile-welcome-sub-text">Take a step closer to Mastery!</p>
                </div>
                <div className="in-progress-classes">
                    <div className="d-progress-box">
                        <a href="" className="d-box">
                        <p>Microsoft Suite</p>
                        <img src={mssuite} alt="ms suite" />
                        </a>
                    </div>
                    <div className="d-progress-box">
                        <a href="" className="d-box">
                        <p>Google Suite</p>
                        <img src={googlesuite} alt="G suite" />
                        </a>
                    </div>
                    <div className="d-progress-box">
                        <a href="" className="d-box">
                        <p>Canva for Educators</p>
                        <img src={canvaimg} alt="Canva" />
                        </a>
                    </div>
                    <div className="d-progress-box">
                        <a href="" className="d-box">
                        <p>Kahoot for Educators</p>
                        <img src={kahootimg} alt="ms suite" />
                        </a>
                    </div>
                </div>
                <LmsAnnouncement />
                <CompletedCourse />
                <NoteSection />
                <div className="right-content r-content">
                    <div className="translate-button">
                        <a href="#" onclick="translatePage('es'); return false;">
                        <img src={gtranslate} alt="Translate" /> TRANSLATE PAGE
                        </a>
                    </div>
                    <CalendarWidget />
                </div>
            </div>
        </div>        
        </>
    )
}

export default LmsDashWelcome;