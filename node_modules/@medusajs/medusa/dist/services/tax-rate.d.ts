import { BaseService } from "medusa-interfaces";
import { EntityManager } from "typeorm";
import { ProductTaxRate } from "../models/product-tax-rate";
import { ProductTypeTaxRate } from "../models/product-type-tax-rate";
import { ShippingTaxRate } from "../models/shipping-tax-rate";
import { TaxRate } from "../models/tax-rate";
import { FindConfig } from "../types/common";
import { CreateTaxRateInput, FilterableTaxRateProps, TaxRateListByConfig, UpdateTaxRateInput } from "../types/tax-rate";
declare class TaxRateService extends BaseService {
    private manager_;
    private productService_;
    private productTypeService_;
    private shippingOptionService_;
    private taxRateRepository_;
    constructor({ manager, productService, productTypeService, shippingOptionService, taxRateRepository, }: {
        manager: any;
        productService: any;
        productTypeService: any;
        shippingOptionService: any;
        taxRateRepository: any;
    });
    withTransaction(transactionManager: EntityManager): TaxRateService;
    list(selector: FilterableTaxRateProps, config?: FindConfig<TaxRate>): Promise<TaxRate[]>;
    listAndCount(selector: FilterableTaxRateProps, config?: FindConfig<TaxRate>): Promise<[TaxRate[], number]>;
    retrieve(id: string, config?: FindConfig<TaxRate>): Promise<TaxRate>;
    create(data: CreateTaxRateInput): Promise<TaxRate>;
    update(id: string, data: UpdateTaxRateInput): Promise<TaxRate>;
    delete(id: string | string[]): Promise<void>;
    removeFromProduct(id: string, productIds: string | string[]): Promise<void>;
    removeFromProductType(id: string, typeIds: string | string[]): Promise<void>;
    removeFromShippingOption(id: string, optionIds: string | string[]): Promise<void>;
    addToProduct(id: string, productIds: string | string[], replace?: boolean): Promise<ProductTaxRate | ProductTaxRate[]>;
    addToProductType(id: string, productTypeIds: string | string[], replace?: boolean): Promise<ProductTypeTaxRate[]>;
    addToShippingOption(id: string, optionIds: string | string[], replace?: boolean): Promise<ShippingTaxRate>;
    listByProduct(productId: string, config: TaxRateListByConfig): Promise<TaxRate[]>;
    listByShippingOption(shippingOptionId: string): Promise<TaxRate[]>;
}
export default TaxRateService;
