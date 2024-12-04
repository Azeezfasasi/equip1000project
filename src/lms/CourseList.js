import React from "react";
import { Link } from "react-router-dom";
import CourseSearch from "../assets/components/lmscomponets/CourseSearch";
import msofficesuite from '../assets/img/Microsoft Office Suite Image-c.png';
import googlesuite from '../assets/img/Google Suit Image-c.png';
import canvasuite from '../assets/img/Canva for Educators Image-c.png';
import kahootsuite from '../assets/img/Kahoot for Educators Image-c.png';
import msinnovative from '../assets/img/Microsoft Office Suite Image-c.png';
import socialmedia from '../assets/img/Social Media Tools for Educators Image-c.png';
import aisuite from '../assets/img/AI Tools for Educators Image-c.png';
import virtualsuite from '../assets/img/Virtual Learning Platforms Image-c.png';

function CourseList() {
    return (
        <>
        <div className="content">
            <div className="categories-container lms-categories-container">
                <CourseSearch />
                <div className="courses-for-educators-header">
                <p>Courses for Educators</p>
                </div>
                <div className="courses-for-educators-description">
                <p>
                    Transform your classroom and ignite a passion for learning with our
                    transformative courses for educators.
                    <br />
                    <span>
                    Dive deep into diverse learning pathways tailored to your specific
                    needs and aspirations. Enhance your pedagogical skills, master
                    effective teaching strategies, and discover innovative tools to engage
                    and empower all students.
                    </span>
                </p>
                </div>
                <div className="courses-for-educators-container" style={{ border: "none" }}>
                <div className="container-box">
                    <p className="title">Microsoft Office Suite</p>
                    <p className="sub-title">
                    Elevate your efficiency and productivity with our comprehensive
                    Microsoft Suite course
                    </p>
                    <Link to="/lms/microsoftofficesuite" className="course-image">
                        <img
                            src={msofficesuite}
                            alt="Office suites"
                        />
                        <p>Microsoft Office Suite</p>
                    </Link>
                </div>
                <div className="container-box">
                    <p className="title">Google Suite</p>
                    <p className="sub-title">
                    Unlock a world of collaboration and efficiency with our comprehensive
                    Google Suite course
                    </p>
                    <Link to="/lms/courses/googlesuite" className="course-image">
                        <img src={googlesuite} alt="G suites" />
                        <p>Google Suite</p>
                    </Link>
                </div>
                <div className="container-box">
                    <p className="title">Canva for Educators</p>
                    <p className="sub-title">
                    Learn to design anything, anytime, anywhere with Canva!
                    </p>
                    <Link to="/lms/courses/canvaforeducators" className="course-image">
                        <img src={canvasuite} alt="Canva" />
                        <p>Canva for Educators</p>
                    </Link>
                </div>
                <div className="container-box mobile-kahoot">
                    <p className="title">Kahoot for Educators</p>
                    <p className="sub-title">
                    Learn to turn learning into an engaging and interactive adventure with
                    Kahoot!
                    </p>
                    <Link to="/lms/courses/kahootforeducators" className="course-image">
                        <img src={kahootsuite} alt="Kahoot" />
                        <p>Kahoot for Educators</p>
                    </Link>
                </div>
                <div className="container-box mobile-innovative">
                    <p className="title">Microsoft Innovative Educator Programme</p>
                    <p className="sub-title">
                    Ignite your passion for education: Join the Microsoft Innovative
                    Educator Programme and become an expert
                    </p>
                    <Link to="/lms/courses/micosoftinnovators"
                    className="course-image"
                    >
                        <img
                            src={msinnovative}
                            alt="Microsoft Innovative"
                        />
                        <p>Microsoft Innovative Educator Programme</p>
                    </Link>
                </div>
                <div className="container-box mobile-social">
                    <p className="title">Social Media Tools for Educators</p>
                    <p className="sub-title">
                    Engage your students and build a strong classroom community via Social
                    Media
                    </p>
                    <Link to="/lms/courses/socialmediaforeducators" className="course-image">
                        <img
                            src={socialmedia}
                            alt="Social Media Tool"
                        />
                        <p>Social Media Tools for Educators</p>
                    </Link>
                </div>
                <div className="container-box mobile-ai">
                    <p className="title">AI Tools for Educators</p>
                    <p className="sub-title">
                    Harness the power of Artificial Intelligence (AI) to transform your
                    classroom
                    </p>
                    <Link to="/lms/courses/aitools" className="course-image">
                        <img src={aisuite} alt="AI Tool" />
                        <p>AI Tools for Educators</p>
                    </Link>
                </div>
                <div className="container-box mobile-virtual">
                    <p className="title">Virtual Learning Platforms</p>
                    <p className="sub-title">
                    Unlock and harness the power of Virtual Learning
                    </p>
                    <Link to="/lms/virtuallearningplatforms"
                    className="course-image"
                    >
                        <img src={virtualsuite} alt="" />
                        <p>Virtual Learning Platforms</p>
                    </Link>
                </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default CourseList;