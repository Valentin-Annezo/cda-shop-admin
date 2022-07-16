import { ProductType } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
import "reflect-metadata";
declare const _default: (app: any) => any;
export default _default;
export declare const allowedAdminProductTypeFields: string[];
export declare const defaultAdminProductTypeFields: string[];
export declare const defaultAdminProductTypeRelations: never[];
export declare type AdminProductTypesListRes = PaginatedResponse & {
    product_types: ProductType[];
};
export declare type AdminProductTypesRes = {
    product_type: ProductType;
};
export * from "./list-product-types";
