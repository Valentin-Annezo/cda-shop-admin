import { DeleteResult, SelectQueryBuilder, FindManyOptions, Repository } from "typeorm";
import { TaxRate } from "../models/tax-rate";
import { ProductTaxRate } from "../models/product-tax-rate";
import { ProductTypeTaxRate } from "../models/product-type-tax-rate";
import { ShippingTaxRate } from "../models/shipping-tax-rate";
import { TaxRateListByConfig } from "../types/tax-rate";
export declare class TaxRateRepository extends Repository<TaxRate> {
    getFindQueryBuilder(findOptions: FindManyOptions<TaxRate>): SelectQueryBuilder<TaxRate>;
    findWithResolution(findOptions: FindManyOptions<TaxRate>): Promise<TaxRate[]>;
    findOneWithResolution(findOptions: FindManyOptions<TaxRate>): Promise<TaxRate | undefined>;
    findAndCountWithResolution(findOptions: FindManyOptions<TaxRate>): Promise<[TaxRate[], number]>;
    applyResolutionsToQueryBuilder(qb: SelectQueryBuilder<TaxRate>, resolverFields: string[]): SelectQueryBuilder<TaxRate>;
    removeFromProduct(id: string, productIds: string[]): Promise<DeleteResult>;
    addToProduct(id: string, productIds: string[], overrideExisting?: boolean): Promise<ProductTaxRate[]>;
    removeFromProductType(id: string, productTypeIds: string[]): Promise<DeleteResult>;
    addToProductType(id: string, productTypeIds: string[], overrideExisting?: boolean): Promise<ProductTypeTaxRate[]>;
    removeFromShippingOption(id: string, optionIds: string[]): Promise<DeleteResult>;
    addToShippingOption(id: string, optionIds: string[], overrideExisting?: boolean): Promise<ShippingTaxRate[]>;
    listByProduct(productId: string, config: TaxRateListByConfig): Promise<TaxRate[]>;
    listByShippingOption(optionId: string): Promise<TaxRate[]>;
}
