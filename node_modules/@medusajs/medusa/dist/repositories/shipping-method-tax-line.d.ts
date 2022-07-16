import { Repository } from "typeorm";
import { ShippingMethodTaxLine } from "../models/shipping-method-tax-line";
export declare class ShippingMethodTaxLineRepository extends Repository<ShippingMethodTaxLine> {
    upsertLines(lines: ShippingMethodTaxLine[]): Promise<ShippingMethodTaxLine[]>;
    deleteForCart(cartId: string): Promise<void>;
}
