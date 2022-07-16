import { Store, PaymentProvider, TaxProvider } from "./../../../../";
declare const _default: (app: any) => any;
export default _default;
export declare type AdminStoresRes = {
    store: Store;
};
export declare type AdminTaxProvidersList = {
    tax_providers: TaxProvider[];
};
export declare type AdminPaymentProvidersList = {
    payment_providers: PaymentProvider[];
};
export * from "./update-store";
