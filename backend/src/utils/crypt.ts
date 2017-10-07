import * as bcrypt from "bcrypt-nodejs";
import * as uuid from "uuid";
import * as jwt from "jsonwebtoken";
import Bluebird = require("bluebird");
import { IAccountModel } from "../models/Account";
import { IJwtPayload } from "../models/JwtPayload";
import * as passportConfig from "../config/passport";

export const compareHash = Bluebird.promisify(bcrypt.compare);

export const generateJwt = async (account: IAccountModel) => {
    try {

        const jti = uuid.v1();
        account.jti = jti;
        await account.save();

        const payload: IJwtPayload = {
            id: account.id,
            email: account.email,
            isAdmin: account.isAdmin
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            jwtid: jti
        });

        return token;
    } catch (error) {
        throw error;
    }
};
