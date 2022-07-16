import { BaseService } from "medusa-interfaces";
import { EntityManager } from "typeorm";
import { ShippingTaxRate } from "../models/shipping-tax-rate";
import { FindConfig } from "../types/common";
import { FilterableShippingTaxRateProps } from "../types/shipping-tax-rate";
/**
 * Provides layer to manipulate Shipping variants.
 * @extends BaseService
 */
declare class ShippingTaxRateService extends BaseService {
    private manager_;
    private shippingTaxRateRepository_;
    constructor({ manager, shippingTaxRateRepository }: {
        manager: any;
        shippingTaxRateRepository: any;
    });
    withTransaction(transactionManager: EntityManager): ShippingTaxRateService;
    /**
     * Lists Shipping Tax Rates given a certain query.
     * @param selector - the query object for find
     * @param config - query config object for variant retrieval
     * @return the result of the find operation
     */
    list(selector: FilterableShippingTaxRateProps, config?: FindConfig<ShippingTaxRate>): Promise<ShippingTaxRate[]>;
}
export default ShippingTaxRateService;
