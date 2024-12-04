import React from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate('/dashboard');
      };
    return (
        <>
        <div className="login-register-container">
            <div className="right-side">
                <div className="form-title">
                    <p className="title">Log in</p>
                    <p className="sub-title">Log in to your account using your email and password</p>
                </div>
                <div className="l-reg-form-container">
                    <form action="dashboard.html">
                        <div className="col-1" style={{width: '95%'}} >
                            <label for="uname">Username</label>
                            <input type="email" id="uname" name="uname" placeholder="Email or User ID" style={{width: '100%', marginBottom: '-20px'}} autocomplete="email" required/>
                            
                            <label for="pwd">Password</label>
                            <div className="password-container">
                                <input type="password" id="pwd" name="pwd" placeholder="********" style={{width: '100%'}} autocomplete="current-password" required/>
                                <span className="password-toggle" onclick="togglePasswordVisibility('pwd')"><img src="../img/svg/visible-eye.svg" alt=""/></span>
                            </div>
                            
                        </div>
                        <div className="finish-next-btn">
                            <button onClick={goToDashboard} type="submit">Log In</button>
                        </div>
                    </form>
                </div>
                
            </div>
            </div>
        </>
    )
}

export default Login;