import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../../assets/components/dashcomponent/LmsDashLeftSide";
import { Link } from "react-router-dom";

function PickAssessment() {
  return (
    <>
    <Helmet>
      <title>Pick Assessment</title>
    </Helmet>
    <LmsDashboardHeader />
    <LmsDashLeftSide />
    <div className="content assessment-main-content">
        <div className="categories-container assessment-container">
          <div className="assessment-instructions-header">
            <p className="assessment-title">Final Assessment</p>
            <p className="assessment-description">
              <span className="one">Conquering the Summit:</span>
              <br />
              <span className="two">Your Final Assessment Awaits</span>
            </p>
          </div>
          <div className="assessment-body">
            <p className="first pick-first">
              Just like scaling the real mountain, the final assessment presents an
              exciting challenge, a chance to prove your mastery of this essential
              tool.
              <br />
              The assessment will likely test your proficiency in all the areas
              covered in your course! So be sure you are ready for it!
              <br />
            </p>
            <p className="third mobile-third">
              <b>IMPORTANT POINTS TO NOTE:</b>
            </p>
            <ul>
              <li>
                ONCE YOUR TIME RUNS OUT OR YOU CLICK SUBMIT, IT CANNOT BE UNDONE, AND
                YOUR RESULT WILL COME UP IMMEDIATELY.
              </li>
              <li>
                IF YOU FAIL THE ASSESSMENT, YOU WILL NOT BE AWARDED YOUR CERTIFICATE,
                AND YOU CANNOT RETAKE THE ASSESSMENT UNTIL ONE MONTH AFTER YOUR LAST
                TRIAL.
              </li>
            </ul>
            <p />
            <div className="assessment-selection">
              <div className="assessment-box">
                <div className="row">
                  <p className="top-title">Course Title</p>
                  <p className="top-status">Course Status</p>
                  <p className="top-action">Action</p>
                </div>
                <div className="row">
                  <p className="title">Microsoft Word Assessment</p>
                  <p className="status">Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Microsoft Excel Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Microsoft PowerPoint Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Google Docs Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Google Form Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Google Sheets Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Google Slide Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Chat GPT Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Google Classroom Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Grammarly Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Quillionz Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Canva Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Kahoot Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Microsoft Innovative Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Google Slide Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">E-Book Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Instgram Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Linkedin Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">TikTok Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">YouTube Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Podcasts Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Google Slide Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Zoom Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Google Meet Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">WhatsApp Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
                <div className="row">
                  <p className="title">Amazon Chime Assessment</p>
                  <p className="status">Not Started</p>
                  <Link to="">Start</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default PickAssessment;