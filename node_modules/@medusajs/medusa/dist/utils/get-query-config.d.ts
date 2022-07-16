import { FindConfig, QueryConfig, RequestQueryFields } from "../types/common";
import { BaseEntity } from "../interfaces/models/base-entity";
export declare function pickByConfig<TModel extends BaseEntity>(obj: TModel | TModel[], config: FindConfig<TModel>): Partial<TModel> | Partial<TModel>[];
export declare function getRetrieveConfig<TModel extends BaseEntity>(defaultFields: (keyof TModel)[], defaultRelations: string[], fields?: (keyof TModel)[], expand?: string[]): FindConfig<TModel>;
export declare function getListConfig<TModel extends BaseEntity>(defaultFields: (keyof TModel)[], defaultRelations: string[], fields?: (keyof TModel)[], expand?: string[], limit?: number, offset?: number, order?: {
    [k: symbol]: "DESC" | "ASC";
}): FindConfig<TModel>;
export declare function prepareListQuery<T extends RequestQueryFields, TEntity extends BaseEntity>(validated: T, queryConfig?: QueryConfig<TEntity>): FindConfig<TEntity>;
export declare function prepareRetrieveQuery<T extends RequestQueryFields, TEntity extends BaseEntity>(validated: T, queryConfig?: QueryConfig<TEntity>): FindConfig<TEntity>;
