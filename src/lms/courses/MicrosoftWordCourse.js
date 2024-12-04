import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../../assets/components/dashcomponent/LmsDashLeftSide";
import mscurrentpage from '../../assets/img/ms-current-page.png';
import { Link } from "react-router-dom";

function MicrosoftWordCourse() {
    return (
        <>
        <Helmet>
            <title>Microsoft Word</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        <div className="courses-content mobile-course-content">
  <div className="main-screen">
    <div className="microsoft-container">
      <div className="microsoft-office-suite-header">
        <p>Microsoft Word</p>
      </div>
      <div className="microsoft-office-suite-description ms-description">
        <p>
          <span className="one">
            Ready to unlock the full potential of Microsoft Word?
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
        <p>IN PROGRESS</p>
      </div>
      <div className="course-video-intro">
        <a href="" className="mark-as-complete">
          Mark as Completed
        </a>
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
        <a href="">Save Video</a>
      </div>
      {/* section for course document slider */}
      <div className="course-document">
        <div className="slider">
          <div className="page">
            <img src={mscurrentpage} alt="Current page" />
            <div className="page-tracker">
              <p>1/80</p>
            </div>
          </div>
          <div className="page">
            <img src={mscurrentpage} alt="Current page" />
            <div className="page-tracker">
              <p>2/80</p>
            </div>
          </div>
          <div className="page">
            <img src={mscurrentpage} alt="Current page" />
            <div className="page-tracker">
              <p>3/80</p>
            </div>
          </div>
        </div>
        <button className="prev-btn" onclick="slidePrevious()">
          <i className="fa-solid fa-caret-left" />
        </button>
        <button className="next-btn" onclick="slideNext()">
          <i className="fa-solid fa-caret-right" />
        </button>
      </div>
      <a className="save-pdf" href="">
        Save PDF
      </a>
      <Link to="/lms/assessment" className="quiz-link">Take Quiz</Link>
    </div>
  </div>
</div>

        </>
    )
}

export default MicrosoftWordCourse;