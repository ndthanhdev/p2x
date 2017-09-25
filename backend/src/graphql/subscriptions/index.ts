import { GraphQLFieldConfigMap } from "graphql";
import { Status } from "./status";
import { Kiosk } from "./kiosk";

export const subscriptions: GraphQLFieldConfigMap<any, any> = {
    ...Status,
    ...Kiosk
};