import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../assets/components/LmsDashHeader";
import '../assets/css/LmsDashHeader.css';
import LmsDashLeftSide from "../assets/components/dashcomponent/LmsDashLeftSide";
import '../assets/css/LmsDashLeftSide.css';
import ButtomNav from '../assets/components/ButtomNav';
import LmsDashWelcome from "../assets/components/dashcomponent/LmsDashWelcome";
import '../assets/css/dashstyles/LmsDashWelcome.css';
import LmsAnnouncement from "../assets/components/dashcomponent/LmsAnnouncement";
import '../assets/css/dashstyles/LmsAnnouncement.css';
// import CompletedCourse from "../assets/components/dashcomponent/CompletedCourses";
import '../assets/css/dashstyles/CompletedCourses.css';
// import '../assets/css/dashstyles/NoteSection.css';
// import gtranslate from '../img/gtranslate.png';
// import gtranslate from '../assets/img/gtranslate.png';
// import '../assets/css/dashstyles/CalendarWidget.css';
// import CalendarWidget from "../assets/components/dashcomponent/CalendarWidget";

function LmsDashboard() {
    return (
        <>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        <LmsDashWelcome />
        <ButtomNav />  
        </>
    )
}

export default LmsDashboard;