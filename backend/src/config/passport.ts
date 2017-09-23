import * as passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy, StrategyOptions as JwtStrategyOptions } from "passport-jwt";

export const JwtOptions: JwtStrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};