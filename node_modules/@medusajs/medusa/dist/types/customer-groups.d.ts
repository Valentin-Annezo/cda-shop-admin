import { DateComparisonOperator, StringComparisonOperator } from "./common";
export declare class FilterableCustomerGroupProps {
    id?: string | string[] | StringComparisonOperator;
    q?: string;
    name?: string[];
    updated_at?: DateComparisonOperator;
    created_at?: DateComparisonOperator;
}
export declare class CustomerGroupsBatchCustomer {
    id: string;
}
export declare class CustomerGroupUpdate {
    name?: string;
    metadata?: object;
}
