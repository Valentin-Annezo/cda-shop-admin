import { Repository } from "typeorm";
import { Customer } from "../models/customer";
import { ExtendedFindConfig, Selector } from "../types/common";
export declare class CustomerRepository extends Repository<Customer> {
    listAndCount(query: ExtendedFindConfig<Customer, Selector<Customer>>, q?: string | undefined): Promise<[Customer[], number]>;
}
