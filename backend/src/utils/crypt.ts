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

        const jwtid = uuid.v1();
        account.jwtid = jwtid;
        await account.save();

        const payload: IJwtPayload = {
            id: account.id,
            email: account.email
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            jwtid: jwtid
        });

        return token;
    } catch (error) {
        throw error;
    }
};
