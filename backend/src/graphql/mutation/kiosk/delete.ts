import { GraphQLFieldConfig, GraphQLString } from "graphql";
import { kioskType, kioskInputType } from "../../types/kiosk";
import { KioskModel, IKioskModel, IKiosk } from "../../../models/Kiosk";

export const deleteKiosk: GraphQLFieldConfig<any, any> = {
    type: kioskType,
    args: {
        ICNo: {
            type: GraphQLString
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            const kiosk = await KioskModel.findOneAndRemove({ ICNo: args.ICNo }).exec();
            return kiosk;
        } catch (error) {
            throw error;
        }
    }
};