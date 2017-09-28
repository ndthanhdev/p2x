import { Request, Response } from "express";
import { KioskModel, IKiosk } from "../models/Kiosk";
import { io } from "../server";

/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response) => {
    io.to("ic123").emit("Open Lock", 0);
    res.end("Ok");
};