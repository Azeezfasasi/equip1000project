import React from "react";
import '../assets/css/Welcome.css';
import { Helmet } from "react-helmet";
import EquipLeftSide from "../assets/components/EquipLeftSide";
import DashHeader from "../assets/components/DashHeader";
import chooselaptop from '../assets/img/laptop.png';
import choosemifi from '../assets/img/mi-fi.png';
import { Link } from "react-router-dom";


function Welcome() {
    return (
        <>
        <Helmet>
            <title>My Dashboard</title>
        </Helmet>
        <DashHeader />
        <EquipLeftSide />
        <div className="dash-right-side">
        <div className="right-side">
            <div className="welcome-container">
                <div className="top">
                <p className="first">
                    Stay <span>connected</span> and Improve your <span>efficiency</span>
                </p>
                <p className="second">
                    Stay connected with our mi-fi and laptops all on loan and you can pay
                    later
                </p>
                </div>
                <div className="product-container">
                <h3>Laptop</h3>
                <p>
                    Apply for a laptop to stay connected, plan lessons and get equipped with
                    better information to aid your work
                </p>
                <img src={chooselaptop} alt="" />
                <Link to="/equip/ChooseLaptop" href="choose-laptop.html" className="apply-btn">
                    <p>Apply Now</p>
                </Link>
                </div>
                <div className="product-container">
                <h3>Mi-fi</h3>
                <p>
                    Enjoy the flexibility of learning from anywhere with the mifi devices
                    for your continous development
                </p>
                <img src={choosemifi} alt="" />
                <a href="choose-mifi.html" className="apply-btn">
                    <p>Apply Now</p>
                </a>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Welcome;