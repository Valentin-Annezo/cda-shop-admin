"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpsertConditionsReq = exports.AdminGetDiscountsDiscountRuleParams = exports.FilterableDiscountProps = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var discount_rule_1 = require("../models/discount-rule");
var exactly_one_1 = require("./validators/exactly-one");
var FilterableDiscountProps = /** @class */ (function () {
    function FilterableDiscountProps() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FilterableDiscountProps.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value === "true";
        }),
        __metadata("design:type", Boolean)
    ], FilterableDiscountProps.prototype, "is_dynamic", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value === "true";
        }),
        __metadata("design:type", Boolean)
    ], FilterableDiscountProps.prototype, "is_disabled", void 0);
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return AdminGetDiscountsDiscountRuleParams; }),
        __metadata("design:type", AdminGetDiscountsDiscountRuleParams)
    ], FilterableDiscountProps.prototype, "rule", void 0);
    return FilterableDiscountProps;
}());
exports.FilterableDiscountProps = FilterableDiscountProps;
var AdminGetDiscountsDiscountRuleParams = /** @class */ (function () {
    function AdminGetDiscountsDiscountRuleParams() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(discount_rule_1.DiscountRuleType),
        __metadata("design:type", String)
    ], AdminGetDiscountsDiscountRuleParams.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(discount_rule_1.AllocationType),
        __metadata("design:type", String)
    ], AdminGetDiscountsDiscountRuleParams.prototype, "allocation", void 0);
    return AdminGetDiscountsDiscountRuleParams;
}());
exports.AdminGetDiscountsDiscountRuleParams = AdminGetDiscountsDiscountRuleParams;
var AdminUpsertConditionsReq = /** @class */ (function () {
    function AdminUpsertConditionsReq() {
    }
    __decorate([
        (0, class_validator_1.Validate)(exactly_one_1.ExactlyOne, [
            "product_collections",
            "product_types",
            "product_tags",
            "customer_groups",
        ]),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], AdminUpsertConditionsReq.prototype, "products", void 0);
    __decorate([
        (0, class_validator_1.Validate)(exactly_one_1.ExactlyOne, [
            "products",
            "product_types",
            "product_tags",
            "customer_groups",
        ]),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], AdminUpsertConditionsReq.prototype, "product_collections", void 0);
    __decorate([
        (0, class_validator_1.Validate)(exactly_one_1.ExactlyOne, [
            "product_collections",
            "products",
            "product_tags",
            "customer_groups",
        ]),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], AdminUpsertConditionsReq.prototype, "product_types", void 0);
    __decorate([
        (0, class_validator_1.Validate)(exactly_one_1.ExactlyOne, [
            "product_collections",
            "product_types",
            "products",
            "customer_groups",
        ]),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], AdminUpsertConditionsReq.prototype, "product_tags", void 0);
    __decorate([
        (0, class_validator_1.Validate)(exactly_one_1.ExactlyOne, [
            "product_collections",
            "product_types",
            "products",
            "product_tags",
        ]),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], AdminUpsertConditionsReq.prototype, "customer_groups", void 0);
    return AdminUpsertConditionsReq;
}());
exports.AdminUpsertConditionsReq = AdminUpsertConditionsReq;
//# sourceMappingURL=discount.js.map