import { AddressPayload } from "./common";
export declare class AdminListCustomerSelector {
    q?: string;
    groups?: string[];
}
export declare type CreateCustomerInput = {
    email: string;
    password?: string;
    password_hash?: string;
    has_account?: boolean;
    first_name?: string;
    last_name?: string;
    phone?: string;
    metadata?: Record<string, unknown>;
};
export declare type UpdateCustomerInput = {
    password?: string;
    metadata?: Record<string, unknown>;
    billing_address?: AddressPayload | string;
    billing_address_id?: string;
    groups?: {
        id: string;
    }[];
    email?: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
};
