import { GraphQLFieldConfig } from "graphql";
import { kioskType, kioskInputType } from "../../types/kiosk";
import { KioskModel, IKioskModel, IKiosk } from "../../../models/Kiosk";

export const updateKiosk: GraphQLFieldConfig<any, any> = {
    type: kioskType,
    args: {
        data: {
            type: kioskInputType
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            // const kiosk = await KioskModel.findOneAndUpdate(<IKiosk>{ ICNo: args.data.ICNo }, args.data, { new: true }).exec();
            let kiosk = await KioskModel.findOne(<IKiosk>{ ICNo: args.data.ICNo });
            if (!kiosk) {
                return undefined;
            }

            kiosk.Secret = args.data.Secret;
            kiosk.Name = args.data.Name;
            kiosk = await kiosk.save();

            return kiosk;
        } catch (error) {
            throw error;
        }
    }
};