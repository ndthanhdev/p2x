import otplib = require("otplib");
import * as crypto from "crypto";

const otp = otplib.authenticator;
(<any>otp).options = {
    step: 30
};


export default otp;