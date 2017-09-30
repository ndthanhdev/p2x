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
            let kiosk = await KioskModel.findOne(<IKiosk>{ IC: args.data.IC });
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