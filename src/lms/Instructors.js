import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../assets/components/dashcomponent/LmsDashLeftSide";
import '../assets/css/lmsstyes/Instructors.css';
import mario from '../assets/img/mario.png';
import alexa from '../assets/img/alexa.png';
import john from '../assets/img/john.png';
import oghene from '../assets/img/oghene.png';
import eze from '../assets/img/oghene.png';
import etti from '../assets/img/etti.png';
import diana from '../assets/img/diana.png';
import hunter from '../assets/img/hunter.png';
import charlie from '../assets/img/charlie.png';

const Instructors = () => {
    return (
        <>
        <Helmet>
            <title>Instructors</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        <div className="content">
            <div className="main-screen">
                <div className="categories-container instructors-main">
                <div className="intsructors-container">
                    <div className="staff-header">
                    <p className="title">Meet Some of Our Top Instructors</p>
                    <p className="sub-title">
                        Our dedicated team of instructors is passionate about sharing their
                        knowledge and expertise with you. They come from diverse backgrounds
                        and have years of experience in their fields, ensuring you receive
                        the highest quality instruction and guidance on your learning
                        journey.
                    </p>
                    </div>
                    <div className="mentors-container">
                    <p className="mentors-head">Mentors</p>
                    <div className="mentors-body">
                        <div className="staff">
                        <img src={mario} alt="" />
                        <div className="staff-name">
                            <p>Mario Cook</p>
                        </div>
                        <div className="staff-bio">
                            <p>
                            Offers a listening ear and a helping hand, providing
                            encouragement and guidance as you navigate your learning
                            journey.
                            </p>
                        </div>
                        <a className="staff-contact" href="">
                            <p>CONTACT</p>
                        </a>
                        </div>
                        <div className="staff">
                        <img src={alexa} alt="" />
                        <div className="staff-name">
                            <p>Alexa Ebony</p>
                        </div>
                        <div className="staff-bio">
                            <p>
                            Possesses deep knowledge in her field and is passionate about
                            sharing her expertise with others.
                            </p>
                        </div>
                        <a className="staff-contact" href="">
                            <p>CONTACT</p>
                        </a>
                        </div>
                        <div className="staff">
                        <img src={john} alt="" />
                        <div className="staff-name">
                            <p>John Diggle</p>
                        </div>
                        <div className="staff-bio">
                            <p>
                            Provides valuable insights into career paths, offering
                            guidance on resume writing, interview skills, and professional
                            development.
                            </p>
                        </div>
                        <a className="staff-contact" href="">
                            <p>CONTACT</p>
                        </a>
                        </div>
                        <div className="staff">
                        <img src={oghene} alt="" />
                        <div className="staff-name">
                            <p>Oghene Osaruyi</p>
                        </div>
                        <div className="staff-bio">
                            <p>
                            Always ready to inspire you to reach your full potential,
                            fostering your confidence and helping you overcome challenges.
                            </p>
                        </div>
                        <a className="staff-contact" href="">
                            <p>CONTACT</p>
                        </a>
                        </div>
                        <div className="staff">
                        <img src={eze} alt="" />
                        <div className="staff-name">
                            <p>Eze Amadi</p>
                        </div>
                        <div className="staff-bio">
                            <p>
                            Values collaboration and works with you to set learning goals,
                            identify resources, and develop strategies for success.
                            </p>
                        </div>
                        <a className="staff-contact" href="">
                            <p>CONTACT</p>
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="mentors-container">
                    <p className="mentors-head">Mentors</p>
                    <div className="mentors-body">
                        <div className="staff">
                        <img src={etti} alt="" />
                        <div className="staff-name">
                            <p>Etty Fidele</p>
                        </div>
                        <div className="staff-bio">
                            <p>
                            Will ignite your imagination and encourage you to think
                            outside the box, providing opportunities for experimentation.
                            </p>
                        </div>
                        <a className="staff-contact" href="">
                            <p>CONTACT</p>
                        </a>
                        </div>
                        <div className="staff">
                        <img src={alexa} alt="" />
                        <div className="staff-name">
                            <p>Ireti Samue</p>
                        </div>
                        <div className="staff-bio">
                            <p>
                            Fosters understanding and appreciation for diverse
                            perspectives connecting you with people from various
                            backgrounds.
                            </p>
                        </div>
                        <a className="staff-contact" href="">
                            <p>CONTACT</p>
                        </a>
                        </div>
                        <div className="staff">
                        <img src={diana} alt="" />
                        <div className="staff-name">
                            <p>Diana Okoro</p>
                        </div>
                        <div className="staff-bio">
                            <p>
                            Stays ahead of the curve in the ever-evolving digital
                            landscape, sharing valuable insights on technology trends and
                            tools.
                            </p>
                        </div>
                        <a className="staff-contact" href="">
                            <p>CONTACT</p>
                        </a>
                        </div>
                        <div className="staff">
                        <img src={hunter} alt="" />
                        <div className="staff-name">
                            <p>Hunter Newton</p>
                        </div>
                        <div className="staff-bio">
                            <p>
                            Cultivates emotional well-being and self-awareness. He can
                            teach you stress management techniques and mindfulness
                            practices.
                            </p>
                        </div>
                        <a className="staff-contact" href="">
                            <p>CONTACT</p>
                        </a>
                        </div>
                        <div className="staff">
                        <img src={charlie} alt="" />
                        <div className="staff-name">
                            <p>Charllie Green</p>
                        </div>
                        <div className="staff-bio">
                            <p>
                            A continuous learner who inspires you to embrace lifelong
                            learning. He will encourage you to stay curious and keep
                            exploring.
                            </p>
                        </div>
                        <a className="staff-contact" href="">
                            <p>CONTACT</p>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Instructors;