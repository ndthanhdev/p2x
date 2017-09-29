import { GraphQLFieldConfigMap } from "graphql";

import { Kiosk } from "./kiosk";
import { Status } from "./status";
import { Safe } from "./safe";

export const mutations: GraphQLFieldConfigMap<any, any> = {
    ...Kiosk,
    ...Status,
    ...Safe
};