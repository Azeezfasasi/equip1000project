import React from "react";
import logo from '../img/logo.png';

function Footer() {
    return (
        <>
        <footer class="footer-container">
            <div class="col-1">
            <div class="logo-title">
                <img src={logo} alt=""/>
                <p class="logo-text">EQUIP1000</p>
                <p class="sub-text">Empowering teacher’s professionalism for better productivity</p>
            </div>
            </div>
            <div class="col-2">
            <div class="contact-links">
                <p>Contact Us</p>
                <a href="mailto:Email: Uniekideasconsulting@gmail.com">Email: Uniekideasconsulting@gmail.com</a>
                <a href="">Twitter: @uniekideas</a>
                <a href="">Instagram: @Uniek</a>
            </div>
            <div class="about-links">
                <p>About Us</p>
                <a href="#">Transparency</a>
                <a href="#">Business consult</a>
                <a href="#">Empowerment</a>
                <a href="#">Education</a>
            </div>
            </div>
        </footer>
        </>
    )
}

export default Footer