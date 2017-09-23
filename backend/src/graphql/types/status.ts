import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLObjectTypeConfig,
    GraphQLBoolean, GraphQLList
} from "graphql";

import { safeStatusType, safeStatusInputType } from "./safeStatus";

export const statusType = new GraphQLObjectType({
    name: "Status",
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        ICNo: {
            type: GraphQLString
        },
        createdAt: {
            type: GraphQLString
        },
        SafeStatuss: {
            type: new GraphQLList(safeStatusType)
        }
    })
});

export const statusInputType = new GraphQLInputObjectType({
    name: "StatusInput",
    fields: () => ({
        ICNo: {
            type: GraphQLString
        },
        SafeStatuss: {
            type: new GraphQLList(safeStatusInputType)
        }
    })
});