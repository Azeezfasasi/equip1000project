import React, { useState } from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../assets/components/dashcomponent/LmsDashLeftSide";
import '../assets/css/lmsstyes/Settings.css';
import GeneralSettings from "./settings-tabs/GeneralSettings";
import Profile from "./settings-tabs/Profile";
import Security from "./settings-tabs/Security";
import Notification from "./settings-tabs/Notification";
import ExportData from "./settings-tabs/ExportData";
import Logout from "./settings-tabs/Logout";

const Settings = () => {
    // State to track active setting
  const [activeSetting, setActiveSetting] = useState("General");

  // Handler to update the active setting
  const handleSettingClick = (setting) => {
    setActiveSetting(setting);
  };
    return (
        <>
        <Helmet>
            <title>Settings</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        <div className="content">
            <div className="dash-others">
                <div className="account-settings">Account settings</div>
                <div className="manage-your-general-profile-security-and-notification-settings">Manage your general, profile, security and notification settings.</div>
                <div className="settings-wrapper">
                    {/* Left sidebar with the list of settings */}
                    <div className="settings-container">
                        <div className="settings-list">
                        <div
                            className={`settings-item ${activeSetting === "General" ? "active" : ""}`}
                            onClick={() => handleSettingClick("General")}
                        >
                            <div className="settings-label">General</div>
                        </div>
                        <div
                            className={`settings-item ${activeSetting === "Profile" ? "active" : ""}`}
                            onClick={() => handleSettingClick("Profile")}
                        >
                            <div className="settings-label">Profile</div>
                        </div>
                        <div
                            className={`settings-item ${activeSetting === "Security" ? "active" : ""}`}
                            onClick={() => handleSettingClick("Security")}
                        >
                            <div className="settings-label">Security</div>
                        </div>
                        <div
                            className={`settings-item ${activeSetting === "Notification" ? "active" : ""}`}
                            onClick={() => handleSettingClick("Notification")}
                        >
                            <div className="settings-label">Notification</div>
                        </div>
                        <div
                            className={`settings-item ${activeSetting === "Export Data" ? "active" : ""}`}
                            onClick={() => handleSettingClick("Export Data")}
                        >
                            <div className="settings-label">Export Data</div>
                        </div>
                        <div
                            className={`settings-item ${activeSetting === "Saved Password" ? "active" : ""}`}
                            onClick={() => handleSettingClick("Saved Password")}
                        >
                            <div className="settings-label">Saved Password</div>
                        </div>
                        <div
                            className={`settings-item ${activeSetting === "Log Out" ? "active" : ""}`}
                            onClick={() => handleSettingClick("Log Out")}
                        >
                            <div className="settings-label">Log Out</div>
                        </div>
                    </div>
                </div>

                    {/* Right-side panel for the selected setting */}
                    <div className="settings-panel">
                        {activeSetting === "General" && <div><GeneralSettings /></div>}
                        {activeSetting === "Profile" && <div><Profile /></div>}
                        {activeSetting === "Security" && <div><Security /></div>}
                        {activeSetting === "Notification" && <div><Notification /></div>}
                        {activeSetting === "Export Data" && <div><ExportData /> </div>}
                        {activeSetting === "Saved Password" && <div>Saved Password Settings Content</div>}
                        {activeSetting === "Log Out" && <div><Logout /></div>}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Settings;