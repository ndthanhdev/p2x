import {
    GraphQLList,
    GraphQLField,
    GraphQLFieldConfig
} from "graphql";
import { statusType } from "../../types/status";
import { StatusModel } from "../../../models/Status";

export const Statuss: GraphQLFieldConfig<any, any> = {
    type: new GraphQLList(statusType),
    resolve: async () => {
        try {
            const statuss = await StatusModel.find().exec();
            if (!statuss) {
                throw new Error("Error getting statuss");
            }
            return statuss;
        } catch (error) {
            throw error;
        }
    }
};