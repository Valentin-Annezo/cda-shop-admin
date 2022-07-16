"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceType = exports.isPriceSelectionStrategy = exports.AbstractPriceSelectionStrategy = void 0;
var price_list_1 = require("../types/price-list");
var AbstractPriceSelectionStrategy = /** @class */ (function () {
    function AbstractPriceSelectionStrategy() {
    }
    return AbstractPriceSelectionStrategy;
}());
exports.AbstractPriceSelectionStrategy = AbstractPriceSelectionStrategy;
function isPriceSelectionStrategy(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
object) {
    return (typeof object.calculateVariantPrice === "function" &&
        typeof object.withTransaction === "function");
}
exports.isPriceSelectionStrategy = isPriceSelectionStrategy;
var DefaultPriceType;
(function (DefaultPriceType) {
    DefaultPriceType["DEFAULT"] = "default";
})(DefaultPriceType || (DefaultPriceType = {}));
exports.PriceType = __assign(__assign({}, DefaultPriceType), price_list_1.PriceListType);
//# sourceMappingURL=price-selection-strategy.js.map