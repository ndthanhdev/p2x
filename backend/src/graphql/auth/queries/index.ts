import { GraphQLFieldConfigMap } from "graphql";
import { queries as openQueries } from "../../open/queries";

import { Safe } from "./safe";

export const queries: GraphQLFieldConfigMap<any, any> = {
    ...Safe,
    ...openQueries
};