import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroimage from "../img/heroimage.jpg";
import "../css/lmsstyes/LoginSignUpPopup.css";
import cancel from "../img/svg/Cancel.svg";
import person from '../img/svg/person.svg';
import emailicon from '../img/svg/email.svg';
import registerlock from '../img/svg/register-lock.svg';

const LmsHero = () => {
  const [isLoginPopupVisible, setLoginPopupVisible] = useState(false);
  const [isSignUpPopupVisible, setSignUpPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginerror, setLoginError] = useState("");
  const [signuperror, setSignUpError] = useState("");

  const toggleLoginPopup = () => {
    setLoginPopupVisible(!isLoginPopupVisible);
    setSignUpPopupVisible(false); // Close the SignUp popup if it's open
  };

  const toggleSignUpPopup = () => {
    setSignUpPopupVisible(!isSignUpPopupVisible);
    setLoginPopupVisible(false); // Close the Login popup if it's open
  };

  const handleLogin = () => {
    // Add authentication logic here (if needed)
    // if (!email || !password) {
    //     setLoginError("Both fields are required.");
    //     return;
    // }
    // setLoginError(""); // Clear error message
    navigate("/lms/lmsdashboard"); // Navigate to the dashboard
  };

  const handleSignUp = () => {
    // Add registration logic here (if needed)
    // if (!email || !password) {
    //     setSignUpError("All fields are required.");
    //     return;
    // }
    // setSignUpError(""); // Clear error message
    navigate("/lms/lmsdashboard"); // Navigate to the dashboard
  };

  return (
    <>
      {/* Start of hero section for large screen */}
      <div className="hero-container">
        <div className="hero">
          <div className="hero-writeup-container">
            <h1>
              Welcome to <span>EQUIP1000</span> Learning Management System (LMS)
            </h1>
            <p className="unlock-your-potential">Unlock Your Potential</p>
            <p className="sub-text">
              This is your gateway to endless knowledge, transformative skills, and
              personal growth. Explore a world of curated courses, interactive
              learning experiences, and a supportive community, all conveniently
              accessible right here on our Learning Management System (LMS).
            </p>
            <div className="cta" id="blur">
              <div className="sign-up" onClick={toggleSignUpPopup}>
                Sign Up
              </div>
              <div className="hero-lms-login" onClick={toggleLoginPopup}>
                Login
              </div>
            </div>
          </div>
        </div>
        <img className="hero-image" src={heroimage} />
      </div>
      {/* Start of hero section for small screen */}
      <div className="mobile-hero-section">
        <div className="mobile-hero-container">
          <div className="mobile-hero-content">
            <div className="mobile-hero-header">
              <p className="title">
                Welcome to <span>EQUIP1000</span> Learning Management System (LMS)
              </p>
              <p className="sub-title">Unlock Your Potential</p>
            </div>
            <div className="mobile-hero-body">
              This is your gateway to endless knowledge, transformative skills, and
              personal growth. Explore a world of curated courses, interactive
              learning experiences, and a supportive community, all conveniently
              accessible right here on our Learning Management System (LMS).
            </div>
          </div>
        </div>
        <div className="hero-cta">
          <div className="signup-onboarding-cta" onClick={toggleSignUpPopup}>
            <div className="sign-up">
              Sign Up
            </div>
          </div>
          <div className="login-onboarding-cta" onClick={toggleLoginPopup}>
            <div className="l-log-in">
              Log In
            </div>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      {isLoginPopupVisible && (
        <div className="login-popup">
          <img
            className="close-btn"
            onClick={toggleLoginPopup}
            src={cancel}
            alt="Close"
          />
          <div className="form-element">
            <h2>Login</h2>
            <form>
                {/* Start of error */}
                {/* {loginerror && <p className="popup-error-message">{loginerror}</p>} */}
              <div className="email">
                <img src={emailicon} alt="Email" />
                <input
                  type="email"
                  id="loginEmail"
                  name="loginEmail"
                  placeholder="Email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="password">
                <img src={registerlock} alt="Password" />
                <input
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                />
              </div>
              <div className="check-container">
                <input type="checkbox" />
                <div className="remember-me">Remember me</div>
              </div>
              <div className="forget-container">
                <a className="forgot-password" href="#">
                  Forgot Password
                </a>
              </div>
              <button type="button" className="submit-container" onClick={handleLogin}>
                <p className="p-login">Login</p>
              </button>
              <div className="bottom-account">
                <p>
                  Don’t have an account yet?{" "}
                  <div className="sign-up" onClick={toggleSignUpPopup} style={{cursor: "pointer"}}>
                    Sign Up
                  </div>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Signup Popup */}
      {isSignUpPopupVisible && (
        <div className="signup-popup">
          <img
            className="close-btn"
            onClick={toggleSignUpPopup}
            src={cancel}
            alt="Close"
          />
          <div className="form-element">
            <h2>Registration</h2>
            <form>
                {/* Start of error */}
                {/* {signuperror && <p className="popup-error-message">{signuperror}</p>} */}
              <div className="name">
                <img src={person} alt="Name" />
                <input
                  type="text"
                  id="regFirstName"
                  name="regFirstName"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="email">
                <img src={emailicon} alt="Email" />
                <input
                  type="email"
                  id="regEmail"
                  name="regEmail"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="password">
                <img src={registerlock} alt="Password" />
                <input
                  type="password"
                  id="regPassword"
                  name="regPassword"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="check-container">
                <input type="checkbox" required/>
                <div className="remember-me">
                  I agree to the terms &amp; conditions
                </div>
              </div>
              <button type="button" className="submit-container" onClick={handleSignUp}>
                <p className="p-login">Sign Up</p>
              </button>
              <div className="bottom-account">
                <p>
                  Have an account?{" "}
                  <div className="sign-up" onClick={toggleLoginPopup} style={{cursor: "pointer"}}>
                    Login
                  </div>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LmsHero;
