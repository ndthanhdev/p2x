import { GraphQLFieldConfig, GraphQLString, GraphQLList } from "graphql";
import { withFilter } from "graphql-subscriptions";
import { pubsub, EVENT_KIOSK_CHANGED } from "../../../pubsub";
import { kioskType } from "../../../types/kiosk";
import { KioskModel, IKiosk } from "../../../../models/Kiosk";


export const kioskChanged = <GraphQLFieldConfig<any, any>>{
    type: kioskType,
    args: {
        ic: {
            type: GraphQLString
        }
    },
    resolve: async (source, args, context, info) => {
        try {
            const kiosk = await KioskModel.findOne(<IKiosk>{ IC: args.ic }).exec();
            return kiosk;
        } catch (error) {
            throw error;
        }
    },
    subscribe: withFilter(() => pubsub.asyncIterator(EVENT_KIOSK_CHANGED), (source, args, context, info) => {
        return source === args.ic;
    })
};