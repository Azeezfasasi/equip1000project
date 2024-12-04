import React from "react";
import fullstats from '../../img/fullstats.png';

function CompletedCourse() {
    return (
        <>
        <div className="completed-courses">
            <div className="completed-courses-header">
                <p>Completed Courses</p>
            </div>
            <div className="completed-courses-container">
                <a href="courses/microsoft-innovative-programme.html" className="d-box">
                <p>Microsoft Innovative Prog...</p>
                <div className="stats">
                    <img src={fullstats} alt="100%" />
                </div>
                </a>
                <a href="courses/social-media-tools.html" className="d-box">
                <p>Social Media Tools...</p>
                <div className="stats">
                    <img src={fullstats} alt="100%" />
                </div>
                </a>
                <a href="courses/ai-tools.html" className="d-box">
                <p>AI Tools for Educators</p>
                <div className="stats">
                    <img src={fullstats} alt="100%" />
                </div>
                </a>
                <a href="courses/virtual-learning-platform.html" className="d-box">
                <p>Virtual Learning tools...</p>
                <div className="stats">
                    <img src={fullstats} alt="100%" />
                </div>
                </a>
            </div>
            <div className="courses-btn-wrapper">
                <a href="">View more</a>
            </div>
        </div>
        </>
    )
}

export default CompletedCourse;