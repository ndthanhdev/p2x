import { GraphQLString, GraphQLInt, GraphQLInputObjectType } from "graphql";

export const safeInputType = new GraphQLInputObjectType({
    name: "SafeInput",
    fields: () => ({
        ic: {
            type: GraphQLString
        },
        no: {
            type: GraphQLInt
        },
        expiredIn: {
            type: GraphQLInt
        }
    })
});