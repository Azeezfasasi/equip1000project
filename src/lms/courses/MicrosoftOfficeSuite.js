import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../../assets/components/dashcomponent/LmsDashLeftSide";
import msword from '../../assets/img/ms-word.png';
import msofficecourse from '../../assets/img/ms office course.png';
import msexcel from '../../assets/img/ms-excel.png';
import mspowerpoint from '../../assets/img/ms-powerpoint.png';
import { Link } from "react-router-dom";

function MicrosoftOfficeSuite() {
    return (
        <>
        <Helmet>
            <title>Microsoft Office Suite - EQUIP</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        <div className="content mobile-course-content">
            <div className="main-screen">
                <div className="microsoft-container">
                <div className="microsoft-office-suite-header">
                    <p>Microsoft Office Suite</p>
                </div>
                <div className="microsoft-office-suite-description">
                    <p>
                    <span className="one">
                        Conquer Your Workflow with Microsoft Office Suite:
                        <br />
                    </span>
                    <span className="two">
                        A Productivity Powerhouse
                        <br />
                    </span>
                    <span className="three">
                        Microsoft Office Suite has been a household name for decades, and
                        for good reason. It's an all-in-one powerhouse of tools designed to
                        boost your productivity and creativity in every aspect of your work
                        or studies.
                    </span>
                    </p>
                </div>
                <div className="microsoft-office-suite-image">
                    <img src={msofficecourse} alt="ms office" />
                </div>
                <div className="course-description">
                    <p className="desc">
                    In this immersive course, we will take you through what we call The
                    Essential Trio: Word, Excel, and PowerPoint; with an addition of
                    Microsoft forms.
                    </p>
                    <p className="desc">
                    By the end of this course you will be a Professional with the Suite.
                    </p>
                    <p className="course-duration">Course Duration: 134 Hrs</p>
                </div>
                <div className="course-status">
                    <div className="status-color" />
                    <p>NOT STARTED</p>
                </div>
                <div className="listed-courses top-course">
                    <p className="course-header">Microsoft Word</p>
                    <p className="course-short-description">
                    Craft stunning documents, from simple letters to complex reports, with
                    ease
                    </p>
                    <div className="course-image">
                    <img src={msword} alt="ms word" />
                    </div>
                    <Link to="/lms/courses/microsoftofficetools/microsoftword">Enroll</Link>
                </div>
                <div className="listed-courses">
                    <p className="course-header">Microsoft Excel</p>
                    <p className="course-short-description">
                    Transform data into actionable insights with powerful formulas,
                    charts, and graphs.
                    </p>
                    <div className="course-image">
                    <img src={msexcel} alt="ms excel" />
                    </div>
                    <Link to="/lms/courses/microsoftofficetools/microsoftexcel">Enroll</Link>
                </div>
                <div className="listed-courses">
                    <p className="course-header">Microsoft PowerPoint</p>
                    <p className="course-short-description">
                    Captivate your audience with dynamic presentations that tell your
                    story visually.
                    </p>
                    <div className="course-image">
                    <img src={mspowerpoint} alt="ms PowerPoint" />
                    </div>
                    <Link to="/lms/courses/microsoftofficetools/microsoftPowerPoint">Enroll</Link>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MicrosoftOfficeSuite;