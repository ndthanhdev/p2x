import * as validator from "validator";

import { GraphQLFieldConfig, GraphQLBoolean } from "graphql";
import { accountInputType } from "../../../types/account";
import { AccountModel, IAccount } from "../../../../models/Account";

export const createAccount: GraphQLFieldConfig<any, any> = {
    type: GraphQLBoolean,
    args: {
        data: {
            type: accountInputType
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            if (!validator.isEmail(args.data.email)) {
                throw "email invalid";
            }
            args.data.email = validator.normalizeEmail(args.data.email);

            if (validator.isEmpty(args.data.password)) {
                throw "password invalid";
            }

            const account = await AccountModel.create(<IAccount>{
                email: args.data.email,
                password: args.data.password
            });
            return true;
        } catch (error) {
            throw error;
        }
    }
};