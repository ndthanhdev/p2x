import { GraphQLFieldConfig, GraphQLInt, GraphQLString } from "graphql";
import { KioskModel, IKiosk } from "../../../models/Kiosk";

export const generatePasscode: GraphQLFieldConfig<any, any> = {
    type: GraphQLString,
    args: {
        ic: {
            type: GraphQLString
        },
        no: {
            type: GraphQLInt
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            const model = await KioskModel.findOne(<IKiosk>{ IC: args.ic }).exec();
            if (!model) {
                throw `Kiosk with IC ${args.ic}`;
            }

            return "ok";
        } catch (error) {

        }
    }
};