import { Status } from "./Status";
import { GraphQLField, GraphQLFieldConfig, GraphQLFieldConfigMap } from "graphql";
import { KioskQueries } from "./Kiosk";


export const queries: GraphQLFieldConfigMap<any, any> = {
    ...Status,
    ...KioskQueries
};