import { GraphQLFieldConfig } from "graphql";
import { statusInputType, statusType } from "../../types/status";
import { StatusModel } from "../../../models/Status";


export const addStatus: GraphQLFieldConfig<any, any> = {
    type: statusType,
    args: {
        data: {
            type: statusInputType
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            const status = await StatusModel.create(args.data);
            return status;
        } catch (error) {
            throw error;
        }
    }
};