import { DeleteResult, Repository } from "typeorm";
import { CustomerGroup } from "../models/customer-group";
export declare class CustomerGroupRepository extends Repository<CustomerGroup> {
    addCustomers(groupId: string, customerIds: string[]): Promise<CustomerGroup>;
    removeCustomers(groupId: string, customerIds: string[]): Promise<DeleteResult>;
}
