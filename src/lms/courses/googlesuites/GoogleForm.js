import React from "react";
import LmsDashboardHeader from "../../../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../../../assets/components/dashcomponent/LmsDashLeftSide";

function GoogleForm() {
  return (
    <>
    <Helmet>
      <title>Google Forms</title>
    </Helmet>
    <LmsDashboardHeader />
    <LmsDashLeftSide />
    <div className="content mobile-course-content">
        <div className="main-screen">
          <div className="microsoft-container">
            <div className="microsoft-office-suite-header">
              <p>Google Forms</p>
            </div>
            <div className="microsoft-office-suite-description">
              <p>
                <span className="one">
                  Ready to unlock the full potential of Google Forms
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
              <a href="google-form-course.html">Start Course</a>
            </div>
          </div>
        </div>
    </div>

    </>
  )
}

export default GoogleForm;