import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../../assets/components/dashcomponent/LmsDashLeftSide";

function GoogleSuite() {
    return (
        <>
        <Helmet>
            <title>Google Suite - EQUIP</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        </>
    )
}

export default GoogleSuite;