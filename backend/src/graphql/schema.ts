import { types } from "./types";
import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { queryFields } from "./queries";

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: queryFields
    }),
    types: types
});