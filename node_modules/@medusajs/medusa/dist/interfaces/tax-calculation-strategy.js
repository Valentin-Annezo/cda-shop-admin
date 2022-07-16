"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTaxCalculationStrategy = void 0;
function isTaxCalculationStrategy(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
object) {
    return typeof object.calculate === "function";
}
exports.isTaxCalculationStrategy = isTaxCalculationStrategy;
//# sourceMappingURL=tax-calculation-strategy.js.map