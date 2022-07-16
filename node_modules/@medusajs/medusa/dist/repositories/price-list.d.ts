import { FindManyOptions, FindOperator, Repository } from "typeorm";
import { PriceList } from "../models/price-list";
import { CustomFindOptions, ExtendedFindConfig } from "../types/common";
import { FilterablePriceListProps } from "../types/price-list";
export declare type PriceListFindOptions = CustomFindOptions<PriceList, "status" | "type">;
export declare class PriceListRepository extends Repository<PriceList> {
    getFreeTextSearchResultsAndCount(q: string, options: PriceListFindOptions | undefined, groups: FindOperator<string[]>, relations?: string[]): Promise<[PriceList[], number]>;
    findWithRelations(relations?: string[], idsOrOptionsWithoutRelations?: Omit<FindManyOptions<PriceList>, "relations"> | string[]): Promise<PriceList[]>;
    findOneWithRelations(relations?: (keyof PriceList)[], options?: Omit<FindManyOptions<PriceList>, "relations">): Promise<PriceList | undefined>;
    listAndCount(query: ExtendedFindConfig<FilterablePriceListProps>, groups: FindOperator<string[]>): Promise<[PriceList[], number]>;
}
