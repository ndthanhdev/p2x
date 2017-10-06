import { GraphQLFieldConfigMap } from "graphql";
import { mutations as authMutations } from "../../auth/mutations";

import { Kiosk } from "./kiosk";

export const mutations: GraphQLFieldConfigMap<any, any> = {
    ...Kiosk,
    ...authMutations

};