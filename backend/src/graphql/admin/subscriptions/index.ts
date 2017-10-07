import { GraphQLFieldConfigMap } from "graphql";
import { subscriptions as authSubscriptions } from "../../auth/subscriptions";

export const subscriptions: GraphQLFieldConfigMap<any, any> = {
    ...authSubscriptions
};