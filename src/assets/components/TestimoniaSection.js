import React from "react";
import adewuyiusman from '../img/adewuyiusman.png';
import nwakoracheal from '../img/nwakoracheal.png';
import balogungrace from '../img/balogungrace.png';
import adebobolamuhydeen from '../img/adebobolamuhydeen.png';
import aminumustapha from '../img/aminumustapha.png';
import stars from '../img/stars.png';

const TestimoniaSection = () => {
    return (
        <>
        <div className="beneficiaries-section">
            <p className="title">What our beneficiaries are saying</p>
            <div className="beneficiaries-row">
            <div className="t-box">
                <div className="title">
                    <img src={adewuyiusman} alt=""/>
                <div className="name-box">
                    <p className="name">Mr.Adewuyi Usman</p>
                    <p className="position">Teacher at Unity School</p>
                </div>
                </div>
                <div className="sub-text">
                    <p>Equip1000 project Initiatives really changed my classNameroom experience, I improved in my lecture delivery, classNameroom management and also having the right tools to enhance learning.</p>
                    <img src={stars} alt="stars"/>
                </div>
                </div>
            
                <div className="t-box" style={{backgroundColor: 'rgba(204, 229, 252, 0.4)'}}>
                <div className="title">
                    <img src={nwakoracheal} alt=""/>
                    <div className="name-box">
                    <p className="name">Mrs. Nwankwo Racheal</p>
                    <p className="position">Teacher at Unity School</p>
                    </div>
                </div>
                    <div className="sub-text">
                    <p>Equip1000 project Initiatives really changed my classNameroom experience, I improved in my lecture delivery, classNameroom management and also having the right tools to enhance learning.</p>
                    <img src={stars} alt="stars"/>
                    </div>
                </div>
            </div>

            <div className="beneficiaries-row-2">
            <div className="t-box" style={{background: 'rgba(255, 245, 204, 0.4)'}}>
                <div className="title">
                    <img src={balogungrace} alt=""/>
                <div className="name-box">
                    <p className="name">Mrs. Balogun Grace</p>
                    <p className="position">Teacher at Unity School</p>
                </div>
                </div>
                <div className="sub-text">
                    <p>Equip1000 project Initiatives really changed my classNameroom experience, I improved in my lecture delivery, classNameroom management and also having the right tools to enhance learning.</p>
                    <img src={stars} alt="stars"/>
                </div>
                </div>
            
                <div className="t-box" style={{backgroundColor: '#D3FCCF'}}>
                <div className="title">
                    <img src={adebobolamuhydeen} alt=""/>
                    <div className="name-box">
                    <p className="name">Mr. Adebobola Muhydeen</p>
                    <p className="position">Teacher at Unity School</p>
                    </div>
                </div>
                    <div className="sub-text">
                    <p>Equip1000 project Initiatives really changed my classNameroom experience, I improved in my lecture delivery, classNameroom management and also having the right tools to enhance learning.</p>
                    <img src={stars} alt="stars"/>
                    </div>
                </div>
                <div className="t-box" style={{backgroundColor: '#FEEDEC'}}>
                <div className="title">
                    <img src={aminumustapha} alt=""/>
                    <div className="name-box">
                    <p className="name">Mr. Aminu Mustapha</p>
                    <p className="position">Teacher at Unity School</p>
                    </div>
                </div>
                    <div className="sub-text">
                    <p>Equip1000 project Initiatives really changed my classNameroom experience, I improved in my lecture delivery, classNameroom management and also having the right tools to enhance learning.</p>
                    <img src={stars} alt="stars"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TestimoniaSection