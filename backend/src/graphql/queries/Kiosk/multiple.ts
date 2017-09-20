import { GraphQLFieldConfig, GraphQLList } from "graphql";
import { kioskType } from "../../types/kiosk";
import { KioskModel } from "../../../models/Kiosk";

export const Kiosks: GraphQLFieldConfig<any, any> = {
    type: new GraphQLList(kioskType),
    resolve: async () => {
        try {
            const kiosks = await KioskModel.find().exec();
            return kiosks;
        } catch (error) {
            throw error;
        }
    }
};