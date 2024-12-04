import React from "react";
import heroimage from '../img/heroimage.png';
import mobileheroimage from '../img/svg/mobileheroimage.svg';
import HeroStatistics from "./equipcomponents/HeroStatistics";

function HeroSection() {
  // const navigate = useNavigate();

  // const applyNow = () => {
  //     navigate('/signup');
  //   };
    return (
        <>
        {/* Start of hero section for large screen  */}
        <div className="equip-hero-container">
          <div className="equip-hero-sub-container">
            <div className="equip-hero">
                <div className="equip-hero-writeup-container">
                    <p className="equip-welcome">Unleash your tech potential with <span>EQUIP1000</span></p>
                    <p className="unlock-your-potential">Master in-demand tech skills &amp; launch your career with Equip1000. Get
                    expert training, projects, &amp; a device loan (if needed).</p>
                    <p className="equip-sub-text">Start building your future today!</p>
                    <HeroStatistics />
                    <div className="hero-cta">
                        <a href="/signup" className="equip-apply-now">Apply now</a>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img className="equip-hero-image" src={heroimage} />
            </div>
          </div>        
        </div>
      
        {/* Start of hero section for small screen  */}
        <div className="mobile-hero-container">
          <img className="mobile-hero-image" src={mobileheroimage} alt="hero image"/>
          <div className="mobile-hero-text">
            <div className="mobile-hero-title">
              <p>Join the empowerment train, and be equipped by the <span>EQUIP1000</span> Project</p>
            </div>
            <div className="mobile-sub-title">
              <p>This is a revolutionary platform designed to elevate educators to a new height. We believe in the transformative power of continous learning and community support</p>
            </div>
            <a className="mobile-hero-btn" href="equip1000/register.html">Apply Now</a>
          </div>
        </div>
        </>
    )
}

export default HeroSection