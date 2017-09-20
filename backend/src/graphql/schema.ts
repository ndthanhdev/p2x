import { types } from "./types";
import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { queries } from "./queries";
import { mutations } from "./mutation";
export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: queries
    }),
    mutation: new GraphQLObjectType({
        name: "mutation",
        fields: mutations
    }),
    types: types
});