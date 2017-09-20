import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLInputObjectType } from "graphql";

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