import {
    GraphQLList,
    GraphQLField,
    GraphQLFieldConfig,
    GraphQLString
} from "graphql";
import { statusType } from "../../types/status";
import { StatusModel, IStatus } from "../../../models/Status";

export const LatestStatus: GraphQLFieldConfig<any, any> = {
    type: statusType,
    args: {
        kioskIC: {
            type: GraphQLString
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            const status = await StatusModel.findOne(<IStatus>{ KioskIC: args.kioskIC }, undefined, { sort: { createdAt: -1 } }).exec();
            if (!status) {
                // throw new Error("Error getting status");
                return [];
            }
            return status;
        } catch (error) {
            throw error;
        }
    }
};