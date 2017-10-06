import { GraphQLFieldConfig, GraphQLInt, GraphQLString, GraphQLFloat } from "graphql";
import { KioskModel, IKiosk } from "../../../../models/Kiosk";
import { ISafe } from "../../../../models/Safe";
import { safeInputType } from "../../../types/safe";

export const generatePasscode: GraphQLFieldConfig<any, any> = {
    type: GraphQLString,
    args: {
        ic: {
            type: GraphQLString
        },
        no: {
            type: GraphQLInt
        },
        expiredIn: {
            type: GraphQLFloat
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            const model = await KioskModel.findOne(<IKiosk>{ IC: args.ic }).exec();
            if (!model) {
                throw `Kiosk with IC ${args.ic} didn't exist`;
            }

            if (args.no < 0) {
                throw "no must greather or equal 0";
            }

            if (args.expiredIn <= 0) {
                throw "expiredIn must greather than 0";
            }

            const index = model.Safes.findIndex((value) => value.no === args.no);
            const passCode = randomPassCode();

            if (index < 0) {
                model.Safes.push(<ISafe>{
                    no: args.no,
                    passcode: passCode,
                    expired: getExpired(args.expiredIn)
                });
                await model.save();
            } else {
                model.Safes[index].passcode = passCode;
                model.Safes[index].expired = getExpired(args.expiredIn);
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

function getExpired(expiredIn: number): Date {
    return new Date(new Date().getTime() + expiredIn * 3600000);
}