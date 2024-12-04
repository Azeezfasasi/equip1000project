import React from "react";
import course from '../img/course.png';
import { Link } from "react-router-dom";

function KeyFeatures() {
    return (
        <>
        {/* Start of Key Features*/}
        <div className="product-features-section">
        <p className="key-features-title">Key features of our product</p>
        <div className="feauture-section">
            <div className="features-single">
            <div className="inner-box">
                <img className="features-section-image" src={course} alt=""/>
                <p className="features-title">Courses</p>
                <p className="feature-sub-title">Dive into a range of professional development courses at your own pace, we provide a wide range of courses to help in your professional development</p>
                <Link to="/lms/LmsHome" className="features-btn">Enroll Now</Link>
            </div>
            
            </div>
            <div className="features-single">
            <div className="inner-box">
                <img className="features-section-image" src={course} alt=""/>
                <p className="features-title">Loan programs</p>
                <p className="feature-sub-title">Get access to Laptops and MI-fi to enhance your digital capability even with no money. We provide you with these devices and you can pay later.</p>
                <a className="features-btn" href="/signup">Apply now</a>
            </div>
            </div>
            <div className="features-single">
            <div className="inner-box">
                <img className="features-section-image" src={course} alt=""/>
                <p className="features-title">Community</p>
                <p className="feature-sub-title">Connect with fellow Educators, and grow together. We provide a platform where our Educators get to connect with like minded Individuals.</p>
                <Link to="/lms/LmsHome" className="features-btn" href="lms.html">Join now</Link>
            </div>
            </div>
        </div>     
        </div>
            
        </>
    )
}

export default KeyFeatures