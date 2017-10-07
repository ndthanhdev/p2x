import * as passport from "passport";

import { ExtractJwt, Strategy as JwtStrategy, StrategyOptions as JwtStrategyOptions } from "passport-jwt";
import { AccountModel } from "../models/Account";
import { IJwtPayload } from "../models/JwtPayload";


export const JwtOptions: JwtStrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

passport.use(new JwtStrategy(JwtOptions, async (jwt_payload:IJwtPayload, next) => {
    try {
        const account = await AccountModel.findById(jwt_payload.id).exec();
        if (account.jti != jwt_payload.jti) {
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