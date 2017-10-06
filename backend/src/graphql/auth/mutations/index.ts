import { GraphQLFieldConfigMap } from "graphql";
import { Safe } from "./safe";
import { mutations as openMutations } from "../../open/mutations";
export const mutations: GraphQLFieldConfigMap<any, any> = {
    ...Safe,
    ...openMutations
};