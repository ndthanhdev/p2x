import * as bcrypt from "bcrypt-nodejs";
import * as uuid from "uuid";
import Bluebird = require("bluebird");
import { IAccountModel } from "../models/Account";

export const compareHash = Bluebird.promisify(bcrypt.compare);

export const generateJwt = async (account: IAccountModel) => {
    try {

        const jti = uuid.v1();
        account.jti = jti;
        await account.save();
        const payload = {
            
        }
    } catch (error) {

    }

}
