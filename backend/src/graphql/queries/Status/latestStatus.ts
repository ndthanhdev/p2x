import {
    GraphQLList,
    GraphQLField,
    GraphQLFieldConfig,
    GraphQLString
} from "graphql";
import { statusType } from "../../types/status";
import { StatusModel } from "../../../models/Status";

export const LatestStatus: GraphQLFieldConfig<any, any> = {
    type: statusType,
    args: {
        ICNo: {
            type: GraphQLString
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            const status = await StatusModel.findOne({ ICNo: args.ICNo }).sort({ created_at: -1 }).exec();
            if (!status) {
                throw new Error("Error getting status");
            }
            return status;
        } catch (error) {
            throw error;
        }
    }
};