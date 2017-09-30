import { KioskModel } from "../models/Kiosk";
import * as bcrypt from "bcrypt-nodejs";
import Bluebird = require("bluebird");

export const makeAllKioskOffline = async () => {
    await KioskModel.update({}, { $set: { IsOnline: false } }, { multi: true }).exec();
};

export const compareHash = Bluebird.promisify(bcrypt.compare);