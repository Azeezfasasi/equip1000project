import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../assets/components/dashcomponent/LmsDashLeftSide";
import '../assets/css/lmsstyes/Messaging.css';

const Messaging = () => {
    return (
        <>
        <Helmet>
            <title>Messaging</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        <div className="content">
            <div className="main-screen">
                <div className="mobile-message-content">
                <div className="categories-container message-container">
                    <div className="tabs">
                    <button className="inbox-tablink" onclick="openTab('Inbox')">
                        Inbox
                    </button>
                    <button
                        className="new-message-tablink"
                        onclick="openTab('NewMessage')"
                    >
                        New Message
                    </button>
                    </div>
                    {/* Inbox message section */}
                    <div id="Inbox" className="tabcontent">
                    <div className="message-box">
                        <a href="" className="name">
                        <p>Zainab Usman</p>
                        </a>
                        <a href="" className="message">
                        <p>How far have you gone with the lectures?</p>
                        <p className="msg-count">+2</p>
                        </a>
                        <a className="delete" href="">
                        <i className="fa-regular fa-trash-can" />
                        </a>
                    </div>
                    <div className="message-box">
                        <a href="" className="name">
                        <p>Uche Clinton</p>
                        </a>
                        <a href="" className="message">
                        <p>What’s up</p>
                        <p className="msg-count" />
                        </a>
                        <a className="delete" href="">
                        <i className="fa-regular fa-trash-can" />
                        </a>
                    </div>
                    <div className="message-box">
                        <a href="" className="name">
                        <p>Idara Ozimandias</p>
                        </a>
                        <a href="" className="message">
                        <p>How far have you gone with the lectures?</p>
                        <p className="msg-count">+1</p>
                        </a>
                        <a className="delete" href="">
                        <i className="fa-regular fa-trash-can" />
                        </a>
                    </div>
                    </div>
                    {/* New message section */}
                    <div id="NewMessage" className="tabcontent new-msg-tab">
                    <div className="recipient-wrapper">
                        <p>To:</p>
                        <input type="text" />
                        <i className="fa-solid fa-magnifying-glass" />
                    </div>
                    <div className="subject-wrapper">
                        <p>Subject:</p>
                        <input type="text" />
                    </div>
                    <div className="message-wrapper">
                        <p>Message:</p>
                        <textarea
                        id="message"
                        name="message"
                        cols={30}
                        rows={10}
                        defaultValue={""}
                        />
                    </div>
                    <a className="login" href="">
                        Send Message
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Messaging;