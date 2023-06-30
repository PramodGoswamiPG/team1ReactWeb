import React from "react";
import {  useNavigate } from "react-router-dom";

const EnterOTP=()=>{

    const navigator= useNavigate();

    const enterOTPLogin=()=>{
        const  token="3453trtrtr345345345";
        localStorage.setItem("USER_TOKEN",token);
        navigator('/dashboard');
    }

    return(
        <div className="container mt-5 col-md-4">
            <div class="form-group">
                <label for="enterOTP">Enter OTP</label>
                <input type="number" class="form-control" id="enterOTP" aria-describedby="emailHelp" placeholder="Enter OTP" />
            </div>
            <button type="button" onClick={()=>enterOTPLogin()} class="btn btn-primary">Login</button>
        </div>
    );
}

export default EnterOTP;