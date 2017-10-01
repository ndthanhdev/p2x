import { GraphQLFieldConfig, GraphQLInt, GraphQLString } from "graphql";
import { KioskModel, IKiosk } from "../../../models/Kiosk";
import { ISafe } from "../../../models/Safe";
import { safeInputType } from "../../types/safe";

export const generatePasscode: GraphQLFieldConfig<any, any> = {
    type: GraphQLString,
    args: {
        data: {
            type: safeInputType
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            const model = await KioskModel.findOne(<IKiosk>{ IC: args.data.ic }).exec();
            if (!model) {
                throw `Kiosk with IC ${args.data.ic} didn't exist`;
            }

            if (args.data.no < 0) {
                throw "no must greather or equal 0"
            }

            if (args.data.expiredIn < 1) {
                throw "expiredIn must greather than 0"
            }

            const index = model.Safes.findIndex((value) => value.no === args.data.no);
            const passCode = randomPassCode();

            if (index < 0) {
                model.Safes.push(<ISafe>{
                    no: args.data.no,
                    passcode: passCode,
                    expired: getExpired(args.data.expiredIn)
                });
                await model.save();
            } else {
                model.Safes[index].passcode = passCode;
                model.Safes[index].expired = getExpired(args.data.expiredIn);
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