import React from "react";
import { Helmet } from 'react-helmet';
import LoginHeader from '../assets/components/LoginHeader';
import EquipLeftSide from '../assets/components/EquipLeftSide';
import ButtomNav from '../assets/components/ButtomNav';
import Verify from "../assets/components/Verify";

function VerifyRegistration() {
    return (
        <>
        <Helmet>
        <title>Verify Registration</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="%PUBLIC_URL%/assets/img/logo/equiplogo.svg" type="image/svg+xml"/>
        <link rel="icon" href="%PUBLIC_URL%/assets/img/logo/Equiplogo.png" type="image/png" />
        </Helmet>
        <div className="App">
        <LoginHeader />
        <EquipLeftSide />
        <Verify />
        <ButtomNav />
        </div>
        </>
    )
} 

export default VerifyRegistration;