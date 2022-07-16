import { TaxRate } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminTaxRatesRelations: never[];
export declare const defaultAdminTaxRatesFields: (keyof TaxRate)[];
export declare type AdminTaxRatesDeleteRes = DeleteResponse;
export declare type AdminTaxRatesListRes = PaginatedResponse & {
    tax_rates: TaxRate[];
};
export declare type AdminTaxRatesRes = {
    tax_rate: TaxRate;
};
export * from "./list-tax-rates";
export * from "./get-tax-rate";
export * from "./remove-from-product-types";
export * from "./remove-from-products";
export * from "./remove-from-shipping-options";
export * from "./add-to-product-types";
export * from "./add-to-products";
export * from "./add-to-shipping-options";
export * from "./create-tax-rate";
export * from "./delete-tax-rate";
export * from "./update-tax-rate";
