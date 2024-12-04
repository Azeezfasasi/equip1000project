import React, { useState, useEffect } from "react";

function Profile() {    
    return (
        <>
        <div className="settings-profile-title">Avatar</div>
        <div className="profile-sub-title">Update your avatar by clicking the image below. 288x288 px size recommended in PNG or JPG format only.</div>

        <form>
            <div className="s-profile-image">
                <div className="s-profile-icon-wrapper">
                    <img className="profile-icon" src="" />
                    <input type="file" accept="image/*" onChange="" />
                </div>
            </div>
            {/* Display the uploaded image dynamically */}
            <div className="s-profile-picture">
                <h4>Profile Picture Preview:</h4>
                {/* If no uploaded image, display the default placeholder image */}
                <img src="" alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%', border: "2px solid #ccc", padding: "2px" }} />
            </div>
            
            <button className="remove-image-btn">
                Remove Image
            </button>
        
            <input type="text" className="security-input" placeholder="First name" />
            <input type="text" className="security-input" placeholder="Last Name"/>
            <input type="text" className="security-input" placeholder="Email Address"/>
            <button type="submit" className="security-btn">
                <div className="save-changes">Save changes</div>
            </button>
        </form>
        </>
    )
}

export default Profile;