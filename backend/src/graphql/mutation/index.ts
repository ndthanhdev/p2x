import { GraphQLFieldConfigMap } from "graphql";

import { Kiosk } from "./kiosk";
import { Status } from "./status";
import { Safe } from "./safe";
import { Account } from "./account";

export const mutations: GraphQLFieldConfigMap<any, any> = {
    ...Kiosk,
    ...Status,
    ...Safe,
    ...Account
};