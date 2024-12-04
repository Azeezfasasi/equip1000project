import React from "react";
import { Helmet } from "react-helmet";
import EquipLeftSide from "../assets/components/EquipLeftSide";
import DashHeader from "../assets/components/DashHeader";
import dellxps from '../assets/img/dell-xps-13-screen-lid1 1.png';
import { Link } from "react-router-dom";
import mifiimage from '../assets/img/mifi 1.png';

function ChooseMifi() {
    return (
        <>
        <Helmet>
            <title>Choose Mifi</title>
        </Helmet>
        <DashHeader />
        <EquipLeftSide />
        <div className="dash-right-side" style={{marginTop: "20px"}}>
        <div className="right-side">
            <div className="choose-container">
                <div className="top">
                    <div className="search">
                        <input
                        type="search"
                        id="searchInput"
                        placeholder="Search for a Mi-fi"
                        />
                        <div className="filter" />
                    </div>
                    </div>
                    <div className="back-to-mifi">
                    <Link to="/equip/ChooseLaptop">Apply for a Laptop</Link>
                    <div className="underline" />
                    </div>
                    <div className="bottom">
                    <ul id="itemList">
                        <li className="hidden">
                        <a href="choose-laptop.html">
                            <img src="../img/hp-pavilion-laptop.png" alt="" /> HP Laptop
                        </a>
                        </li>
                        <li className="hidden">
                        <a href="choose-laptop.html">
                            <img src="../img/dell-xps-laptop.png" alt="" /> Dell Laptop
                        </a>
                        </li>
                        <li className="hidden">
                        <a href="choose-mifi.html">
                            <img src="../img/mifi 1.png" alt="" /> MTN Mi-fi
                        </a>
                        </li>
                    </ul>
                    <p id="noResultsMessage" className="hidden">
                        <span className="fa-regular fa-face-frown" /> No devices found
                    </p>
                    <p className="title">Choose a Mi-fi</p>
                    <p className="sub-title">
                        Choose one of the available mi-fi that’s within your range of Income
                    </p>
                    </div>
                    <div className="laptop-product">
                    <div className="laptop">
                        <a className="cta" href="mi-fi-confirmation.html">
                        Apply Now
                        </a>
                        <img src={mifiimage} alt="" />
                        <div className="item-description">
                        <p className="detail">MTN Mi-fi</p>
                        <p className="price">₦20,000</p>
                        </div>
                    </div>
                    <div className="laptop">
                        <a className="cta" href="mi-fi-confirmation.html">
                        Apply Now
                        </a>
                        <img src={mifiimage} alt="" />
                        <div className="item-description">
                        <p className="detail">MTN Mi-fi</p>
                        <p className="price">₦20,000</p>
                        </div>
                    </div>
                    </div>
                    <div className="laptop-product">
                    <div className="laptop">
                        <a className="cta" href="mi-fi-confirmation.html">
                        Apply Now
                        </a>
                        <img src={mifiimage} alt="" />
                        <div className="item-description">
                        <p className="detail">MTN Mi-fi</p>
                        <p className="price">₦20,000</p>
                        </div>
                    </div>
                    <div className="laptop">
                        <a className="cta" href="mi-fi-confirmation.html">
                        Apply Now
                        </a>
                        <img src={mifiimage} alt="" />
                        <div className="item-description">
                        <p className="detail">MTN Mi-fi</p>
                        <p className="price">₦20,000</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ChooseMifi;