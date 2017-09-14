import { Status } from "./Status";
import { GraphQLField, GraphQLFieldConfig, GraphQLFieldConfigMap } from "graphql";

export const queryFields: GraphQLFieldConfigMap<any, any> = {
    ...Status
};