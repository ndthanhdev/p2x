import { Request, Response } from "express";
import { KioskModel, IKiosk } from "../models/Kiosk";

/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response) => {
    // res.end("Ok");
    await KioskModel.create(<IKiosk>{
        ICNo: "ic1234",
        IsSensor: false,
        Name: "kiosk",
        Secret: "password",
        IsOnline: false
    });
    res.send(await KioskModel.findOne({ ICNo: "ic1234" }).exec());

};