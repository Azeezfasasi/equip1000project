import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../../assets/components/dashcomponent/LmsDashLeftSide";

function KahootForEducators() {
    return (
        <>
        <Helmet>
            <title>Kahoot For Educators - EQUIP</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        </>
    )
}

export default KahootForEducators;