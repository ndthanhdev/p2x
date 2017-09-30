import { GraphQLFieldConfig, GraphQLInt, GraphQLString } from "graphql";
import { KioskModel, IKiosk } from "../../../models/Kiosk";
import { ISafe } from "../../../models/Safe";

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

            const index = model.Safes.findIndex((value) => value.no === args.no);
            const passCode = randomPassCode();

            if (index < 0) {
                // throw `Safe isn't exist`;
                model.Safes.push(<ISafe>{
                    no: args.no,
                    passcode: passCode
                });
                await model.save();
            } else {
                model.Safes[index].passcode = passCode;
                await model.save();
            }

            return passCode;
        } catch (error) {
            throw error;
        }
    }
};

function randomPassCode(length: number = 6): string {
    const min = Math.pow(10, length);
    return "" + Math.floor(min + 9 * min * Math.random());
}