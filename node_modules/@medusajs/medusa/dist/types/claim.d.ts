import { ClaimReason, ClaimType, Order } from "../models";
import { AddressPayload } from "./common";
export declare type ClaimTypeValue = `${ClaimType}`;
export declare type CreateClaimInput = {
    type: ClaimTypeValue;
    claim_items: CreateClaimItemInput[];
    return_shipping?: CreateClaimReturnShippingInput;
    additional_items?: CreateClaimItemAdditionalItemInput[];
    shipping_methods?: CreateClaimShippingMethodInput[];
    refund_amount?: number;
    shipping_address?: AddressPayload;
    no_notification?: boolean;
    metadata?: object;
    order: Order;
    claim_order_id?: string;
    shipping_address_id?: string;
};
declare type CreateClaimReturnShippingInput = {
    option_id?: string;
    price?: number;
};
declare type CreateClaimShippingMethodInput = {
    id?: string;
    option_id?: string;
    price?: number;
};
export declare type CreateClaimItemInput = {
    item_id: string;
    quantity: number;
    claim_order_id?: string;
    reason: ClaimReason;
    note?: string;
    tags?: string[];
    images?: string[];
};
declare type CreateClaimItemAdditionalItemInput = {
    variant_id: string;
    quantity: number;
};
export declare type UpdateClaimInput = {
    claim_items?: UpdateClaimItemInput[];
    shipping_methods?: UpdateClaimShippingMethodInput[];
    no_notification?: boolean;
    metadata?: Record<string, unknown>;
};
declare type UpdateClaimShippingMethodInput = {
    id?: string;
    option_id?: string;
    price?: number;
};
declare type UpdateClaimItemInput = {
    id: string;
    note?: string;
    reason?: string;
    images: UpdateClaimItemImageInput[];
    tags: UpdateClaimItemTagInput[];
    metadata?: object;
};
declare type UpdateClaimItemImageInput = {
    id?: string;
    url?: string;
};
declare type UpdateClaimItemTagInput = {
    id?: string;
    value?: string;
};
export {};
