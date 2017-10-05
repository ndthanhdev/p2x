import * as passport from "passport";

import { ExtractJwt, Strategy as JwtStrategy, StrategyOptions as JwtStrategyOptions } from "passport-jwt";
import { AccountModel } from "../models/Account";


export const JwtOptions: JwtStrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

passport.use(new JwtStrategy(JwtOptions, async (jwt_payload, next) => {
    try {
        const account = await AccountModel.findById(jwt_payload._id).exec();
        if (account.jwtid != jwt_payload.jwtid) {
            //  TokenId do not match
            return next(undefined);
        }
        return next(undefined, account);
    } catch (error) {
        return next(error);
    }
}));

/**
 * Login Required middleware.
 */
export let authMiddleware = passport.authenticate("jwt", { session: false });