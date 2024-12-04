import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../../assets/components/dashcomponent/LmsDashLeftSide";

function VirtualLeaningPlatforms() {
    return (
        <>
        <Helmet>
            <title>Virtual Leaning Platforms - EQUIP</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        </>
    )
}

export default VirtualLeaningPlatforms;