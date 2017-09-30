import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLInputObjectType, GraphQLBoolean } from "graphql";
import { statusType } from "./status";
import { StatusModel, IStatus } from "../../models/Status";

export const kioskType = new GraphQLObjectType({
    name: "Kiosk",
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        IC: {
            type: GraphQLString
        },
        Name: {
            type: GraphQLString
        },
        IsOnline: {
            type: GraphQLBoolean
        },
        LatestStatus: {
            type: statusType,
            resolve: async (source, args, context, info) => {
                try {
                    const status = await StatusModel.findOne(<IStatus>{ KioskIC: source.IC }, undefined, { sort: { createdAt: -1 } }).exec();
                    if (!status) {
                        // throw new Error("Error getting status");
                        return [];
                    }
                    return status;
                } catch (error) {
                    throw error;
                }
            }
        }
    })
});


export const kioskInputType = new GraphQLInputObjectType({
    name: "KioskInput",
    fields: () => ({
        IC: {
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