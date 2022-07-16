import "reflect-metadata";
import { Discount } from "../../../..";
import { DiscountCondition } from "../../../../models";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminDiscountsFields: (keyof Discount)[];
export declare const defaultAdminDiscountsRelations: string[];
export declare const defaultAdminDiscountConditionFields: (keyof DiscountCondition)[];
export declare const defaultAdminDiscountConditionRelations: string[];
export declare type AdminDiscountsRes = {
    discount: Discount;
};
export declare type AdminDiscountConditionsRes = {
    discount_condition: DiscountCondition;
};
export declare type AdminDiscountsDeleteRes = DeleteResponse;
export declare type AdminDiscountsListRes = PaginatedResponse & {
    discounts: Discount[];
};
export * from "./add-region";
export * from "./create-condition";
export * from "./create-discount";
export * from "./create-dynamic-code";
export * from "./delete-condition";
export * from "./delete-discount";
export * from "./delete-dynamic-code";
export * from "./get-condition";
export * from "./get-discount";
export * from "./get-discount-by-code";
export * from "./list-discounts";
export * from "./remove-region";
export * from "./update-condition";
export * from "./update-discount";
