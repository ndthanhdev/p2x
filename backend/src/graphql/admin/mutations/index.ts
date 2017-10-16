import { GraphQLFieldConfigMap } from "graphql";
import { mutations as authMutations } from "../../auth/mutations";

import { Kiosk } from "./kiosk";
import { Account } from "./account";

export const mutations: GraphQLFieldConfigMap<any, any> = {
    ...Kiosk,
    ...Account,
    ...authMutations
};