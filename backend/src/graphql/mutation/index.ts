import { Kiosk } from "./kiosk";
import { GraphQLFieldConfigMap } from "graphql";
import { Status } from "./status";

export const mutations: GraphQLFieldConfigMap<any, any> = {
    ...Kiosk,
    ...Status
};