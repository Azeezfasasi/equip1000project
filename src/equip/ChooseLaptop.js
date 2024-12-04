import React from "react";
import { Helmet } from "react-helmet";
import EquipLeftSide from "../assets/components/EquipLeftSide";
import DashHeader from "../assets/components/DashHeader";
import dellxps from '../assets/img/dell-xps-13-screen-lid1 1.png';
import { Link } from "react-router-dom";

function ChooseLaptop() {
    return (
        <>
        <Helmet>
            <title>Choose Laptop</title>
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
                    placeholder="Search for a laptop"
                    />
                    <div className="filter" />
                </div>
                </div>
                <div className="back-to-mifi">
                <Link to="/equip/ChooseMifi">Apply for a Mi-fi</Link>
                <div className="underline" />
                </div>
                <div className="bottom">
                <ul id="itemList">
                    <li className="hidden">
                        <Link to="" href="choose-laptop.html">
                            <img src="" alt="" /> HP Laptop
                        </Link>
                    </li>
                    <li className="hidden">
                        <Link to="" href="choose-laptop.html">
                            <img src="../img/dell-xps-laptop.png" alt="" /> Dell Laptop
                        </Link>
                    </li>
                    <li className="hidden">
                        <Link to="" href="choose-mifi.html">
                            <img src="../img/mifi 1.png" alt="" /> MTN Mi-fi
                        </Link>
                    </li>
                </ul>
                <p id="noResultsMessage" className="hidden">
                    <span className="fa-regular fa-face-frown" /> No devices found
                </p>
                <p className="title">Choose a Laptop</p>
                <p className="sub-title">
                    Choose one of the available laptops that’s also within your range of
                    Income
                </p>
                </div>
                <div className="laptop-product">
                <div className="laptop">
                    <Link to="/equip/LaptopConfirmation" className="cta">
                    Apply Now
                    </Link>
                    <img src={dellxps} alt="" />
                    <div className="item-description">
                    <p className="detail">Dell XPS Laptop</p>
                    <p className="price">₦300,000</p>
                    </div>
                </div>
                <div className="laptop">
                    <Link to="/equip/LaptopConfirmation" className="cta">
                    Apply Now
                    </Link>
                    <img src={dellxps} alt="" />
                    <div className="item-description">
                    <p className="detail">Dell XPS Laptop</p>
                    <p className="price">₦300,000</p>
                    </div>
                </div>
                </div>
                <div className="laptop-product">
                <div className="laptop">
                    <Link to="/equip/LaptopConfirmation" className="cta">
                    Apply Now
                    </Link>
                    <img src={dellxps} alt="" />
                    <div className="item-description">
                        <p className="detail">Dell XPS Laptop</p>
                        <p className="price">₦300,000</p>
                    </div>
                </div>
                <div className="laptop">
                    <Link to="/equip/LaptopConfirmation" className="cta">
                    Apply Now
                    </Link>
                    <img src={dellxps} alt="" />
                    <div className="item-description">
                    <p className="detail">Dell XPS Laptop</p>
                    <p className="price">₦300,000</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>

        </>
    )
}

export default ChooseLaptop;