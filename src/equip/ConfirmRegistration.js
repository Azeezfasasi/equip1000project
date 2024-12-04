import React from "react";
import LoginHeader from "../assets/components/LoginHeader";
import EquipLeftSide from "../assets/components/EquipLeftSide";
import ButtomNav from "../assets/components/ButtomNav";
import { Helmet } from 'react-helmet';
import Confirm from '../assets/components/Confirm'

function ConfirmRegistration() {
    return (
        <>
        <Helmet>
        <title>Confirm Registration</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="%PUBLIC_URL%/assets/img/logo/equiplogo.svg" type="image/svg+xml"/>
        <link rel="icon" href="%PUBLIC_URL%/assets/img/logo/Equiplogo.png" type="image/png" />
        </Helmet>
        <LoginHeader />
        <EquipLeftSide />
        <Confirm />
        <ButtomNav />
        </>
    )
}

export default ConfirmRegistration;