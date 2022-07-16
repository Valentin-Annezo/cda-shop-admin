import { DateComparisonOperator, NumericalComparisonOperator, StringComparisonOperator } from "./common";
export declare type FilterableTaxRateProps = {
    region_id?: string | string[];
    code?: string | string[] | StringComparisonOperator;
    name?: string | string[];
    rate?: number | NumericalComparisonOperator;
    created_at?: Date | DateComparisonOperator;
    updated_at?: Date | DateComparisonOperator;
    deleted_at?: Date | DateComparisonOperator;
};
export declare type UpdateTaxRateInput = {
    region_id?: string;
    code?: string;
    name?: string;
    rate?: number | null;
};
export declare type CreateTaxRateInput = {
    region_id: string;
    code: string;
    name: string;
    rate?: number | null;
};
export declare type TaxRateListByConfig = {
    region_id?: string;
};
