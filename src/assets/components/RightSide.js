import React from "react";

function  RightSide() {
    return (
        <>
        <div class="right-side">
            <div class="form-title">
                <p class="title">Log in</p>
                <p class="sub-title">Log in to your account using your email and password</p>
            </div>
            <div class="reg-form-container">
                <form style={{width: '100%'}} action="dashboard.html">
                    <div class="col-1" style={{width: '95%'}}>
                        <label for="uname">Username</label>
                        <input type="email" id="uname" name="uname" placeholder="Email or User ID" style={{width: '100%'}} autocomplete="email" required/>
                        
                        <label for="pwd">Password</label>
                        <div class="password-container">
                            <input type="password" id="pwd" name="pwd" placeholder="********" style={{width: '100%'}} autocomplete="current-password" required/>
                            <span class="password-toggle" onclick="togglePasswordVisibility('pwd')"><img src="../img/svg/visible-eye.svg" alt=""/></span>
                        </div>
                        
                    </div>
                    <div class="finish-next-btn">
                        <button type="submit">Log In</button>
                      </div>
                </form>
            </div>
              
        </div>
        </>
    )
}

export default RightSide;