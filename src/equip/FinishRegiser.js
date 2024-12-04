import React from "react";
import { Helmet } from 'react-helmet';
import FinishRegistration from "../assets/components/FinishRegistration";
import LoginHeader from "../assets/components/LoginHeader";
import EquipLeftSide from "../assets/components/EquipLeftSide";
import ButtomNav from "../assets/components/ButtomNav";



function FinishRegister() {
    return (
        <>
        <Helmet>
        <title>Finsih Registration</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="%PUBLIC_URL%/equiplogo.svg" type="image/svg+xml"/>
        <link rel="icon" href="%PUBLIC_URL%/assets/img/logo/Equiplogo.png" type="image/png" />
        </Helmet>
        <LoginHeader />
        <EquipLeftSide />
        <FinishRegistration />
        <ButtomNav />
        </>
    );
}

export default FinishRegister;

