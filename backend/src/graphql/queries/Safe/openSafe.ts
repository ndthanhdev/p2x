import { GraphQLFieldConfig, GraphQLBoolean, GraphQLString, GraphQLInt } from "graphql";
import { KioskModel, IKiosk } from "../../../models/Kiosk";
import * as socket from "../../../socket";

export const openSafe: GraphQLFieldConfig<any, any> = {
    type: GraphQLBoolean,
    args: {
        ic: {
            type: GraphQLString
        },
        no: {
            type: GraphQLInt
        },
        passcode: {
            type: GraphQLString
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            const model = await KioskModel.findOne(<IKiosk>{ IC: args.ic }).exec();
            if (!model) {
                throw `Kiosk with IC ${args.ic} doesn't exit`;
            }

            const index = model.Safes.findIndex((value) => value.no === args.no);
            if (index < 0) {
                throw `There's not Safe ${args.no} on Kiosk ${args.ic}`;
            }

            if (!await model.Safes[index].comparePasscode(args.passcode)) {
                throw "Passcode is incorrect";
            }

            const now = new Date();
            if (model.Safes[index].expired.getTime() < now.getTime()) {
                throw "Passcode expired";
            }

            return socket.openSafe(args.ic, args.no);
        } catch (error) {
            throw error;
        }
    }
};