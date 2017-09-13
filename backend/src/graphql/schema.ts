import { types } from "./types";
import { GraphQLSchema, GraphQLObjectType } from "graphql";


export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: null
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: null
    }),
    types: types
});