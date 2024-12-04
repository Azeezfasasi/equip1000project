import React from "react";
import LoginHeader from "../assets/components/LoginHeader";
import { Helmet } from 'react-helmet';
import EquipLeftSide from "../assets/components/EquipLeftSide";
import '../assets/css/EquipLeftSide.css';
import Login from "../assets/components/Login";
import '../assets/css/Login.css';
import ButtomNav from "../assets/components/ButtomNav";
import '../assets/css/ButtomNav.css';


function EquipLogin() {
    return (
      <>
      <Helmet>
        <title>Login</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="%PUBLIC_URL%/src/equiplogo.svg" type="image/svg+xml"/>
        <link rel="icon" href="%PUBLIC_URL%/assets/img/logo/Equiplogo.png" type="image/png" />
      </Helmet>
      <div className="App">
        <LoginHeader />
        <EquipLeftSide />
        <Login />
        <ButtomNav />
      </div>
      </>
    );
  }

export default EquipLogin;