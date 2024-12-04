import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../assets/components/dashcomponent/LmsDashLeftSide";
import '../assets/css/lmsstyes/Assessment.css';
import { Link } from "react-router-dom";

const Assessment = () => {
    return (
        <>
        <Helmet>
            <title>Assessment</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        <div className="content">
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
            <p className="first">
              Just like scaling the real mountain, the final assessment presents an
              exciting challenge, a chance to prove your mastery of this essential
              tool.
              <br />
              <br />
              This isn't just a test; it's a celebration of your skills and an
              opportunity to showcase your creative voice. Imagine, with each task
              conquered, another notch on your metaphorical pickaxe, one step closer
              to the summit.
              <br />
              <br />
              Before embarking on your assessment, familiarize yourself with the
              terrain. Take some time to:
            </p>
            <ul>
              <li>
                Review the assessment format: Understand the types of tasks, scoring
                criteria, and any specific instructions to avoid surprises.
              </li>
              <li>
                Refresh your knowledge: Revisit fundamental skills like text
                formatting, document layout, and advanced features like styles and
                macros.
              </li>
              <li>
                Prepare your tools: Choose a comfortable environment with a strong
                internet signal, minimal distractions and ensure your software is
                updated.
              </li>
            </ul>
            <br />
            <br />
            <p />
            <p className="second">
              The assessment will likely test your proficiency in all the areas
              covered in your course! So be sure you are ready for it!
            </p>
            <p className="third">Remember:</p>
            <ul>
              <li>
                Stay calm and focused: Don't panic if you encounter difficulties. Take
                a deep breath, reread the instructions, and approach the problem
                systematically.
              </li>
              <li>
                Read carefully: Before starting any task, read the instructions
                thoroughly to understand exactly what's expected.
              </li>
              <li>
                Proofread ruthlessly: Don't underestimate the power of a final check.
                Proofread your work for any typos, formatting inconsistencies, or
                grammatical errors.
              </li>
              <li>
                Embrace the challenge: View the assessment as an opportunity to learn
                and grow. Every question answered correctly is a step closer to
                mastery.
              </li>
            </ul>
            <span>
              So, take a deep breath, gear up, and conquer the Microsoft Word Final
              Assessment! The breathtaking view from the summit awaits.
            </span>
            <p />
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
            <p className="third mobile-last">
              Once you've completed the assessment, take a moment to celebrate! You've
              faced the challenge and emerged victorious. But don't stop there. Use
              this experience as a springboard to continue honing your skills,
              exploring new features, and mastering the ever-evolving world of
              Microsoft Word.
            </p>
            <Link to="/lms/assessment/PickAssessment" className="assessment-link">
              <div>CLICK HERE TO START YOUR ASSESSMENT</div>
            </Link>
          </div>
        </div>
    </div>
    </>
    )
}

export default Assessment;