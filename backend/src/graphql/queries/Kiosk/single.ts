import { GraphQLFieldConfig, GraphQLList, GraphQLString } from "graphql";
import { kioskType } from "../../types/kiosk";
import { KioskModel, IKiosk } from "../../../models/Kiosk";

export const Kiosk: GraphQLFieldConfig<any, any> = {
    type: kioskType,
    args: {
        ic: {
            type: GraphQLString
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            const kiosk = await KioskModel.findOne(<IKiosk>{ IC: args.ic }).exec();
            return kiosk;
        } catch (error) {
            throw error;
        }
    }
};