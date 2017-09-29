import { GraphQLField, GraphQLFieldConfig, GraphQLFieldConfigMap } from "graphql";

import { Status } from "./Status";
import { KioskQueries } from "./Kiosk";
import { Safe } from "./Safe";

export const queries: GraphQLFieldConfigMap<any, any> = {
    ...Status,
    ...KioskQueries,
    ...Safe
};