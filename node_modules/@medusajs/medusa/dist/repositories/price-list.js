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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceListRepository = void 0;
var lodash_1 = require("lodash");
var typeorm_1 = require("typeorm");
var price_list_1 = require("../models/price-list");
var PriceListRepository = /** @class */ (function (_super) {
    __extends(PriceListRepository, _super);
    function PriceListRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PriceListRepository.prototype.getFreeTextSearchResultsAndCount = function (q, options, groups, relations) {
        var _a;
        if (options === void 0) { options = { where: {} }; }
        if (relations === void 0) { relations = []; }
        return __awaiter(this, void 0, void 0, function () {
            var qb, _b, results, count, price_lists;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        options.where = (_a = options.where) !== null && _a !== void 0 ? _a : {};
                        qb = this.createQueryBuilder("price_list")
                            .leftJoinAndSelect("price_list.customer_groups", "customer_group")
                            .select(["price_list.id"])
                            .where(options.where)
                            .andWhere(new typeorm_1.Brackets(function (qb) {
                            qb.where("price_list.description ILIKE :q", { q: "%".concat(q, "%") })
                                .orWhere("price_list.name ILIKE :q", { q: "%".concat(q, "%") })
                                .orWhere("customer_group.name ILIKE :q", { q: "%".concat(q, "%") });
                        }))
                            .skip(options.skip)
                            .take(options.take);
                        if (groups) {
                            qb.andWhere("group.id IN (:...ids)", { ids: groups.value });
                        }
                        return [4 /*yield*/, qb.getManyAndCount()];
                    case 1:
                        _b = __read.apply(void 0, [_c.sent(), 2]), results = _b[0], count = _b[1];
                        return [4 /*yield*/, this.findWithRelations(relations, results.map(function (r) { return r.id; }))];
                    case 2:
                        price_lists = _c.sent();
                        return [2 /*return*/, [price_lists, count]];
                }
            });
        });
    };
    PriceListRepository.prototype.findWithRelations = function (relations, idsOrOptionsWithoutRelations) {
        if (relations === void 0) { relations = []; }
        if (idsOrOptionsWithoutRelations === void 0) { idsOrOptionsWithoutRelations = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var entities, groupedRelations, relations_1, relations_1_1, relation, _a, topLevel, entitiesIds, entitiesIdsWithRelations, entitiesAndRelations, entitiesAndRelationsById;
            var e_1, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!Array.isArray(idsOrOptionsWithoutRelations)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findByIds(idsOrOptionsWithoutRelations)];
                    case 1:
                        entities = _c.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.find(idsOrOptionsWithoutRelations)];
                    case 3:
                        entities = _c.sent();
                        _c.label = 4;
                    case 4:
                        groupedRelations = {};
                        try {
                            for (relations_1 = __values(relations), relations_1_1 = relations_1.next(); !relations_1_1.done; relations_1_1 = relations_1.next()) {
                                relation = relations_1_1.value;
                                _a = __read(relation.split("."), 1), topLevel = _a[0];
                                if (groupedRelations[topLevel]) {
                                    groupedRelations[topLevel].push(relation);
                                }
                                else {
                                    groupedRelations[topLevel] = [relation];
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (relations_1_1 && !relations_1_1.done && (_b = relations_1.return)) _b.call(relations_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        entitiesIds = entities.map(function (_a) {
                            var id = _a.id;
                            return id;
                        });
                        return [4 /*yield*/, Promise.all(Object.values(groupedRelations).map(function (relations) {
                                return _this.findByIds(entitiesIds, {
                                    select: ["id"],
                                    relations: relations,
                                });
                            })).then(function (entitiesIdsWithRelations) { return entitiesIdsWithRelations.flat(); })];
                    case 5:
                        entitiesIdsWithRelations = _c.sent();
                        entitiesAndRelations = entitiesIdsWithRelations.concat(entities);
                        entitiesAndRelationsById = (0, lodash_1.groupBy)(entitiesAndRelations, "id");
                        return [2 /*return*/, (0, lodash_1.map)(entitiesAndRelationsById, function (entityAndRelations) {
                                return _this.merge.apply(_this, __spreadArray([_this.create()], __read(entityAndRelations), false));
                            })];
                }
            });
        });
    };
    PriceListRepository.prototype.findOneWithRelations = function (relations, options) {
        var _a;
        if (relations === void 0) { relations = []; }
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options.take = 1;
                        return [4 /*yield*/, this.findWithRelations(relations, options)];
                    case 1: return [2 /*return*/, (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.pop()];
                }
            });
        });
    };
    PriceListRepository.prototype.listAndCount = function (query, groups) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var qb;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        qb = this.createQueryBuilder("price_list")
                            .where(query.where)
                            .skip(query.skip)
                            .take(query.take);
                        if (groups) {
                            qb.leftJoinAndSelect("price_list.customer_groups", "group").andWhere("group.id IN (:...ids)", { ids: groups.value });
                        }
                        if ((_a = query.relations) === null || _a === void 0 ? void 0 : _a.length) {
                            query.relations.forEach(function (rel) {
                                qb.leftJoinAndSelect("price_list.".concat(rel), rel);
                            });
                        }
                        return [4 /*yield*/, qb.getManyAndCount()];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    PriceListRepository = __decorate([
        (0, typeorm_1.EntityRepository)(price_list_1.PriceList)
    ], PriceListRepository);
    return PriceListRepository;
}(typeorm_1.Repository));
exports.PriceListRepository = PriceListRepository;
//# sourceMappingURL=price-list.js.map