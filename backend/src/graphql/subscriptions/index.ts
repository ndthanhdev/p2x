import { GraphQLFieldConfigMap } from "graphql";
import { Status } from "./status";

export const subscriptions: GraphQLFieldConfigMap<any, any> = {
    ...Status
};