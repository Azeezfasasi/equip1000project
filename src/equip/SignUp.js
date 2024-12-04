import React from "react";
import { Helmet } from 'react-helmet';
import EquipLeftSide from "../assets/components/EquipLeftSide";
import '../assets/css/EquipLeftSide.css';
import ButtomNav from "../assets/components/ButtomNav";
import '../assets/css/ButtomNav.css';
import SignupHeader from "../assets/components/SignupHeader";
import Register from "../assets/components/Register";
import '../assets/css/Register.css';
import '../assets/css/EquipLeftSide.css';

function SignUp() {
    return (
        <>
        <Helmet>
        <title>Sign Up</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="%PUBLIC_URL%/assets/img/logo/equiplogo.svg" type="image/svg+xml"/>
        <link rel="icon" href="%PUBLIC_URL%/assets/img/logo/Equiplogo.png" type="image/png" />
        </Helmet>
        <div className="App">
            <SignupHeader />
            <EquipLeftSide />
            <Register />
            <ButtomNav />
        </div>
        </>
    )
}

export default SignUp;