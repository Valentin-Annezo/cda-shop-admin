import { DiscountConditionOperator } from "../models/discount-condition";
import { AllocationType, DiscountRuleType } from "../models/discount-rule";
import { Region } from "../models";
export declare type QuerySelector = {
    q?: string;
};
export declare class FilterableDiscountProps {
    q?: string;
    is_dynamic?: boolean;
    is_disabled?: boolean;
    rule?: AdminGetDiscountsDiscountRuleParams;
}
export declare class AdminGetDiscountsDiscountRuleParams {
    type?: DiscountRuleType;
    allocation?: AllocationType;
}
export declare class AdminUpsertConditionsReq {
    products?: string[];
    product_collections?: string[];
    product_types?: string[];
    product_tags?: string[];
    customer_groups?: string[];
}
export declare type UpsertDiscountConditionInput = {
    rule_id?: string;
    id?: string;
    operator?: DiscountConditionOperator;
    products?: string[];
    product_collections?: string[];
    product_types?: string[];
    product_tags?: string[];
    customer_groups?: string[];
};
export declare type CreateDiscountRuleInput = {
    description?: string;
    type: DiscountRuleType;
    value: number;
    allocation: AllocationType;
    conditions?: UpsertDiscountConditionInput[];
};
export declare type CreateDiscountInput = {
    code: string;
    rule: CreateDiscountRuleInput;
    is_dynamic: boolean;
    is_disabled: boolean;
    starts_at?: Date;
    ends_at?: Date;
    valid_duration?: string;
    usage_limit?: number;
    regions?: string[] | Region[];
    metadata?: Record<string, unknown>;
};
export declare type UpdateDiscountRuleInput = {
    id: string;
    description?: string;
    value?: number;
    allocation?: AllocationType;
    conditions?: UpsertDiscountConditionInput[];
};
export declare type UpdateDiscountInput = {
    code?: string;
    rule?: UpdateDiscountRuleInput;
    is_disabled?: boolean;
    starts_at?: Date;
    ends_at?: Date | null;
    valid_duration?: string | null;
    usage_limit?: number | null;
    regions?: string[];
    metadata?: Record<string, unknown>;
};
export declare type CreateDynamicDiscountInput = {
    code: string;
    ends_at?: Date;
    usage_limit: number;
    metadata?: object;
};
