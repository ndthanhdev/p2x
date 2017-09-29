import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLObjectTypeConfig,
    GraphQLBoolean,
    GraphQLInt
} from "graphql";

export const safeStatusType = new GraphQLObjectType({
    name: "SafeStatus",
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        No: {
            type: GraphQLInt
        },
        IsLock: {
            type: GraphQLBoolean
        },
        IsOccupied: {
            type: GraphQLBoolean
        }
    })
});

export const safeStatusInputType = new GraphQLInputObjectType({
    name: "SafeStatusInput",
    fields: () => ({
        No: {
            type: GraphQLInt
        },
        IsLock: {
            type: GraphQLBoolean
        },
        IsOccupied: {
            type: GraphQLBoolean
        }
    })
});