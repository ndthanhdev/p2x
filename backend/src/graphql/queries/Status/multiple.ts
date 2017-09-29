import {
    GraphQLList,
    GraphQLField,
    GraphQLFieldConfig,
    GraphQLString
} from "graphql";
import { statusType } from "../../types/status";
import { StatusModel, IStatus } from "../../../models/Status";

export const Statuss: GraphQLFieldConfig<any, any> = {
    type: new GraphQLList(statusType),
    args: {
        IcNo: {
            type: GraphQLString
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            const statuss = await StatusModel.find(<IStatus>{ ICNo: args.ICNo }).exec();
            if (!statuss) {
                throw new Error("Error getting statuss");
            }
            return statuss;
        } catch (error) {
            throw error;
        }
    }
};