// import React from 'react';
import { useNavigate } from 'react-router-dom';
import React from "react";

function FinishRegistration() {
    const navigate = useNavigate();
  
    const backToRegister = () => {
      navigate('/signup');
    };

    const proceedToVerify = () => {
        navigate('/verifyregistration')
    }
    return (
        <>
        <div class="register-container">
            <div className="right-side right-finish">
                <div className="form-title">
                    <p className="title">Register</p>
                    <p className="sub-title">
                    Finish your account setup by setting your password
                    </p>
                </div>
                <div
                    className="finish-reg-form-container finish-container"
                >
                    <form
                    id="finishReg"
                    onsubmit="return validatePassword()"
                    action="#"
                    style={{ width: "100%" }}
                    >
                    <p id="passwordCheck" />
                    <div className="col-1 f-col-1" style={{ width: "87%" }}>
                        <label htmlFor="pwd">Password</label>
                        <div className="password-container">
                        <input
                            type="password"
                            id="pwd"
                            name="c-pwd"
                            style={{ width: "100%" }}
                            placeholder="Enter password"
                            required=""
                        />
                        <span
                            className="password-toggle"
                            onclick="togglePasswordVisibility('pwd')"
                        >
                            <img src="../img/svg/visible-eye.svg" alt="" />
                        </span>
                        </div>
                        <label htmlFor="c-pwd">Confirm Password</label>
                        <div className="password-container">
                        <input
                            type="password"
                            id="c-pwd"
                            name="c-pwd"
                            style={{ width: "100%" }}
                            placeholder="Enter password"
                            required=""
                        />
                        <span
                            className="password-toggle"
                            onclick="togglePasswordVisibility('c-pwd')"
                        >
                            <img src="../img/svg/visible-eye.svg" alt="" />
                        </span>
                        </div>
                    </div>
                    <div className="finish-reg-previous-btn">
                        <button onClick={backToRegister} href="register.html">Previous</button>
                    </div>
                    <div className="finish-reg-btn">
                        <button onClick={proceedToVerify} type="submit">Next</button>
                    </div>
                    </form>
                </div>
            </div>

        </div>
        </>
    )
}

export default FinishRegistration;