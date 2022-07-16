"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var medusa_core_utils_1 = require("medusa-core-utils");
var feature_flags_1 = __importDefault(require("../loaders/feature-flags"));
var logger_1 = __importDefault(require("../loaders/logger"));
var get_migrations_1 = __importDefault(require("./utils/get-migrations"));
var t = function (_a) {
    var directory = _a.directory;
    return __awaiter(this, void 0, void 0, function () {
        var args, configModule, featureFlagRouter, enabledMigrations, connection, unapplied;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    args = process.argv;
                    args.shift();
                    args.shift();
                    args.shift();
                    configModule = (0, medusa_core_utils_1.getConfigFile)(directory, "medusa-config").configModule;
                    featureFlagRouter = (0, feature_flags_1.default)(configModule);
                    return [4 /*yield*/, (0, get_migrations_1.default)(directory, featureFlagRouter)];
                case 1:
                    enabledMigrations = _b.sent();
                    return [4 /*yield*/, (0, typeorm_1.createConnection)({
                            type: configModule.projectConfig.database_type,
                            url: configModule.projectConfig.database_url,
                            extra: configModule.projectConfig.database_extra || {},
                            migrations: enabledMigrations,
                            logging: true,
                        })];
                case 2:
                    connection = _b.sent();
                    if (!(args[0] === "run")) return [3 /*break*/, 5];
                    return [4 /*yield*/, connection.runMigrations()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, connection.close()];
                case 4:
                    _b.sent();
                    logger_1.default.info("Migrations completed.");
                    process.exit();
                    return [3 /*break*/, 11];
                case 5:
                    if (!(args[0] === "revert")) return [3 /*break*/, 8];
                    return [4 /*yield*/, connection.undoLastMigration({ transaction: "all" })];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, connection.close()];
                case 7:
                    _b.sent();
                    logger_1.default.info("Migrations reverted.");
                    process.exit();
                    return [3 /*break*/, 11];
                case 8:
                    if (!(args[0] === "show")) return [3 /*break*/, 11];
                    return [4 /*yield*/, connection.showMigrations()];
                case 9:
                    unapplied = _b.sent();
                    return [4 /*yield*/, connection.close()];
                case 10:
                    _b.sent();
                    process.exit(unapplied ? 1 : 0);
                    _b.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    });
};
exports.default = t;
//# sourceMappingURL=migrate.js.map