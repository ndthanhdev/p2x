import * as otplib from "otplib";
import * as crypto from "crypto";

const otp = new otplib.Authenticator();
(<any>otp).options = {
    step: 1,
    crypto
};


export default otp;