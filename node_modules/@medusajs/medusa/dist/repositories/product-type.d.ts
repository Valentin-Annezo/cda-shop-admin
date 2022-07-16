import { Repository } from "typeorm";
import { ProductType } from "../models/product-type";
declare type UpsertTypeInput = Partial<ProductType> & {
    value: string;
};
export declare class ProductTypeRepository extends Repository<ProductType> {
    upsertType(type?: UpsertTypeInput): Promise<ProductType | null>;
}
export {};
