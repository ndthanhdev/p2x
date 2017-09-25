import { KioskModel } from "../models/Kiosk";

export const makeAllKioskOffline = async () => {
    await KioskModel.update({}, { $set: { IsOnline: false } }, { multi: true }).exec();
};