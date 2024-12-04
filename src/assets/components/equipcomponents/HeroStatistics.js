import React from "react";
import '../../css/HeroStatistics.css';
import statimage1 from '../../img/svg/statimage1.svg';
import statimage2 from '../../img/svg/statimage2.svg';
import statimage3 from '../../img/svg/statimage3.svg';
import statimage4 from '../../img/svg/statimage4.svg';
import statimage5 from '../../img/svg/statimage5.svg';

function HeroStatistics() {
    return (
        <>
        <div class="frame-container">
            <div class="image-frame">
                <img class="image-style" src={statimage1} />
                <img class="image-style image-margin-left" src={statimage2} />
                <img class="image-style image-margin-left" src={statimage3} />
                <img class="image-style image-margin-left" src={statimage4} />
                <img class="image-style image-margin-left" src={statimage5} />
            </div>
            <div class="text-description">
                Currently training over 5000 students across Africa
            </div>
        </div>
        </>
    )
}

export default HeroStatistics;