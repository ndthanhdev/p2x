import { GraphQLFieldConfig, GraphQLInt, GraphQLString } from "graphql";

export const generatePasscode: GraphQLFieldConfig<any, any> = {
    type: GraphQLString,
    args: {
        IcNo: {
            type: GraphQLString
        },
        No: {
            type: GraphQLInt
        }
    },
    resolve: async (source, args, context, info) => {
        // implement
    }
};