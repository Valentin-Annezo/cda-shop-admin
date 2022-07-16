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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var medusa_interfaces_1 = require("medusa-interfaces");
var typeorm_1 = require("typeorm");
/**
 * Provides layer to manipulate products.
 * @extends BaseService
 */
var ProductTypeService = /** @class */ (function (_super) {
    __extends(ProductTypeService, _super);
    function ProductTypeService(_a) {
        var manager = _a.manager, productTypeRepository = _a.productTypeRepository;
        var _this = _super.call(this) || this;
        _this.manager_ = manager;
        _this.typeRepository_ = productTypeRepository;
        return _this;
    }
    ProductTypeService.prototype.withTransaction = function (transactionManager) {
        if (!transactionManager) {
            return this;
        }
        var cloned = new ProductTypeService({
            manager: transactionManager,
            productTypeRepository: this.typeRepository_,
        });
        cloned.transactionManager_ = transactionManager;
        cloned.manager_ = transactionManager;
        return cloned;
    };
    /**
     * Gets a product by id.
     * Throws in case of DB Error and if product was not found.
     * @param id - id of the product to get.
     * @param config - object that defines what should be included in the
     *   query response
     * @return {Promise<Product>} the result of the find one operation.
     */
    ProductTypeService.prototype.retrieve = function (id, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var typeRepo, query, type;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        typeRepo = this.manager_.getCustomRepository(this.typeRepository_);
                        query = this.buildQuery_({ id: id }, config);
                        return [4 /*yield*/, typeRepo.findOne(query)];
                    case 1:
                        type = _a.sent();
                        if (!type) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Product with id: ".concat(id, " was not found"));
                        }
                        return [2 /*return*/, type];
                }
            });
        });
    };
    /**
     * Lists product types
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise} the result of the find operation
     */
    ProductTypeService.prototype.list = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { skip: 0, take: 20 }; }
        return __awaiter(this, void 0, void 0, function () {
            var typeRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        typeRepo = this.manager_.getCustomRepository(this.typeRepository_);
                        query = this.buildQuery_(selector, config);
                        return [4 /*yield*/, typeRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Lists product tags and adds count.
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise} the result of the find operation
     */
    ProductTypeService.prototype.listAndCount = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { skip: 0, take: 20 }; }
        return __awaiter(this, void 0, void 0, function () {
            var typeRepo, q, query, where_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        typeRepo = this.manager_.getCustomRepository(this.typeRepository_);
                        q = undefined;
                        if ("q" in selector) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = this.buildQuery_(selector, config);
                        if (q) {
                            where_1 = query.where;
                            delete where_1.value;
                            query.where = function (qb) {
                                qb.where(where_1).andWhere([{ value: (0, typeorm_1.ILike)("%".concat(q, "%")) }]);
                            };
                        }
                        return [4 /*yield*/, typeRepo.findAndCount(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ProductTypeService;
}(medusa_interfaces_1.BaseService));
exports.default = ProductTypeService;
//# sourceMappingURL=product-type.js.map