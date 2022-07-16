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
exports.GiftCardRepository = void 0;
var lodash_1 = require("lodash");
var typeorm_1 = require("typeorm");
var gift_card_1 = require("../models/gift-card");
var GiftCardRepository = /** @class */ (function (_super) {
    __extends(GiftCardRepository, _super);
    function GiftCardRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GiftCardRepository.prototype.findWithRelations = function (relations, idsOrOptionsWithoutRelations) {
        if (relations === void 0) { relations = []; }
        if (idsOrOptionsWithoutRelations === void 0) { idsOrOptionsWithoutRelations = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var entities, count, _a, results, resultCount, entitiesIds, groupedRelations, relations_1, relations_1_1, rel, _b, topLevel, entitiesIdsWithRelations, entitiesAndRelations, entitiesAndRelationsById;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        entities = [];
                        count = 0;
                        if (!Array.isArray(idsOrOptionsWithoutRelations)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findByIds(idsOrOptionsWithoutRelations)];
                    case 1:
                        entities = _d.sent();
                        count = idsOrOptionsWithoutRelations.length;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.findAndCount(idsOrOptionsWithoutRelations)];
                    case 3:
                        _a = __read.apply(void 0, [_d.sent(), 2]), results = _a[0], resultCount = _a[1];
                        entities = results;
                        count = resultCount;
                        _d.label = 4;
                    case 4:
                        entitiesIds = entities.map(function (_a) {
                            var id = _a.id;
                            return id;
                        });
                        groupedRelations = {};
                        try {
                            for (relations_1 = __values(relations), relations_1_1 = relations_1.next(); !relations_1_1.done; relations_1_1 = relations_1.next()) {
                                rel = relations_1_1.value;
                                _b = __read(rel.split("."), 1), topLevel = _b[0];
                                if (groupedRelations[topLevel]) {
                                    groupedRelations[topLevel].push(rel);
                                }
                                else {
                                    groupedRelations[topLevel] = [rel];
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (relations_1_1 && !relations_1_1.done && (_c = relations_1.return)) _c.call(relations_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [4 /*yield*/, Promise.all(Object.entries(groupedRelations).map(function (_a) {
                                var _b = __read(_a, 2), _ = _b[0], rels = _b[1];
                                return _this.findByIds(entitiesIds, {
                                    select: ["id"],
                                    relations: rels,
                                });
                            })).then(lodash_1.flatten)];
                    case 5:
                        entitiesIdsWithRelations = _d.sent();
                        entitiesAndRelations = entitiesIdsWithRelations.concat(entities);
                        entitiesAndRelationsById = (0, lodash_1.groupBy)(entitiesAndRelations, "id");
                        return [2 /*return*/, [
                                Object.values(entitiesAndRelationsById).map(function (v) { return lodash_1.merge.apply(void 0, __spreadArray([{}], __read(v), false)); }),
                                count,
                            ]];
                }
            });
        });
    };
    GiftCardRepository.prototype.queryGiftCards = function (q, where, rels, shouldCount) {
        if (shouldCount === void 0) { shouldCount = false; }
        return __awaiter(this, void 0, void 0, function () {
            var qb, raw, count, _a, results_1, resultCount, _b, results;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        qb = this.createQueryBuilder("gift_card")
                            .leftJoinAndSelect("gift_card.order", "order")
                            .select(["gift_card.id"])
                            .where(where)
                            .andWhere(new typeorm_1.Brackets(function (qb) {
                            return qb
                                .where("gift_card.code ILIKE :q", { q: "%".concat(q, "%") })
                                .orWhere("display_id::varchar(255) ILIKE :dId", { dId: "".concat(q) });
                        }));
                        raw = [];
                        count = 0;
                        if (!shouldCount) return [3 /*break*/, 2];
                        return [4 /*yield*/, qb.getManyAndCount()];
                    case 1:
                        _a = __read.apply(void 0, [_c.sent(), 2]), results_1 = _a[0], resultCount = _a[1];
                        raw = results_1;
                        count = resultCount;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, qb.getMany()];
                    case 3:
                        raw = _c.sent();
                        _c.label = 4;
                    case 4: return [4 /*yield*/, this.findWithRelations(rels, raw.map(function (i) { return i.id; }))];
                    case 5:
                        _b = __read.apply(void 0, [_c.sent(), 1]), results = _b[0];
                        return [2 /*return*/, [results, count]];
                }
            });
        });
    };
    GiftCardRepository.prototype.listGiftCardsAndCount = function (inputQuery, rels, q) {
        if (rels === void 0) { rels = []; }
        return __awaiter(this, void 0, void 0, function () {
            var query, where;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = __assign({}, inputQuery);
                        if (!q) return [3 /*break*/, 2];
                        where = query.where;
                        delete where.id;
                        return [4 /*yield*/, this.queryGiftCards(q, where, rels, true)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.findWithRelations(rels, query)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GiftCardRepository.prototype.listGiftCards = function (query, rels, q) {
        if (rels === void 0) { rels = []; }
        return __awaiter(this, void 0, void 0, function () {
            var where, _a, result, _b, results;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!q) return [3 /*break*/, 2];
                        where = query.where;
                        delete where.id;
                        return [4 /*yield*/, this.queryGiftCards(q, where, rels)];
                    case 1:
                        _a = __read.apply(void 0, [_c.sent(), 1]), result = _a[0];
                        return [2 /*return*/, result];
                    case 2: return [4 /*yield*/, this.findWithRelations(rels, query)];
                    case 3:
                        _b = __read.apply(void 0, [_c.sent(), 1]), results = _b[0];
                        return [2 /*return*/, results];
                }
            });
        });
    };
    GiftCardRepository.prototype.findOneWithRelations = function (relations, optionsWithoutRelations) {
        if (relations === void 0) { relations = []; }
        if (optionsWithoutRelations === void 0) { optionsWithoutRelations = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Limit 1
                        optionsWithoutRelations.take = 1;
                        return [4 /*yield*/, this.findWithRelations(relations, optionsWithoutRelations)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), result = _a[0];
                        return [2 /*return*/, result[0]];
                }
            });
        });
    };
    GiftCardRepository = __decorate([
        (0, typeorm_1.EntityRepository)(gift_card_1.GiftCard)
    ], GiftCardRepository);
    return GiftCardRepository;
}(typeorm_1.Repository));
exports.GiftCardRepository = GiftCardRepository;
//# sourceMappingURL=gift-card.js.map