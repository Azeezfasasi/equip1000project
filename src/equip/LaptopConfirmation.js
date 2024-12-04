import React from "react";
import { Helmet } from "react-helmet";
import EquipLeftSide from "../assets/components/EquipLeftSide";
import DashHeader from "../assets/components/DashHeader";
import dellxps from '../assets/img/dell-xps-13-screen-lid1 1.png';
import { Link } from "react-router-dom";
import '../assets/css/LaptopConfirmation.css';

function MifiConfirmation() {
    return (
        <>
        <Helmet>
            <title>Laptop Confirmation</title>
        </Helmet>
        <DashHeader />
        <div className="confirm-content choose-lap-content">
            <div className="product-left">
                <div className="product-image">
                <img src="../img/dell-xps-13-screen-lid1 1.png" alt="" />
                </div>
                <p>Dell XPS Laptop </p>
                <div className="specification">
                <p className="title">Device Specs</p>
                <p className="sub-title">
                    Dell XPS 13 laptop is a windows 10 laptop with a 13.30inch display that
                    has a resolution of 3200 by 1800pixels. It is powered by a Corei5
                    processor and it comes with a 8gb of RAM. The Dell XPS 13 packs 128GB of
                    SSD storage. Graphics are powered by Intel Integrated HD graphics 520.
                </p>
                </div>
                <p className="price-label">Price</p>
                <p className="price">₦300,000</p>
            </div>
            <div className="product-details">
                <p className="title">Eligibility confirmation</p>
                <p className="sub-title">
                We need these details on your financial earnings to see if you are good
                fit for the laptop
                </p>
                <div className="product-options">
                <form action="laptop-checkout.html">
                    <div className="income">
                    <p>Monthly Income</p>
                    <div className="selection">
                        <select name="monthlyIncome" id="monthlyIncome" required="">
                        <option value="select">Select</option>
                        <option value="less">Below than 100,000</option>
                        <option value="more">Above than 100,000</option>
                        </select>
                    </div>
                    </div>
                    <div className="payment">
                    <p>How do you want to pay?</p>
                    <div className="selection">
                        <select name="paymentOption" id="paymentOption" required="">
                        <option value="select">Select</option>
                        <option value="6-month">6 Month Installments</option>
                        <option value="1-year">1 Year Installments</option>
                        </select>
                    </div>
                    </div>
                    <div className="col button-container">
                    <button id="" className="product-btn waves-effect waves-light">
                        Apply Now
                    </button>
                    </div>
                   
                </form>
                </div>
            </div>
        </div>

        </>
    )
}

export default MifiConfirmation;