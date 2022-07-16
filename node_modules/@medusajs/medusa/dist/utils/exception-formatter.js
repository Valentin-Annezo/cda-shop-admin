"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatException = exports.PostgresError = void 0;
var medusa_core_utils_1 = require("medusa-core-utils");
var PostgresError;
(function (PostgresError) {
    PostgresError["DUPLICATE_ERROR"] = "23505";
    PostgresError["FOREIGN_KEY_ERROR"] = "23503";
})(PostgresError = exports.PostgresError || (exports.PostgresError = {}));
var formatException = function (err) {
    var _a, _b;
    switch (err.code) {
        case PostgresError.DUPLICATE_ERROR:
            return new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.DUPLICATE_ERROR, "".concat(err.table.charAt(0).toUpperCase()).concat(err.table.slice(1), " with ").concat(err.detail
                .slice(4)
                .replace(/[()=]/g, function (s) { return (s === "=" ? " " : ""); })));
        case PostgresError.FOREIGN_KEY_ERROR: {
            var matches = /Key \(([\w-\d]+)\)=\(([\w-\d]+)\) is not present in table "(\w+)"/g.exec(err.detail);
            if ((matches === null || matches === void 0 ? void 0 : matches.length) !== 4) {
                return new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, JSON.stringify(matches));
            }
            return new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "".concat((_a = matches[3]) === null || _a === void 0 ? void 0 : _a.charAt(0).toUpperCase()).concat((_b = matches[3]) === null || _b === void 0 ? void 0 : _b.slice(1), " with ").concat(matches[1], " ").concat(matches[2], " does not exist."));
        }
        default:
            return err;
    }
};
exports.formatException = formatException;
//# sourceMappingURL=exception-formatter.js.map