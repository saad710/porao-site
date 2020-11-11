import React from 'react';
import { Link } from 'react-router-dom';
import porao_logo from "./images/porao-logo.png";
import otp_image from "./images/undraw_secure_login_pdn4 1.png";
import "./VerifyOtp.css";

const VerifyOtp = () => {
    return (
        <div className="otp-container">
            <Link to="/home">
            <div className="top-logo-image">
                <img className="top-logo-otp" src={porao_logo} alt=""/>
            </div>
            </Link>
            <div className="otp-mid-item">
                <div className="row mid-content-otp">
                    <div className="col-md-6">
                        <img className="otp-img" src={otp_image} alt=""/>
                    </div>
                    <div className="col-md-6 otp-verification">
                       <div className="otp-content">
                            <h3>Enter Varification Code</h3>
                            <br/>
                            <p style={{fontWeight:"600"}}>We have send a Six digit verification code
                             to your email address.</p> <br/>
                       </div>
                       <br/>
                       <div className="otp-field-container" style={{display:"flex",alignItems: "center"}}>
                           <div className="otp-field">
                                <input className="form-control input-otp" type="text" maxlength="1" value="0" required/>
                           </div>
                           <div className="otp-field">
                               <input className="form-control input-otp" type="text" maxlength="1" placeholder="-" required/>
                           </div>
                           <div className="otp-field">
                               <input className="form-control input-otp" type="text" maxlength="1" placeholder="-" required/>
                           </div>
                           <div className="otp-field">
                               <input className="form-control input-otp" type="text" maxlength="1" placeholder="-" required/>
                           </div>
                           <div className="otp-field">
                               <input className="form-control input-otp" type="text" maxlength="1" placeholder="-" required/>
                           </div>
                           <div className="otp-field">
                               <input className="form-control input-otp" type="text" maxlength="1" placeholder="-" required/>
                           </div>
                       </div>
                       <br/>
                       <div className="otp-lower-content">
                           <p>Don't receive the OTP? <span><a href="" style={{textDecoration:"none",color:"#ff8a00"}}>Resend OTP</a></span></p>
                           <br/>
                           <input className="btn btn-warning verify-btn" type="submit" value="Verify"/>
                       </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyOtp;