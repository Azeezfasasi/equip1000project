// import React from "react";
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Verify() {
    const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const digit4Ref = useRef(null);

  const handleInputChange = (e, nextInputRef) => {
    if (e.target.value.length === 1 && nextInputRef) {
      nextInputRef.current.focus();
    }
  };

  const confirmCode = () => {
    // Handle code confirmation logic here
    // console.log("Code confirmed!");
    document.getElementById('codeConfirmation');
  };

  const navigate = useNavigate();
    const proceedToConfirm = () => {
      navigate('/confirmregistration');
    };

    return (
        <>
        <div className="register-container">
            <div className="right-side verify-mobile">
                <div className="verify-container">
                    <form id="verifyForm" action="#">
                    <div className="verify-top">
                        <p className="title">Verify your email address</p>
                        <p className="sub-title">
                        Kindly Input the 4-digit pin that was sent to your email address
                        </p>
                    </div>
                    <div className="code">
                        <input
                        type="text"
                        id="digit1"
                        name="number"
                        maxLength={1}
                        ref={digit1Ref}
                        onChange={(e) => handleInputChange(e, digit2Ref)}
                        required
                        />
                        <input
                        type="text"
                        id="digit2"
                        name="number"
                        maxLength={1}
                        ref={digit2Ref}
                        onChange={(e) => handleInputChange(e, digit3Ref)}
                        required
                        />
                        <input
                        type="text"
                        id="digit3"
                        name="number"
                        maxLength={1}
                        ref={digit3Ref}
                        onChange={(e) => handleInputChange(e, digit4Ref)}
                        required
                        />
                        <input
                        type="text"
                        id="digit4"
                        name="number"
                        maxLength={1}
                        ref={digit4Ref}
                        onChange={(e) => handleInputChange(e, null)}
                        required
                        />
                    </div>
                    <div className="confirm-btn">
                        <button onClick={proceedToConfirm}>Confirm</button>
                    </div>
                    <p className="confirm-success" id="codeConfirmation" onClick={confirmCode} />
                    </form>
                </div>
            </div>

        </div>
        </>
    )
}

export default Verify;