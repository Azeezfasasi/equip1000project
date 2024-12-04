import React from "react";
import { Helmet } from "react-helmet";
import LmsDashboardHeader from "../assets/components/LmsDashHeader";
import LmsDashLeftSide from "../assets/components/dashcomponent/LmsDashLeftSide";
import CourseOverview from "../assets/components/lmscomponets/CourseOverview";

const Courses = () => {
    return (
        <>
        <Helmet>
            <title>Equip Courses</title>
        </Helmet>
        <LmsDashboardHeader />
        <LmsDashLeftSide />
        <CourseOverview />
        </>
    )
}

export default Courses;