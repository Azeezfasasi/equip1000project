import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../assets/components/dashcomponent/LmsDashLeftSide";
import '../assets/css/lmsstyes/Certificate.css';
import imgagepreview from '../assets/img/img-preview-cert.png';
import cert2 from '../assets/img/cert-2.png';
import cert3 from '../assets/img/cert-3.png';
import cert4 from '../assets/img/cert-4.png';
import cert5 from '../assets/img/cert-5.png';


const Cerificate = () => {
    return (
        <>
        <Helmet>
            <title>Course Cerificates</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        <div className="content cert-main">
            <div className="main-screen">
                <div className="categories-container cert-container">
                <div className="certificates-section-header">
                    <p className="welcome-text">Hi, Prince!</p>
                    <p className="welcome-subtext">Celebrate Your Achievements!</p>
                    <p className="subtext">
                    This space is dedicated to showcasing your hard work, dedication, and
                    accomplishments as you navigate the exciting world of technology and
                    social media.
                    </p>
                </div>
                <div className="certificates-container">
                    <div className="box">
                    <img src={imgagepreview} alt="certificate" />
                    <a href="#">Download</a>
                    </div>
                    <div className="box">
                    <img src={cert2} alt="certificate" />
                    <a href="#">Download</a>
                    </div>
                    <div className="box">
                    <img src={cert3} alt="certificate" />
                    <a href="#">Download</a>
                    </div>
                    <div className="box">
                    <img src={cert4} alt="certificate" />
                    <a href="#">Download</a>
                    </div>
                    <div className="box">
                    <img src={cert5} alt="certificate" />
                    <a href="#">Download</a>
                    </div>
                </div>
                <div className="preview-pane">
                    <p className="preview-title">PREVIEW PANE</p>
                    <img src={imgagepreview} alt="certificate" />
                    <div className="cert-download-wrapper">
                    <a href="#" id="downloadLink">
                        Download
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Cerificate;