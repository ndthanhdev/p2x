import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInputObjectType } from "graphql";

export const accountInputType = new GraphQLInputObjectType({
    name: "AccountInput",
    fields: () => ({
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
});