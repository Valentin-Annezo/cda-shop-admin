import { BaseService } from "medusa-interfaces";
import { EntityManager } from "typeorm";
import { ProductTaxRate } from "../models/product-tax-rate";
import { FindConfig } from "../types/common";
import { FilterableProductTaxRateProps } from "../types/product-tax-rate";
/**
 * Provides layer to manipulate product variants.
 * @extends BaseService
 */
declare class ProductTaxRateService extends BaseService {
    private manager_;
    private productTaxRateRepository_;
    constructor({ manager, productTaxRateRepository }: {
        manager: any;
        productTaxRateRepository: any;
    });
    withTransaction(transactionManager: EntityManager): ProductTaxRateService;
    /**
     * @param {FilterableProductVariantProps} selector - the query object for find
     * @param {FindConfig<ProductVariant>} config - query config object for variant retrieval
     * @return {Promise} the result of the find operation
     */
    list(selector: FilterableProductTaxRateProps, config?: FindConfig<ProductTaxRate>): Promise<ProductTaxRate[]>;
}
export default ProductTaxRateService;
