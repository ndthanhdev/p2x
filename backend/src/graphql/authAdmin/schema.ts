import { types } from "../types";
import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { queries } from "./queries";
import { mutations } from "./mutations";
import { subscriptions } from "./subscriptions";

export const authAdminSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "query",
        fields: queries
    }),
    mutation: new GraphQLObjectType({
        name: "mutation",
        fields: queries
    }),
    subscription: new GraphQLObjectType({
        name: "subscription",
        fields: subscriptions
    }),
    types: types
});