import React from "react";
import { useNavigate } from 'react-router-dom';
import confirm from '../img/confirm.png';
import confirmicon from '../img/svg/confirmicon.svg';

function Confirm() {
    const navigate = useNavigate();
    const proceedToDashboard= () => {
      navigate('/dashboard');
    };
    return (
        <>
        <div class="register-container">
            <div className="right-side confirm-mobile">
                <div className="confirm-container">
                    <form id="confirmRedirect" action="#">
                        <div className="confirm-box">
                            <img className="confirm-laptop" src={confirm} alt="" />
                            <img
                            className="confirm-mobile-icon"
                            src={confirmicon}
                            alt=""
                            />
                            <p>
                            You have successfully registered your account, you can now move to
                            start the process of getting empowered
                            </p>
                            <button onClick={proceedToDashboard} type="submit">Continue to application</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        </>
    )
}

export default Confirm;