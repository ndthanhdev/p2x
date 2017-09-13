import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLObjectTypeConfig,
    GraphQLBoolean, GraphQLList
} from "graphql";

import { safeStatusType } from "./safeStatus";

export const statusType = new GraphQLObjectType({
    name: "Status",
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        KioskICNo: {
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