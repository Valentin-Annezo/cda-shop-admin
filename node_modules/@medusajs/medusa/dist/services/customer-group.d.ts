import { BaseService } from "medusa-interfaces";
import { DeepPartial, EntityManager } from "typeorm";
import { CustomerService } from ".";
import { CustomerGroup } from "..";
import { CustomerGroupRepository } from "../repositories/customer-group";
import { FindConfig } from "../types/common";
import { CustomerGroupUpdate, FilterableCustomerGroupProps } from "../types/customer-groups";
declare type CustomerGroupConstructorProps = {
    manager: EntityManager;
    customerGroupRepository: typeof CustomerGroupRepository;
    customerService: CustomerService;
};
/**
 * Provides layer to manipulate discounts.
 * @implements {BaseService}
 */
declare class CustomerGroupService extends BaseService {
    private manager_;
    private customerGroupRepository_;
    private customerService_;
    constructor({ manager, customerGroupRepository, customerService, }: CustomerGroupConstructorProps);
    withTransaction(transactionManager: EntityManager): CustomerGroupService;
    retrieve(id: string, config?: {}): Promise<CustomerGroup>;
    /**
     * Creates a customer group with the provided data.
     * @param {DeepPartial<CustomerGroup>} group - the customer group to create
     * @return {Promise} the result of the create operation
     */
    create(group: DeepPartial<CustomerGroup>): Promise<CustomerGroup>;
    /**
     * Add a batch of customers to a customer group at once
     * @param {string} id id of the customer group to add customers to
     * @param {string[]} customerIds customer id's to add to the group
     * @return {Promise<CustomerGroup>} the customer group after insertion
     */
    addCustomers(id: string, customerIds: string | string[]): Promise<CustomerGroup>;
    /**
     * Update a customer group.
     *
     * @param {string} customerGroupId - id of the customer group
     * @param {CustomerGroupUpdate} update - customer group partial data
     * @returns resulting customer group
     */
    update(customerGroupId: string, update: CustomerGroupUpdate): Promise<CustomerGroup[]>;
    /**
     * Remove customer group
     *
     * @param {string} groupId id of the customer group to delete
     * @return {Promise} a promise
     */
    delete(groupId: string): Promise<void>;
    /**
     * List customer groups.
     *
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise} the result of the find operation
     */
    list(selector: FilterableCustomerGroupProps | undefined, config: FindConfig<CustomerGroup>): Promise<CustomerGroup[]>;
    /**
     * Retrieve a list of customer groups and total count of records that match the query.
     *
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise} the result of the find operation
     */
    listAndCount(selector: FilterableCustomerGroupProps | undefined, config: FindConfig<CustomerGroup>): Promise<[CustomerGroup[], number]>;
    /**
     * Remove list of customers from a customergroup
     *
     * @param {string} id id of the customer group from which the customers are removed
     * @param {string[] | string} customerIds id's of the customer to remove from group
     * @return {Promise<CustomerGroup>} the customergroup with the provided id
     */
    removeCustomer(id: string, customerIds: string[] | string): Promise<CustomerGroup>;
}
export default CustomerGroupService;
