import { GraphQLFieldConfig, GraphQLInt, GraphQLString, GraphQLBoolean } from "graphql";
import * as socket from "../../../socket";
import { KioskModel, IKiosk } from "../../../models/Kiosk";

export const forceOpenSafe: GraphQLFieldConfig<any, any> = {
    type: GraphQLBoolean,
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

            const index = model.Safes.findIndex((value) => value.no === args.no);
            if (index < 0) {
                throw `There's not Safe ${args.no} on Kiosk ${args.ic}`;
            }

            return socket.openSafe(args.ic, args.no);
        } catch (error) {
            throw error;
        }
    }
};