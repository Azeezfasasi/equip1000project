import React from "react";
import discoverimage from '../img/discoverimage.png';
import unlockimage from '../img/unlockimage.png';
import connectimage from '../img/connectimage.png';
import { useNavigate } from "react-router-dom";

const ValuePreposition = () => {
    const navigate = useNavigate();

    const applyNow = () => {
        navigate('/signup');
      };
    return (
        <>
        <div class="value-proposition-section">
            <p>Value Proposition</p>
            <div class="value-discover">
            <div class="value-image">
                <img src={discoverimage} alt="Discover Image" />
            </div>
            <div class="discover-details">
                <p class="title">Discover Tailored Professional development</p>
                <p class="sub-title">Immerse yourself in a curated selection of courses crafted to meet the evolving needs of modern educators. From Innovating teaching methodologies to cutting-edge technology Integration, Our courses will help elevate you and serve as your gateway to staying ahead in
                your field</p>
                <a class="btn" href="lms.html">Enroll now</a>
            </div>
            </div>

            <div class="value-discover">
            <div class="discover-details">
                <p class="title">Unlock possibilities with our loan program</p>
                <p class="sub-title">Access to technology should never be a barrier. That’s why we offer an exclusive laptop and mifi loan program. Apply today to receive the tools you need to create engaging lessons and connect with your students anytime, anywhere.</p>
                <a class="btn up" href="/signup">Apply now</a>
            </div>
            <div class="value-image value-up">
                <img src={unlockimage} alt="Discover Image"/>
            </div>
            </div>

            <div class="value-discover">
            <div class="value-image">
                <img src={connectimage} alt="Discover Image"/>
            </div>
            <div class="discover-details up">
                <p class="title">Connect and Collaborate with Like-Minded Educators</p>
                <p class="sub-title">IJoin a thriving community of Educators who shares your passion. Engage in meaningful conversations, share Insights and collaborate to learn how to Improve teaching experience. Together, we can shape the future of education and Inspire the next generation</p>
                <a class="btn" href="lms.html">Join now</a>
            </div>
            </div>
        </div>
        {/* End of Value Preposition Section */}

        {/* Start of Call to Action */}
        <div class="cta-container">
            <div class="cta-contents">
            <p class="title">Your Growth, Your Way</p>
            <p class="sub-title"><span>EQUIP1000</span> is more than just a project; It’s a dynamic ecosystem tailored to your professional Journey. Take control of your growth, embrace new opportunities and become the educator you aspire to be. Ready to embark on a transformative experience? Join <span>EQUIP1000</span> train today and be part of a community that believes in the power of empowered educators.</p>
            <a class="btn" href="/signup">Get started</a>
            </div>
        </div>
        </>
    )
}

export default ValuePreposition