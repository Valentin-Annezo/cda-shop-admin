import { ExtendedFindConfig, FindConfig } from "../types/common";
/**
 * Used to build TypeORM queries.
 * @param selector The selector
 * @param config The config
 * @return The QueryBuilderConfig
 */
export declare function buildQuery<TWhereKeys, TEntity = unknown>(selector: TWhereKeys, config?: FindConfig<TEntity>): ExtendedFindConfig<TEntity, TWhereKeys>;
