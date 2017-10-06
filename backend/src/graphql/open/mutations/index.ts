import { GraphQLFieldConfigMap } from "graphql";

import { Status } from "./status";
import { Account } from "./account";

export const mutations: GraphQLFieldConfigMap<any, any> = {
    ...Status,
    ...Account
};