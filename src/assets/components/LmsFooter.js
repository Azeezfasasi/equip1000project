import React from "react";
import logo from '../img/logo.png';

const LmsFooter = () => {
    return (
        <>
        {/* Start of Footer Section */}
        <footer className="footer-container">
            <div className="col-1">
            <div className="logo-title">
                <img src={logo} alt="" />
                <p className="logo-text">EQUIP1000</p>
                <p className="sub-text">
                Empowering teacher’s professionalism for better productivity
                </p>
            </div>
            </div>
            <div className="col-2">
            <div className="contact-links">
                <p>Stay in the Loop</p>
                <a href="">Subscribe to Newsletter</a>
                <a href="">Download the App</a>
                <a href="">Follow the Updates</a>
            </div>
            <div className="about-links">
                <p>Connect</p>
                <a href="#">Community Forum</a>
                <a href="#">Social Media</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="about-links">
                <p>Extras</p>
                <a href="#">Blog</a>
                <a href="#">Help Center</a>
                <a href="#">Resources</a>
            </div>
            </div>
        </footer>
        </>
    )
}

export default LmsFooter