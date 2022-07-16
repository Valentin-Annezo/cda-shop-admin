"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountConditionRepository = exports.DiscountConditionJoinTableForeignKey = void 0;
var typeorm_1 = require("typeorm");
var models_1 = require("../models");
var discount_condition_1 = require("../models/discount-condition");
var discount_condition_customer_group_1 = require("../models/discount-condition-customer-group");
var discount_condition_product_1 = require("../models/discount-condition-product");
var discount_condition_product_collection_1 = require("../models/discount-condition-product-collection");
var discount_condition_product_tag_1 = require("../models/discount-condition-product-tag");
var discount_condition_product_type_1 = require("../models/discount-condition-product-type");
var DiscountConditionJoinTableForeignKey;
(function (DiscountConditionJoinTableForeignKey) {
    DiscountConditionJoinTableForeignKey["PRODUCT_ID"] = "product_id";
    DiscountConditionJoinTableForeignKey["PRODUCT_TYPE_ID"] = "product_type_id";
    DiscountConditionJoinTableForeignKey["PRODUCT_COLLECTION_ID"] = "product_collection_id";
    DiscountConditionJoinTableForeignKey["PRODUCT_TAG_ID"] = "product_tag_id";
    DiscountConditionJoinTableForeignKey["CUSTOMER_GROUP_ID"] = "customer_group_id";
})(DiscountConditionJoinTableForeignKey = exports.DiscountConditionJoinTableForeignKey || (exports.DiscountConditionJoinTableForeignKey = {}));
var DiscountConditionRepository = /** @class */ (function (_super) {
    __extends(DiscountConditionRepository, _super);
    function DiscountConditionRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiscountConditionRepository.prototype.findOneWithDiscount = function (conditionId, discountId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder("condition")
                            .leftJoinAndMapOne("condition.discount", models_1.Discount, "discount", "condition.discount_rule_id = discount.rule_id and discount.id = :discId and condition.id = :dcId", { discId: discountId, dcId: conditionId })
                            .getOne()];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    DiscountConditionRepository.prototype.getJoinTableResourceIdentifiers = function (type) {
        var conditionTable = discount_condition_product_1.DiscountConditionProduct;
        var joinTable = "product";
        var joinTableForeignKey = DiscountConditionJoinTableForeignKey.PRODUCT_ID;
        var joinTableKey = "id";
        // On the joined table (e.g. `product`), what key should be match on
        // (e.g `type_id` for product types and `id` for products)
        var resourceKey;
        switch (type) {
            case discount_condition_1.DiscountConditionType.PRODUCTS: {
                resourceKey = "id";
                joinTableForeignKey = DiscountConditionJoinTableForeignKey.PRODUCT_ID;
                joinTable = "product";
                conditionTable = discount_condition_product_1.DiscountConditionProduct;
                break;
            }
            case discount_condition_1.DiscountConditionType.PRODUCT_TYPES: {
                resourceKey = "type_id";
                joinTableForeignKey =
                    DiscountConditionJoinTableForeignKey.PRODUCT_TYPE_ID;
                joinTable = "product";
                conditionTable = discount_condition_product_type_1.DiscountConditionProductType;
                break;
            }
            case discount_condition_1.DiscountConditionType.PRODUCT_COLLECTIONS: {
                resourceKey = "collection_id";
                joinTableForeignKey =
                    DiscountConditionJoinTableForeignKey.PRODUCT_COLLECTION_ID;
                joinTable = "product";
                conditionTable = discount_condition_product_collection_1.DiscountConditionProductCollection;
                break;
            }
            case discount_condition_1.DiscountConditionType.PRODUCT_TAGS: {
                joinTableKey = "product_id";
                resourceKey = "product_tag_id";
                joinTableForeignKey =
                    DiscountConditionJoinTableForeignKey.PRODUCT_TAG_ID;
                joinTable = "product_tags";
                conditionTable = discount_condition_product_tag_1.DiscountConditionProductTag;
                break;
            }
            case discount_condition_1.DiscountConditionType.CUSTOMER_GROUPS: {
                joinTableKey = "customer_id";
                resourceKey = "customer_group_id";
                joinTable = "customer_group_customers";
                joinTableForeignKey =
                    DiscountConditionJoinTableForeignKey.CUSTOMER_GROUP_ID;
                conditionTable = discount_condition_customer_group_1.DiscountConditionCustomerGroup;
                break;
            }
            default:
                break;
        }
        return {
            joinTable: joinTable,
            joinTableKey: joinTableKey,
            resourceKey: resourceKey,
            joinTableForeignKey: joinTableForeignKey,
            conditionTable: conditionTable,
        };
    };
    DiscountConditionRepository.prototype.removeConditionResources = function (id, type, resourceIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, conditionTable, joinTableForeignKey;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.getJoinTableResourceIdentifiers(type), conditionTable = _a.conditionTable, joinTableForeignKey = _a.joinTableForeignKey;
                        if (!conditionTable || !joinTableForeignKey) {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        return [4 /*yield*/, this.createQueryBuilder()
                                .delete()
                                .from(conditionTable)
                                .where((_b = { condition_id: id }, _b[joinTableForeignKey] = (0, typeorm_1.In)(resourceIds), _b))
                                .execute()];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    DiscountConditionRepository.prototype.addConditionResources = function (conditionId, resourceIds, type, overrideExisting) {
        if (overrideExisting === void 0) { overrideExisting = false; }
        return __awaiter(this, void 0, void 0, function () {
            var toInsert, _a, conditionTable, joinTableForeignKey, insertResult;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        toInsert = [];
                        _a = this.getJoinTableResourceIdentifiers(type), conditionTable = _a.conditionTable, joinTableForeignKey = _a.joinTableForeignKey;
                        if (!conditionTable || !joinTableForeignKey) {
                            return [2 /*return*/, Promise.resolve([])];
                        }
                        toInsert = resourceIds.map(function (rId) {
                            var _a;
                            return (_a = {
                                    condition_id: conditionId
                                },
                                _a[joinTableForeignKey] = rId,
                                _a);
                        });
                        return [4 /*yield*/, this.createQueryBuilder()
                                .insert()
                                .orIgnore(true)
                                .into(conditionTable)
                                .values(toInsert)
                                .execute()];
                    case 1:
                        insertResult = _c.sent();
                        if (!overrideExisting) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.createQueryBuilder()
                                .delete()
                                .from(conditionTable)
                                .where((_b = {
                                    condition_id: conditionId
                                },
                                _b[joinTableForeignKey] = (0, typeorm_1.Not)((0, typeorm_1.In)(resourceIds)),
                                _b))
                                .execute()];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [4 /*yield*/, this.manager
                            .createQueryBuilder(conditionTable, "discon")
                            .select()
                            .where(insertResult.identifiers)
                            .getMany()];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    DiscountConditionRepository.prototype.queryConditionTable = function (_a) {
        var type = _a.type, condId = _a.condId, resourceId = _a.resourceId;
        return __awaiter(this, void 0, void 0, function () {
            var _b, conditionTable, joinTable, joinTableForeignKey, resourceKey, joinTableKey;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = this.getJoinTableResourceIdentifiers(type), conditionTable = _b.conditionTable, joinTable = _b.joinTable, joinTableForeignKey = _b.joinTableForeignKey, resourceKey = _b.resourceKey, joinTableKey = _b.joinTableKey;
                        return [4 /*yield*/, this.manager
                                .createQueryBuilder(conditionTable, "dc")
                                .innerJoin(joinTable, "resource", "dc.".concat(joinTableForeignKey, " = resource.").concat(resourceKey, " and resource.").concat(joinTableKey, " = :resourceId "), {
                                resourceId: resourceId,
                            })
                                .where("dc.condition_id = :conditionId", {
                                conditionId: condId,
                            })
                                .getCount()];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    DiscountConditionRepository.prototype.isValidForProduct = function (discountRuleId, productId) {
        return __awaiter(this, void 0, void 0, function () {
            var discountConditions, discountConditions_1, discountConditions_1_1, condition, numConditions, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder("discon")
                            .select(["discon.id", "discon.type", "discon.operator"])
                            .where("discon.discount_rule_id = :discountRuleId", {
                            discountRuleId: discountRuleId,
                        })
                            .getMany()
                        // in case of no discount conditions, we assume that the discount
                        // is valid for all
                    ];
                    case 1:
                        discountConditions = _b.sent();
                        // in case of no discount conditions, we assume that the discount
                        // is valid for all
                        if (!discountConditions.length) {
                            return [2 /*return*/, true];
                        }
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        discountConditions_1 = __values(discountConditions), discountConditions_1_1 = discountConditions_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!discountConditions_1_1.done) return [3 /*break*/, 6];
                        condition = discountConditions_1_1.value;
                        return [4 /*yield*/, this.queryConditionTable({
                                type: condition.type,
                                condId: condition.id,
                                resourceId: productId,
                            })];
                    case 4:
                        numConditions = _b.sent();
                        if (condition.operator === discount_condition_1.DiscountConditionOperator.IN &&
                            numConditions === 0) {
                            return [2 /*return*/, false];
                        }
                        if (condition.operator === discount_condition_1.DiscountConditionOperator.NOT_IN &&
                            numConditions > 0) {
                            return [2 /*return*/, false];
                        }
                        _b.label = 5;
                    case 5:
                        discountConditions_1_1 = discountConditions_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (discountConditions_1_1 && !discountConditions_1_1.done && (_a = discountConditions_1.return)) _a.call(discountConditions_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, true];
                }
            });
        });
    };
    DiscountConditionRepository.prototype.canApplyForCustomer = function (discountRuleId, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var discountConditions, discountConditions_2, discountConditions_2_1, condition, numConditions, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder("discon")
                            .select(["discon.id", "discon.type", "discon.operator"])
                            .where("discon.discount_rule_id = :discountRuleId", {
                            discountRuleId: discountRuleId,
                        })
                            .andWhere("discon.type = :type", { type: discount_condition_1.DiscountConditionType.CUSTOMER_GROUPS })
                            .getMany()
                        // in case of no discount conditions, we assume that the discount
                        // is valid for all
                    ];
                    case 1:
                        discountConditions = _b.sent();
                        // in case of no discount conditions, we assume that the discount
                        // is valid for all
                        if (!discountConditions.length) {
                            return [2 /*return*/, true];
                        }
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        discountConditions_2 = __values(discountConditions), discountConditions_2_1 = discountConditions_2.next();
                        _b.label = 3;
                    case 3:
                        if (!!discountConditions_2_1.done) return [3 /*break*/, 6];
                        condition = discountConditions_2_1.value;
                        return [4 /*yield*/, this.queryConditionTable({
                                type: "customer_groups",
                                condId: condition.id,
                                resourceId: customerId,
                            })];
                    case 4:
                        numConditions = _b.sent();
                        if (condition.operator === discount_condition_1.DiscountConditionOperator.IN &&
                            numConditions === 0) {
                            return [2 /*return*/, false];
                        }
                        if (condition.operator === discount_condition_1.DiscountConditionOperator.NOT_IN &&
                            numConditions > 0) {
                            return [2 /*return*/, false];
                        }
                        _b.label = 5;
                    case 5:
                        discountConditions_2_1 = discountConditions_2.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (discountConditions_2_1 && !discountConditions_2_1.done && (_a = discountConditions_2.return)) _a.call(discountConditions_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, true];
                }
            });
        });
    };
    DiscountConditionRepository = __decorate([
        (0, typeorm_1.EntityRepository)(discount_condition_1.DiscountCondition)
    ], DiscountConditionRepository);
    return DiscountConditionRepository;
}(typeorm_1.Repository));
exports.DiscountConditionRepository = DiscountConditionRepository;
//# sourceMappingURL=discount-condition.js.map