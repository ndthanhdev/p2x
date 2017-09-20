import { Status } from "./Status";
import { GraphQLField, GraphQLFieldConfig, GraphQLFieldConfigMap } from "graphql";
import { Kiosk } from "./Kiosk";


export const queries: GraphQLFieldConfigMap<any, any> = {
    ...Status,
    ...Kiosk
};