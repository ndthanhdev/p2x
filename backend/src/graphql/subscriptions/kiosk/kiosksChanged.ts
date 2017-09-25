import { GraphQLFieldConfig, GraphQLString, GraphQLList } from "graphql";
import { withFilter } from "graphql-subscriptions";
import { pubsub, EVENT_KIOSKS_CHANGED } from "../../pubsub";
import { kioskType } from "../../types/kiosk";
import { KioskModel } from "../../../models/Kiosk";


export const kiosksChanged = <GraphQLFieldConfig<any, any>>{
    type: new GraphQLList(kioskType),
    resolve: async (source, args, context, info) => {
        try {
            const kiosks = await KioskModel.find().exec();
            return kiosks;
        } catch (error) {
            throw error;
        }
    },
    subscribe: () => pubsub.asyncIterator(EVENT_KIOSKS_CHANGED)
};