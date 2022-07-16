"use strict";
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
exports.buildQuery = void 0;
var typeorm_1 = require("typeorm");
/**
 * Used to build TypeORM queries.
 * @param selector The selector
 * @param config The config
 * @return The QueryBuilderConfig
 */
function buildQuery(selector, config) {
    if (config === void 0) { config = {}; }
    var build = function (obj) {
        return Object.entries(obj).reduce(function (acc, _a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            // Undefined values indicate that they have no significance to the query.
            // If the query is looking for rows where a column is not set it should use null instead of undefined
            if (typeof value === "undefined") {
                return acc;
            }
            if (value === null) {
                acc[key] = (0, typeorm_1.IsNull)();
                return acc;
            }
            var subquery = [];
            switch (true) {
                case value instanceof typeorm_1.FindOperator:
                    acc[key] = value;
                    break;
                case Array.isArray(value):
                    acc[key] = (0, typeorm_1.In)(__spreadArray([], __read(value), false));
                    break;
                case value !== null && typeof value === "object":
                    Object.entries(value).map(function (_a) {
                        var _b = __read(_a, 2), modifier = _b[0], val = _b[1];
                        switch (modifier) {
                            case "lt":
                                subquery.push({ operator: "<", value: val });
                                break;
                            case "gt":
                                subquery.push({ operator: ">", value: val });
                                break;
                            case "lte":
                                subquery.push({ operator: "<=", value: val });
                                break;
                            case "gte":
                                subquery.push({ operator: ">=", value: val });
                                break;
                            default:
                                acc[key] = value;
                                break;
                        }
                    });
                    if (subquery.length) {
                        acc[key] = (0, typeorm_1.Raw)(function (a) {
                            return subquery
                                .map(function (s, index) { return "".concat(a, " ").concat(s.operator, " :").concat(index); })
                                .join(" AND ");
                        }, subquery.map(function (s) { return s.value; }));
                    }
                    break;
                default:
                    acc[key] = value;
                    break;
            }
            return acc;
        }, {});
    };
    var query = {
        where: build(selector),
    };
    if ("deleted_at" in selector) {
        query.withDeleted = true;
    }
    if ("skip" in config) {
        query.skip = config.skip;
    }
    if ("take" in config) {
        query.take = config.take;
    }
    if ("relations" in config) {
        query.relations = config.relations;
    }
    if ("select" in config) {
        query.select = config.select;
    }
    if ("order" in config) {
        query.order = config.order;
    }
    return query;
}
exports.buildQuery = buildQuery;
//# sourceMappingURL=build-query.js.map