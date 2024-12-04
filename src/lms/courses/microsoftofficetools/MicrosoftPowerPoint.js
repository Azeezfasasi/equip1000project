import React from "react";
import { Helmet } from "react-helmet";
import '../../../assets/css/lmsstyes/MicrosoftOfficeTools.css';
import LmsDashboardHeader from "../../../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../../../assets/components/dashcomponent/LmsDashLeftSide";
import { Link } from "react-router-dom";

function MicrosoftPowerPoint() {
    return(
        <>
        <Helmet>
            <title>Microsoft PowerPoint</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        <div className="courses-content mobile-course-content">
            <div className="main-screen">
                <div className="microsoft-container">
                <div className="microsoft-office-suite-header">
                    <p>Microsoft PowerPoint</p>
                </div>
                <div className="microsoft-office-suite-description">
                    <p>
                    <span className="one">
                        Ready to unlock the full potential of Microsoft PowerPoint?
                        <br />
                    </span>
                    <span className="two">
                        This comprehensive course is your one-stop guide to mastering this
                        essential tool, whether you're a complete beginner or looking to
                        refine your existing skills. From crafting professional documents to
                        automating repetitive tasks, you'll gain the knowledge and
                        confidence to tackle any project with ease.
                    </span>
                    </p>
                </div>
                <div className="course-description">
                    <p style={{ marginTop: 0 }} className="course-duration">
                    Course Duration: 34 Hrs
                    </p>
                </div>
                <div className="course-status">
                    <div className="status-color" />
                    <p>NOT STARTED</p>
                </div>
                <div className="course-video-intro">
                    <iframe
                    src="https://www.youtube.com/embed/j-ZAVHk5SaU?si=8Gw6Iacq4TMpbtdn"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                    />
                </div>
                <div className="listed-courses top-course">
                    <br />
                    <br />
                    <Link to="/lms/courses/microsoftofficetools/microsoftpowerpointcourse" href="microsoft-powerpoint-course.html">Start Course</Link>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MicrosoftPowerPoint;