import { GraphQLFieldConfig, GraphQLString, subscribe, buildSchema } from "graphql";
import { statusInputType, statusType } from "../../../types/status";
import { withFilter } from "graphql-subscriptions";
import { pubsub, EVENT_STATUS_ADDED } from "../../../pubsub";


export const statusAdded = <GraphQLFieldConfig<any, any>>{
    type: statusType,
    args: {
        ic: {
            type: GraphQLString
        }
    },
    resolve: async (source, args, context, info) => source,
    subscribe: withFilter(() => pubsub.asyncIterator(EVENT_STATUS_ADDED), (source, args, context, info) => {
        return source.KioskIC === args.ic;
    })
};