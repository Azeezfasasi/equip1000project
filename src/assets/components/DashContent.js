import React, { useState } from "react";
import '../css/DashContent.css';
import dell from '../img/dell-xps-laptop.png';
import hp from '../img/hp-pavilion-laptop.png';
import mifi from '../img/svg/mi-fi-transparent.svg';
import { Link } from "react-router-dom";

function DashContent() {
    const [activeItem, setActiveItem] = useState(null);
    const [activeItemTwo, setActiveItemTwo] = useState(null);
    const [activeItemThree, setActiveItemThree] = useState(null);

  const toggleAccordion = (index) => {
    // Toggle the active state for the clicked accordion item
    setActiveItem(activeItem === index ? null : index);
  };
  const toggleAccordionTwo = (index) => {
    // Toggle the active state for the clicked accordion item
    setActiveItemTwo(activeItemTwo === index ? null : index);
  };
  const toggleAccordionThree = (index) => {
    // Toggle the active state for the clicked accordion item
    setActiveItemThree(activeItemThree === index ? null : index);
  };

    return (
        <>
        <div className="dash-right-side">
            <div className="dashboard-mobile-top-section">
                <div className="title">Welcome to your Dashboard, Prince</div>
                <div className="sub-title">
                You can find your purchased devices and payment status here
                </div>
            </div>
            <div className="dashborad-title">
                <Link to="/equip/Welcome" className="title-text">
                Purchase a Device ⭢
                </Link>
            </div>
            <div className="dashboard-info">
                <div className="dashboard-products">
                <p className="title">Your Devices - 3</p>
                <div className="purchased-products">
                    <div className="items">
                    <img src={dell} alt="" />
                    <div className="item-description">
                        <p className="model">Dell XPS Laptop</p>
                        <p className="amount">N300,000</p>
                    </div>
                    </div>
                    <div className="items">
                    <img src={hp} alt="" />
                    <div className="item-description">
                        <p className="model">HP Pavilion Laptop</p>
                        <p className="amount">N500,000</p>
                    </div>
                    </div>
                    <div className="items">
                    <img src={mifi} alt="" />
                    <div className="item-description">
                        <p className="model">MTN Mi-fi</p>
                        <p className="amount">N20,000</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="payment-container">
                <div className="payment-box">
                    <div className="payment-status">
                    <p className="status">Payment Status</p>
                    </div>
                    <div className="color-code">
                    <div className="code-box">
                        <div className="green" />
                        <p>Payment Complete</p>
                    </div>
                    </div>
                    <div className="color-code" style={{ marginLeft: "-20px" }}>
                    <div className="code-box">
                        <div className="orange" />
                        <p className="orange-text">Payment In Progress</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="dash-breakdown">
                <div className="breakdown-box">
                    <div className={`accordion-item payment-item ${activeItem === 0 ? "active" : ""}`}>
                    <div
                        className="accordion-header dash-header"
                        onClick={() => toggleAccordion(0)}
                    >
                        <div className="green-color-box" />
                        <p>Dell XPS Laptop</p>
                        <span className="arrow">
                        <i className="fa fa-chevron-down" />
                        </span>
                    </div>
                    <div className="accordion-content dash-content">
                        <div className="payment-content">
                        <div className="row">
                            <p className="word">Total amount payable</p>
                            <p className="figure">N300,000</p>
                        </div>
                        <div className="row">
                            <p className="word">Installment agreement</p>
                            <p className="figure">6</p>
                        </div>
                        <div className="row">
                            <p className="word">Installment Paid</p>
                            <p className="figure">1/6</p>
                        </div>
                        <div className="row">
                            <p className="word">Total amount paid</p>
                            <p className="figure" style={{ color: "#20a612" }}>
                            N84,000
                            </p>
                        </div>
                        <div className="row">
                            <p className="word">Installments remaining</p>
                            <p className="figure">5/6</p>
                        </div>
                        <div className="row">
                            <p className="word">Total amount remaining</p>
                            <p className="figure" style={{ color: "#ff2727" }}>
                            N416,000
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="breakdown-box">
                    <div className={`accordion-item payment-item ${activeItemTwo === 0 ? "active" : ""}`}>
                    <div
                        className="accordion-header dash-header"
                        onClick={() => toggleAccordionTwo(0)}
                    >
                        <div className="green-color-box" />
                        <p>MTN Mi-Fi</p>
                        <span className="arrow">
                        <i className="fa fa-chevron-down" />
                        </span>
                    </div>
                    <div className="accordion-content dash-content">
                        <div className="payment-content">
                        <div className="row">
                            <p className="word">Total amount payable</p>
                            <p className="figure">N20,000</p>
                        </div>
                        <div className="row">
                            <p className="word">Installment agreement</p>
                            <p className="figure">4</p>
                        </div>
                        <div className="row">
                            <p className="word">Installment Paid</p>
                            <p className="figure">1/4</p>
                        </div>
                        <div className="row">
                            <p className="word">Total amount paid</p>
                            <p className="figure" style={{ color: "#20a612" }}>
                            N5,000
                            </p>
                        </div>
                        <div className="row">
                            <p className="word">Installments remaining</p>
                            <p className="figure">3/4</p>
                        </div>
                        <div className="row">
                            <p className="word">Total amount remaining</p>
                            <p className="figure" style={{ color: "#ff2727" }}>
                            N15,000
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="breakdown-box">
                    <div className={`accordion-item payment-item ${activeItemThree === 0 ? "active" : ""}`}>
                    <div
                        className="accordion-header dash-header"
                        onClick={() => toggleAccordionThree(0)}
                    >
                        <div className="orange-color-box" />
                        <p>Dell XPS Laptop</p>
                        <span className="arrow">
                        <i className="fa fa-chevron-down" />
                        </span>
                    </div>
                    <div className="accordion-content dash-content">
                        <div className="payment-content">
                        <div className="row">
                            <p className="word">Total amount payable</p>
                            <p className="figure">N500,000</p>
                        </div>
                        <div className="row">
                            <p className="word">Installment agreement</p>
                            <p className="figure">6</p>
                        </div>
                        <div className="row">
                            <p className="word">Installment Paid</p>
                            <p className="figure">1/6</p>
                        </div>
                        <div className="row">
                            <p className="word">Total amount paid</p>
                            <p className="figure" style={{ color: "#20a612" }}>
                            N84,000
                            </p>
                        </div>
                        <div className="row">
                            <p className="word">Installments remaining</p>
                            <p className="figure">5/6</p>
                        </div>
                        <div className="row">
                            <p className="word">Total amount remaining</p>
                            <p className="figure" style={{ color: "#ff2727" }}>
                            N416,000
                            </p>
                        </div>
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

export default DashContent;