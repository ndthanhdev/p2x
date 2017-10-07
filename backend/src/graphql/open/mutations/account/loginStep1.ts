import * as validator from "validator";

import { GraphQLFieldConfig, GraphQLString, GraphQLBoolean } from "graphql";
import { AccountModel, IAccount } from "../../../../models/Account";
import otp from "../../../../config/otp";
import { sendTokenMail } from "../../../../utils/mail";

export const loginStep1: GraphQLFieldConfig<any, any> = {
    type: GraphQLBoolean,
    args: {
        email: {
            type: GraphQLString
        },
        password: {
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
