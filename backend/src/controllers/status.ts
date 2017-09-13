import { Request, Response } from "express";
import { IStatus, StatusModel } from "../models/Status";
import { KioskModel, IKiosk } from "../models/Kiosk";
import { DTO } from "../dto/dto";
import { ISafeStatus } from "../models/SafeStatus";


export const postStatus = async (req: Request, res: Response) => {
    try {
        const status:IStatus = req.body;
        const kiosk = await KioskModel.findOne(<IKiosk>{ ICNo: status.KioskICNo }).exec();
        if (!kiosk) {
            res.send(<DTO>{ Code: 1, Data: "Kiosk does not exist" });
        } else {
            await StatusModel.create(status);
            res.send(<DTO>{ Code: 0 });
        }
    } catch (error) {
        res.send(<DTO>{ Code: 2, Data: error });
    }
};

// export const postStatus = (req: Request, res: Response) => {

//     let status = <IStatus>req.body.status;
//     KioskModel.fin({ ICNo: status.KioskICNo }).then((res) => {
//         StatusModel.create(status);

//     },
//         (err) => {
//             res.send(<DTO>{ Code: 1, Data: "Kiosk does not exist" });
//         });
// };