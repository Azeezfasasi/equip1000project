import React from 'react';
import LmsHomeHeader from '../assets/components/LmsHomeHeader';
import '../assets/css/LmsHeader.css';
import LmsHero from '../assets/components/LmsHero';
import '../assets/css/LmsHero.css';
import { Helmet } from 'react-helmet';
import '../assets/css/LmsAboutSection.css';
import LmsAboutSection from '../assets/components/LmsAboutSection';
import LmsFooter from '../assets/components/LmsFooter';

function LmsHome() {
    return (
        <>
        <Helmet>
            <title>EQUIP LMS</title>
        </Helmet>
        <LmsHomeHeader />
        <LmsHero />
        <LmsAboutSection />
        <LmsFooter />
        </>
    )
}

export default LmsHome;