import * as otplib from "otplib";

const otp = new otplib.Authenticator();
(<any>otp).options = {
    step: 1
};


export default otp;