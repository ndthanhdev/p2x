import { GraphQLFieldConfig, GraphQLString, GraphQLList } from "graphql";
import { withFilter } from "graphql-subscriptions";
import { pubsub, EVENT_KIOSK_CHANGED } from "../../pubsub";
import { kioskType } from "../../types/kiosk";
import { KioskModel } from "../../../models/Kiosk";


export const kioskChanged = <GraphQLFieldConfig<any, any>>{
    type: new GraphQLList(kioskType),
    args: {
        ICNo: {
            type: GraphQLString
        }
    },
    resolve: async (source, args, context, info) => source,
    subscribe: withFilter(() => pubsub.asyncIterator(EVENT_KIOSK_CHANGED), (source, args, context, info) => {
        return source.ICNo === args.ICNo;
    })
};