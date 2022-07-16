import { FindManyOptions, Repository } from "typeorm";
import { GiftCard } from "../models/gift-card";
import { ExtendedFindConfig, QuerySelector, Writable } from "../types/common";
export declare class GiftCardRepository extends Repository<GiftCard> {
    findWithRelations(relations?: (keyof GiftCard | string)[], idsOrOptionsWithoutRelations?: Omit<FindManyOptions<GiftCard>, "relations"> | string[]): Promise<[GiftCard[], number]>;
    protected queryGiftCards(q: string, where: Partial<Writable<QuerySelector<GiftCard>>>, rels: (keyof GiftCard | string)[], shouldCount?: boolean): Promise<[GiftCard[], number]>;
    listGiftCardsAndCount(inputQuery: ExtendedFindConfig<GiftCard, QuerySelector<GiftCard>>, rels?: (keyof GiftCard | string)[], q?: string): Promise<[GiftCard[], number]>;
    listGiftCards(query: ExtendedFindConfig<GiftCard, QuerySelector<GiftCard>>, rels?: (keyof GiftCard | string)[], q?: string): Promise<GiftCard[]>;
    findOneWithRelations(relations?: Array<keyof GiftCard>, optionsWithoutRelations?: Omit<FindManyOptions<GiftCard>, "relations">): Promise<GiftCard>;
}
