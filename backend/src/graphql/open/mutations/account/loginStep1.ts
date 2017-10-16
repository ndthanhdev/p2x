import * as validator from "validator";

import { GraphQLFieldConfig, GraphQLString, GraphQLBoolean } from "graphql";
import { AccountModel, IAccount } from "../../../../models/Account";
import otp from "../../../../config/otp";
import { sendTokenMail } from "../../../../utils/mail";
import { accountInputType } from "../../../types/account";

export const loginStep1: GraphQLFieldConfig<any, any> = {
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

            const account = await AccountModel.findOne(<IAccount>{
                email: args.data.email
            }).exec();
            if (!account) {
                throw "account doesn't exist";
            }
            if (!await account.comparePassword(args.data.password)) {
                throw "password incorrect";
            }

            account.secret = otp.generateSecret();
            await account.save();
            const token = otp.generate(account.secret);

            // send token to account email
            sendTokenMail(account.email, token);

            return true;
        } catch (error) {
            throw error;
        }
    }
};
