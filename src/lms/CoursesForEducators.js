import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../assets/components/dashcomponent/LmsDashLeftSide";
import CourseList from "./CourseList";
import '../assets/css/lmsstyes/CoursesForEducators.css';

function CoursesForEducators() {
    return (
        <>
        <Helmet>
            <title>Courses For Educators</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        <CourseList />
        </>
    )
}

export default CoursesForEducators;