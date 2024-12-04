import React from "react";
import { Helmet } from "react-helmet";
import EquipLeftSide from "../assets/components/EquipLeftSide";
import ButtomNav from "../assets/components/ButtomNav";
import DashHeader from "../assets/components/DashHeader";
import DashContent from "../assets/components/DashContent";

function Dashboard() {
    return (
        <>
        <Helmet>
            <title>My Dashboard</title>
        </Helmet>
        <DashHeader />
        <EquipLeftSide />
        <DashContent />
        <ButtomNav />
        </>
    )
}

export default Dashboard;