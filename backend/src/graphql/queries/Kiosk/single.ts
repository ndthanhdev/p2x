import { GraphQLFieldConfig, GraphQLList, GraphQLString } from "graphql";
import { kioskType } from "../../types/kiosk";
import { KioskModel, IKiosk } from "../../../models/Kiosk";

export const Kiosk: GraphQLFieldConfig<any, any> = {
    type: kioskType,
    args: {
        ICNo: {
            type: GraphQLString
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            const kiosk = await KioskModel.findOne(<IKiosk>{ ICNo: args.ICNo }).exec();
            return kiosk;
        } catch (error) {
            throw error;
        }
    }
};