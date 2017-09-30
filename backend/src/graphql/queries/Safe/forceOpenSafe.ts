import { GraphQLFieldConfig, GraphQLInt, GraphQLString, GraphQLBoolean } from "graphql";

export const forceOpenSafe: GraphQLFieldConfig<any, any> = {
    type: GraphQLBoolean,
    args: {
        ic: {
            type: GraphQLString
        },
        no: {
            type: GraphQLInt
        }
    },
    resolve: async (source, args, context, info) => {
        // implement
    }
};