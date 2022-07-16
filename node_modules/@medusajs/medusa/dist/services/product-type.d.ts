import { BaseService } from "medusa-interfaces";
import { EntityManager } from "typeorm";
import { ProductType } from "../models/product-type";
import { FindConfig } from "../types/common";
import { FilterableProductTypeProps } from "../types/product";
/**
 * Provides layer to manipulate products.
 * @extends BaseService
 */
declare class ProductTypeService extends BaseService {
    private manager_;
    private typeRepository_;
    constructor({ manager, productTypeRepository }: {
        manager: any;
        productTypeRepository: any;
    });
    withTransaction(transactionManager: EntityManager): ProductTypeService;
    /**
     * Gets a product by id.
     * Throws in case of DB Error and if product was not found.
     * @param id - id of the product to get.
     * @param config - object that defines what should be included in the
     *   query response
     * @return {Promise<Product>} the result of the find one operation.
     */
    retrieve(id: string, config?: FindConfig<ProductType>): Promise<ProductType>;
    /**
     * Lists product types
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise} the result of the find operation
     */
    list(selector?: FilterableProductTypeProps, config?: FindConfig<ProductType>): Promise<ProductType[]>;
    /**
     * Lists product tags and adds count.
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise} the result of the find operation
     */
    listAndCount(selector?: FilterableProductTypeProps, config?: FindConfig<ProductType>): Promise<[ProductType[], number]>;
}
export default ProductTypeService;
