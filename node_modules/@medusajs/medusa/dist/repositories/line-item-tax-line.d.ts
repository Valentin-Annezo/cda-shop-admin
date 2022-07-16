import { Repository } from "typeorm";
import { LineItemTaxLine } from "../models/line-item-tax-line";
export declare class LineItemTaxLineRepository extends Repository<LineItemTaxLine> {
    upsertLines(lines: LineItemTaxLine[]): Promise<LineItemTaxLine[]>;
    deleteForCart(cartId: string): Promise<void>;
}
