import * as validator from "validator";

import { GraphQLFieldConfig, GraphQLString } from "graphql";
import { AccountModel, IAccount } from "../../../models/Account";
import otp from "../../../config/otp";

export const loginStep2: GraphQLFieldConfig<any, any> = {
    type: GraphQLString,
    args: {
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        token: {
            type: GraphQLString
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            if (!validator.isEmail(args.email)) {
                throw "email invalid";
            }
            args.email = validator.normalizeEmail(args.email);

            if (validator.isEmpty(args.password)) {
                throw "password invalid";
            }

            const account = await AccountModel.findOne(<IAccount>{
                email: args.email
            }).exec();
            if (!account) {
                throw "account doesn't exist";
            }
            if (!await account.comparePassword(args.password)) {
                throw "password incorrect";
            }



            return <boolean>otp.check(args.token, account.secret);;
        } catch (error) {
            throw error;
        }
    }
};