import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { DTO } from "../dto/dto";
import { KioskModel, IKiosk } from "../models/Kiosk";
import * as uuid from "uuid";
import * as fromPasportConfig from "../config/passport";
import "express-validator";

/**
 * POST api/login
 * Sign in using email and password.
 */
export let postLogin = (req: Request, res: Response, next: NextFunction) => {
    req.assert("ICNo", "ICNo can't blank").notEmpty();
    req.assert("Secret", "Secret can't blank").notEmpty();
    const errors = req.validationErrors();

    if (errors) {
        // Parameter error
        return res.json(<DTO>{
            Code: 1,
            Data: errors
        });
    }
    KioskModel.findOne(<IKiosk>{ ICNo: req.body.ICNo }, (err, kiosk) => {
        if (err) {
            //  Database error
            return next(err);
        }
        if (!kiosk) {
            //  Kiosk isn't exist
            return res.json(<DTO>{
                Code: 2,
                Data: "Kiosk isn't exist"
            });
        }
        kiosk.compareSecret(req.body.Secret, (secret_err: Error, isMatch: boolean) => {
            if (secret_err) {
                return res.json(<DTO>{
                    Code: 3,
                    Data: "Kiosk isn't exist"
                });
            }
            if (isMatch) {
                const token = generateJwt(kiosk);
                return res.json(<DTO>{
                    Code: 0,
                    Data: token
                });
            }
            else {
                //  Secret isn't match
                return res.json(<DTO>{
                    Code: 4,
                });
            }
        });
    });
};

/**
 * Get Jwt for current User.
 */
export function generateJwt(kisok: IKiosk): string {
    const jwtId: string = uuid.v1();
    const payload = {
        ICNo: kisok.ICNo,
    };
    const token = jwt.sign(payload, fromPasportConfig.JwtOptions.secretOrKey, {
        jwtid: jwtId,
        // Todo: expiresIn
    });
    return token;
}