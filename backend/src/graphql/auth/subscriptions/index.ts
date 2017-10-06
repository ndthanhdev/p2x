import { GraphQLFieldConfigMap } from "graphql";
import { subscriptions as openSubscriptions } from "../../open/subscriptions";

export const subscriptions: GraphQLFieldConfigMap<any, any> = {
    ...openSubscriptions
};