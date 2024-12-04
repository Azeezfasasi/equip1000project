import React from "react";
import arrowback from '../img/svg/arrowback.svg';
import arrowforward from '../img/svg/arrowforward.svg';
import speakerphone from '../img/svg/speakerphone.svg';
import gtranslatemobile from '../img/svg/gtranslatemobile.svg';

function ButtomNav() {
    return (
        <>
        <div class="mobile-bottom-nav-bar">
            <a href="#" class="bar-box">
                <img src={arrowback} alt=""/>
                <div class="nav-text">Back</div>
            </a>
            <a href="" class="bar-box">
                <img src={arrowforward} alt=""/>
                <div class="nav-text">Next</div>
            </a>
            <a href="" class="bar-box">
                <img src={speakerphone} alt=""/>
                <div class="nav-text">Read</div>
            </a>
            <a href="" class="bar-box">
                <img src={gtranslatemobile} alt=""/>
                <div class="nav-text">Translate</div>
            </a>
        </div>
        </>
    );
}

export default ButtomNav;