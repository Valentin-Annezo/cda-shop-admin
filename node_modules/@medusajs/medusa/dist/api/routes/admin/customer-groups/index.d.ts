import { CustomerGroup } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare type AdminCustomerGroupsRes = {
    customer_group: CustomerGroup;
};
export declare type AdminCustomerGroupsDeleteRes = DeleteResponse;
export declare type AdminCustomerGroupsListRes = PaginatedResponse & {
    customer_groups: CustomerGroup[];
};
export declare const defaultAdminCustomerGroupsRelations: never[];
export * from "./add-customers-batch";
export * from "./create-customer-group";
export * from "./delete-customers-batch";
export * from "./get-customer-group";
export * from "./list-customer-groups";
export * from "./update-customer-group";
