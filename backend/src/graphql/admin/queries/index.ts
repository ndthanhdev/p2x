import { GraphQLFieldConfigMap } from "graphql";
import { queries as authQueries } from "../../auth/queries";

export const queries: GraphQLFieldConfigMap<any, any> = {
    ...authQueries
};