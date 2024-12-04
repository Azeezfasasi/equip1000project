// import React from "react";
// import React, { useState, useRef } from "react";
import React, { useState } from 'react';
import refericon from '../img/refericon.png';
import ContactCard from './equipcomponents/ContactCard';

function EquipLeftSide() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [referrerEmail, setReferrerEmail] = useState('');
    const [referredEmail, setReferredEmail] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [warning, setWarning] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const referFriend = () => {
        // Add your referral logic here
        // For example, you could set result, error, or warning based on the response
        setResult('Friend referred successfully!');
    };

    return (
        <>
        <div className="register-container">
            <div className="left-side login-side">
                <p>Your Equip1000 <span>Device Hub</span></p>
                <ContactCard />
                <div className="refer">
                    <img src={refericon} alt=""/>
                    <p className="refer-text">Refer your friends</p>
                    <p className="refer-subtext">Refer your friends and families who are educators to be part of this empowerment train and get some incentives</p>
                    <button className="refer-btn" onClick={openModal}>Refer Now</button>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h1 className="refer-title">Refer a Friend</h1>
                        <div id="referForm">
                            <label htmlFor="referrerEmail">Your Email:</label>
                            <input
                                type="email"
                                id="referrerEmail"
                                value={referrerEmail}
                                onChange={(e) => setReferrerEmail(e.target.value)}
                                required
                            /><br/>
                            <label htmlFor="referredEmail">Friend's Email:</label>
                            <input
                                type="email"
                                id="referredEmail"
                                value={referredEmail}
                                onChange={(e) => setReferredEmail(e.target.value)}
                                required
                            /><br/>
                            <div className="refer-btn-wrapper">
                                <button className='refer-btn' onClick={referFriend}>Refer</button>
                            </div>
                        </div>
                        <div id="result">{result}</div>
                        <div id="error">{error}</div>
                        <div id="warning">{warning}</div>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default EquipLeftSide;