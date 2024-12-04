import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../../assets/components/dashcomponent/LmsDashLeftSide";

function MicrosoftInnovator() {
    return (
        <>
        <Helmet>
            <title>Micosoft Innovators - EQUIP</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        </>
    )
}

export default MicrosoftInnovator;