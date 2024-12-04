import React from "react";

const LmsAboutSection = () => {
    return (
        <>
        {/* Start of About Section */}
        <div id="about-section" className="about-section">
            <div className="about-container">
            <div className="about-header">About Us</div>
            <div className="about-body">
                <p className="about-text">
                Equip 1000 is a transformative project dedicated to bridging the
                digital divide and empowering educators with the tools and knowledge
                they need to thrive in the global digital arena. Our mission is
                simple: Equip 1,000 educators with laptops, Wi-Fi access, and
                comprehensive training programs to unlock their potential and
                revolutionize education.
                </p>
                <p id="moreText" className="hidden">
                We believe that every educator deserves the resources and support
                necessary to deliver high-quality education in today's digital world.
                By providing laptops, reliable internet access, and cutting-edge
                training, we empower educators to:
                <br />
                Embrace innovative teachingmethods: Equip educators with the skills
                and tools to integrate technology into their classrooms and develop
                engaging and interactive learning experiences.
                <br />
                Enhance student engagement: Foster a dynamic learning environment
                where students are actively involved in their learning and develop
                essential skills for the 21st century.
                <br />
                Promote digital literacy: Equip students and educators with the
                necessary knowledge and skills to navigate the digital world safely
                and effectively, preparing them for success in a technology-driven
                future.
                <br />
                Bridge the digital divide: Ensure that educators and students have
                access to essential technology, regardless of their socio-economic
                background.
                <br />
                Empower a global community of educators: Connect and collaborate with
                educators from around the world, sharing best practices and fostering
                a culture of innovation within the education sector.
                </p>
                {/* <button class="read-togle" onclick="toggleReadMore()">Read more...</button> */}
                <p className="read-togle" onclick="toggleReadMore()">
                Read more...
                </p>
            </div>
            </div>
        </div>
        </>
    )
}

export default LmsAboutSection;