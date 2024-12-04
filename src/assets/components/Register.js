// import React from "react";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";

function Register() {
    const navigate = useNavigate();

    const FinishRegister = () => {
        navigate('/finishregister');
      };

    return (
        <>
        <div className="register-container">
            <div className="right-side">
                <div className="form-title">
                    <p className="title">Register</p>
                    <p className="sub-title">Input your details, so we can get to know you, and serve you better</p>
                </div>
                <div className="reg-form-container">
                    <form id="equipregForm" action="#">
                        <div className="col-1">
                            <label for="fname">Full name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Type in your full name" required/>

                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Type in your email address" required/>

                            <label for="gender">Gender</label>
                            <select name="gender" id="gender">
                                <option value="gender">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                            <label for="location">Location</label>
                            <select name="location" id="location">
                                <option value="location">Select Location</option>
                                <option value="Abia">Abia</option>
                                <option value="Abuja">Abuja</option>
                                <option value="Adamawa">Adamawa</option>
                                <option value="Akwa Ibom">Akwa Ibom</option>
                                <option value="Anambra">Anambra</option>
                                <option value="Bauchi">Bauchi</option>
                                <option value="Bayelsa">Bayelsa</option>
                                <option value="Benue">Benue</option>
                                <option value="Borno">Borno</option>
                                <option value="Cross River">Cross River</option>
                                <option value="Delta">Delta</option>
                                <option value="Ebonyi">Ebonyi</option>
                                <option value="Edo">Edo</option>
                                <option value="Ekiti">Ekiti</option>
                                <option value="Enugu">Enugu</option>
                                <option value="Gombe">Gombe</option>
                                <option value="Imo">Imo</option>
                                <option value="Jigawa">Jigawa</option>
                                <option value="Kaduna">Kaduna</option>
                                <option value="Kano">Kano</option>
                                <option value="Katsina">Katsina</option>
                                <option value="Kebbi">Kebbi</option>
                                <option value="Kogi">Kogi</option>
                                <option value="Kwara">Kwara</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Nasarawa">Nasarawa</option>
                                <option value="Niger">Niger</option>
                                <option value="Ogun">Ogun</option>
                                <option value="Ondo">Ondo</option>
                                <option value="Osun">Osun</option>
                                <option value="Oyo">Oyo</option>
                                <option value="Plateau">Plateau</option>
                                <option value="Rivers">Rivers</option>
                                <option value="Sokoto">Sokoto</option>
                                <option value="Taraba">Taraba</option>
                                <option value="Yobe">Yobe</option>
                                <option value="Zamfara">Zamfara</option>
                            </select>

                            <label for="whatsapp">WhatsApp number</label>
                            <input type="text" id="whatsapp" name="whatsapp" placeholder="Type in your whatsapp number" required/>

                            <label for="designation">Designation</label>
                            <input type="text" id="designation" name="designation" placeholder="Role at work" required/>
                        </div>
                        <div>

                        </div>
                        <div className="col-2">
                            <label for="institution">Institution category</label>
                            <select name="institution" id="institution">
                                <option value="institution">Select Institution</option>
                                <option value="tertiary">Tertiary Institution</option>
                                <option value="secondary">Secondary</option>
                                <option value="primary">Primary</option>
                            </select>

                            <label for="department">Department</label>
                            <select name="department" id="department">
                                <option value="department">Select Department</option>
                                <option value="academic">Academic</option>
                                <option value="school">School</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        <div className="next-btn">
                            <button onClick={FinishRegister} type="submit">Next</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Register;