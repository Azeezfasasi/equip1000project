import React from "react";
import renmoneytrans from '../img/renmoneytrans.png';
import clan from '../img/clan.png';
import lease from '../img/lease.png';

function OurPartners() {
    return (
        <>
        {/* Start of Our Partners Section */}
        <div class="partners-section">
            <p class="our-partnerships">Our partnerships</p>
            <div className="partners-logo">
                <img class="renmoney" src={renmoneytrans} />
                <img class="clan" src={clan} />
                <img class="lease" src={lease} />
            </div> 
        </div>
        </>
    )
}

export default OurPartners 