import { GraphQLFieldConfig } from "graphql";
import { kioskType, kioskInputType } from "../../../types/kiosk";
import { KioskModel, IKioskModel } from "../../../../models/Kiosk";

export const addKiosk: GraphQLFieldConfig<any, any> = {
    type: kioskType,
    args: {
        data: {
            type: kioskInputType
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            const kiosk = await KioskModel.create(args.data);
            return kiosk;
        } catch (error) {
            throw error;
        }
    }
};