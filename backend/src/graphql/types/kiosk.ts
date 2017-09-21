import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLInputObjectType, GraphQLBoolean } from "graphql";

export const kioskType = new GraphQLObjectType({
    name: "Kiosk",
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        ICNo: {
            type: GraphQLString
        },
        Name: {
            type: GraphQLString
        },
        IsOnline: {
            type: GraphQLBoolean
        }
    })
});


export const kioskInputType = new GraphQLInputObjectType({
    name: "KioskInput",
    fields: () => ({
        ICNo: {
            type: GraphQLString
        },
        Name: {
            type: GraphQLString
        },
        Secret: {
            type: GraphQLString
        }

    })
});