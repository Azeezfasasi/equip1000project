// import React, { useEffect } from 'react';
// import React, { useEffect, useRef } from 'react';
import React, { useRef } from 'react';

function LmsAnnouncement() {
    const containerRef = useRef(null);

  const expandToFillScreen = () => {
    if (containerRef.current) {
      containerRef.current.style.height = 'auto'; // Set height to auto to allow it to expand based on content
      containerRef.current.style.paddingBottom = '50px'; // Set bottom padding
    }
  };

  const mobileContainerRef = useRef(null);
  const mobileExpandToFillScreen = () => {
    if (containerRef.current) {
        mobileContainerRef.current.style.height = 'auto'; // Set height to auto to allow it to expand based on content
        mobileContainerRef.current.style.paddingBottom = '320px'; // Set bottom padding
    }
  };
    return (
        <>
        {/* Announcement Section for large screen */}
                <div className="announcement-section">
                    <div className="announcement-header">
                        <p>Announcements</p>
                    </div>
                    <div className="announcements-container" id="announcementsContainer" ref={containerRef}>
                        <div className="announcements-group">
                            <p className="label">Important!!</p>
                            <div className="text">
                                <li>
                                    Your registration expires in 3 weeks, do well to complete your
                                    courses and claim your certificate.
                                </li>
                            </div>
                        </div>
                        <div className="announcements-group">
                            <p style={{ color: "#20a612" }} className="label">
                            Notice
                            </p>
                            <div className="text">
                                <li>
                                    You are 40 minutes away from your first certification. Keep going!
                                </li>
                            </div>
                        </div>
                        <div className="announcements-group">
                            <p style={{ color: "#e6900f" }} className="label">
                            Notice
                            </p>
                            <div className="text">
                                <li>
                                    Don't miss our mandatory Orientation Program taking place on [Date]
                                    at [Time] in [Location]. This program will provide you with an
                                    overview of any subject of your choice.
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="announcement-btn-wrapper">
                        <a href="javascript:void(0)"
                        onClick={expandToFillScreen}
                        style={{ cursor: 'pointer' }}
                        >
                            Expand to fill screen
                            
                        </a>
                    </div>
                </div>

                {/* Announcement Section for small screen */}
                <div className="mobile-announcement-container" id="mobileAnnouncement" ref={mobileContainerRef}>
                    <div className="mobile-announcement-header">
                        <div className="title">Announcements</div>
                        <div className="sub-title" onClick={mobileExpandToFillScreen}
                        style={{ cursor: 'pointer' }}>
                            Tap here to view announcements{" "}
                            <img className="rotate" src="img/svg/arrow_drop_down.svg" alt="" />
                        </div>
                    </div>
                    <div className="mobile-announcements-box">
                        <div className="notice-box">
                            <div className="label">
                                <div className="important">Important!!</div>
                            </div>
                            <div className="input-field">
                                <div className="text-box">
                                    <div className="text-box-2">
                                    Your registration expires in 3 weeks, do well to complete your
                                    courses and claim your certificate.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="notice-box">
                            <div className="label">
                                <div className="notice">Notice</div>
                            </div>
                            <div className="input-field2">
                                <div className="text-box">
                                    <div className="text-box-2">
                                    You are 40 minutes away from your first certification. Keep going!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="notice-box">
                            <div className="label">
                                <div className="notice2">Notice</div>
                            </div>
                            <div className="input-field3">
                                <div className="text-box">
                                    <div className="text-box-2">
                                    Don't miss our mandatory Orientation Program taking place on
                                    [Date] at [Time] in [Location]. This program will provide you with
                                    an overview of any subject of your choice.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Announcement Section for small screen */}
        </>
    )
}

export default LmsAnnouncement;