import { AbstractTaxService, ItemTaxCalculationLine, ShippingTaxCalculationLine, TaxCalculationContext } from "../interfaces/tax-service";
import { ProviderTaxLine } from "../types/tax-service";
declare class SystemTaxService extends AbstractTaxService {
    static identifier: string;
    constructor();
    getTaxLines(itemLines: ItemTaxCalculationLine[], shippingLines: ShippingTaxCalculationLine[], context: TaxCalculationContext): Promise<ProviderTaxLine[]>;
}
export default SystemTaxService;
