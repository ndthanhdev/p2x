import otplib = require("otplib");
import * as crypto from "crypto";

const otp = otplib.authenticator;
(<any>otp).options = {
    step: 300
};


export default otp;