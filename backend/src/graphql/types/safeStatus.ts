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
        IdNo: {
            type: GraphQLInt
        },
        Lock: {
            type: GraphQLBoolean
        },
        Sensor: {
            type: GraphQLBoolean
        }
    })
});