import React from "react";
import '../../css/lmsstyes/CourseOverview.css';
import '../../css/lmsstyes/CourseSearch.css';
import CourseSearch from "./CourseSearch";
import { Link } from "react-router-dom";

function CourseOverview() {
    return (
        <>
        <div className="content course-container-margin">
            <div className="main-screen">
                <div className="categories-container mobile-category-container">
                {/*  */}
                <CourseSearch />
                <div className="categories-header">
                    <p>Welcome to the Courses Section</p>
                </div>
                <div className="categories-description">
                    <p>Explore Our Treasure Trove of Courses!</p>
                </div>
                <div className="categories-sub-text">
                    <p>
                    Browse through our extensive catalog, teeming with courses spanning
                    across various domains and access your gateway to a universe of
                    knowledge and skill development!
                    </p>
                </div>
                {/* section for Laptop courses for educators */}
                <div className="laptop-courses-container">
                    <Link to="/lms/coursesforeducators"
                    className="courses-for-educators-container"
                    style={{ textDecoration: "none" }}
                    >
                    <p className="category-title">Courses for Educators</p>
                    <p className="course-desc">
                        Inspire, engage, and empower your students with our comprehensive
                        library of professional development courses for educators.
                    </p>
                    </Link>
                    <div className="available-courses">
                        <Link to="/lms/coursesforeducators" className="course-box">
                            <a href="courses-for-educators.html">
                            <img src="img/Microsoft Office Suite Image.png" alt="" />
                            </a>
                            <div className="box-title">
                                <a href="courses-for-educators.html">Microsoft Office Suite</a>
                            </div>
                        </Link>
                        <Link to="/lms/coursesforeducators" className="course-box">
                            <a href="courses-for-educators.html">
                            <img src="img/Google Suite Image.png" alt="" />
                            </a>
                            <div className="box-title">
                                <a href="courses-for-educators.html">Google Suite</a>
                            </div>
                        </Link>
                        <Link to="/lms/coursesforeducators" className="course-box">
                            <a href="courses-for-educators.html">
                            <img src="img/Canva for Educators Image.png" alt="" />
                            </a>
                            <div className="box-title">
                                <a href="courses-for-educators.html">Canva for Educators</a>
                            </div>
                        </Link>
                    </div>
                    <div
                    className="tech-courses-container mobile-tech-courses"
                    style={{ marginTop: "-155px", width: "100%" }}
                    >
                    <div className="tech-courses-header">
                        <div className="tech-courses">Tech Courses</div>
                    </div>
                    <div className="tech-courses-body">
                        <div className="coming-soon">
                        <div className="coming-soon2">COMING SOON</div>
                        </div>
                    </div>
                    </div>
                    <div
                    className="tech-courses-container social"
                    style={{ width: "100%" }}
                    >
                    <div className="tech-courses-header">
                        <div className="tech-courses">Social Media Courses</div>
                    </div>
                    <div className="tech-courses-body">
                        <div className="coming-soon">
                        <div className="coming-soon2">COMING SOON</div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* section for mobile courses for educators */}
                <div className="mobile-courses-container">
                    <div className="mobile-courses-description">
                    <div className="course-title">Courses for Educators</div>
                    <div className="sub-title">
                        Inspire, engage, and empower your students with our comprehensive
                        library of professional development courses for educators.
                        <ul>
                        <li>Microsoft Office Suite</li>
                        <li>Google Suite</li>
                        <li>Canva for Educators</li>
                        <li>Kahoot for Educators</li>
                        <li>Microsoft Innovative Educator Programme</li>
                        <li>Social Media Tools for Educators</li>
                        <li>AI Tools for Educators</li>
                        <li>Virtual Learning Platforms</li>
                        </ul>
                    </div>
                    </div>
                    <div className="mobile-courses-box">
                    <div className="mobile-box">
                        <a href="courses-for-educators.html">
                        <img src="img/Microsoft Office Suite Image.png" alt="" />
                        </a>
                        <div className="mobile-course-name">
                        <p>Microsoft Office Suite</p>
                        </div>
                    </div>
                    <div className="mobile-box">
                        <a href="courses-for-educators.html">
                        <img src="img/Google Suite Image.png" alt="" />
                        </a>
                        <div className="mobile-course-name">
                        <p>Google Suite</p>
                        </div>
                    </div>
                    <div className="mobile-box">
                        <a href="courses-for-educators.html">
                        <img src="img/Canva for Educators Image.png" alt="" />
                        </a>
                        <div className="mobile-course-name">
                        <p>Canva for Educators</p>
                        </div>
                    </div>
                    <div className="mobile-box">
                        <a href="courses-for-educators.html">
                        <img src="img/Kahoot for Educators Image.png" alt="" />
                        </a>
                        <div className="mobile-course-name">
                        <p>Kahoot for Educators</p>
                        </div>
                    </div>
                    <div className="mobile-box">
                        <a href="courses-for-educators.html">
                        <img
                            src="img/Microsoft Innovative Educator Programme Image.png"
                            alt=""
                        />
                        </a>
                        <div className="mobile-course-name">
                        <p>Microsoft Innovative Educator Programme</p>
                        </div>
                    </div>
                    <div className="mobile-box">
                        <a href="courses-for-educators.html">
                        <img src="img/social.png" alt="" />
                        </a>
                        <div className="mobile-course-name">
                        <p>Social Media Tools for Educators</p>
                        </div>
                    </div>
                    <div className="mobile-box">
                        <a href="courses-for-educators.html">
                        <img src="img/ai-tools.png" alt="" />
                        </a>
                        <div className="mobile-course-name">
                        <p>AI Tools for Educators</p>
                        </div>
                    </div>
                    <div className="mobile-box">
                        <a href="courses-for-educators.html">
                        <img src="img/virtual-learning.png" alt="" />
                        </a>
                        <div className="mobile-course-name">
                        <p>Virtual Learning Platforms</p>
                        </div>
                    </div>
                    </div>
                    <div className="mobile-tech-container">
                    <div className="tech-title">Tech Courses</div>
                    <div className="tech-content">COMING SOON</div>
                    </div>
                    <div className="mobile-tech-container">
                    <div className="tech-title">Social Media Courses</div>
                    <div className="tech-content">COMING SOON</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CourseOverview;