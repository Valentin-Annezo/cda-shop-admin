import { Repository } from "typeorm";
import { ProductTag } from "../models/product-tag";
declare type UpsertTagsInput = (Partial<ProductTag> & {
    value: string;
})[];
export declare class ProductTagRepository extends Repository<ProductTag> {
    listTagsByUsage(count?: number): Promise<ProductTag[]>;
    upsertTags(tags: UpsertTagsInput): Promise<ProductTag[]>;
}
export {};
