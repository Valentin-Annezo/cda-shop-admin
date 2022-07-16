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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnabledMigrations = void 0;
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var lodash_1 = require("lodash");
var fs_exists_cached_1 = require("fs-exists-cached");
var medusa_core_utils_1 = require("medusa-core-utils");
function createFileContentHash(path, files) {
    return path + files;
}
// TODO: Create unique id for each plugin
function createPluginId(name) {
    return name;
}
/**
 * Finds the correct path for the plugin. If it is a local plugin it will be
 * found in the plugins folder. Otherwise we will look for the plugin in the
 * installed npm packages.
 * @param {string} pluginName - the name of the plugin to find. Should match
 *    the name of the folder where the plugin is contained.
 * @return {object} the plugin details
 */
function resolvePlugin(pluginName) {
    // Only find plugins when we're not given an absolute path
    if (!(0, fs_exists_cached_1.sync)(pluginName)) {
        // Find the plugin in the local plugins folder
        var resolvedPath = path_1.default.resolve("./plugins/".concat(pluginName));
        if ((0, fs_exists_cached_1.sync)(resolvedPath)) {
            if ((0, fs_exists_cached_1.sync)("".concat(resolvedPath, "/package.json"))) {
                var packageJSON = JSON.parse(fs_1.default.readFileSync("".concat(resolvedPath, "/package.json"), "utf-8"));
                var name = packageJSON.name || pluginName;
                // warnOnIncompatiblePeerDependency(name, packageJSON)
                return {
                    resolve: resolvedPath,
                    name: name,
                    id: createPluginId(name),
                    options: {},
                    version: packageJSON.version || createFileContentHash(resolvedPath, "**"),
                };
            }
            else {
                // Make package.json a requirement for local plugins too
                throw new Error("Plugin ".concat(pluginName, " requires a package.json file"));
            }
        }
    }
    var rootDir = path_1.default.resolve(".");
    /**
     *  Here we have an absolute path to an internal plugin, or a name of a module
     *  which should be located in node_modules.
     */
    try {
        var requireSource = rootDir !== null
            ? (0, medusa_core_utils_1.createRequireFromPath)("".concat(rootDir, "/:internal:"))
            : require;
        // If the path is absolute, resolve the directory of the internal plugin,
        // otherwise resolve the directory containing the package.json
        var resolvedPath = path_1.default.dirname(requireSource.resolve("".concat(pluginName, "/package.json")));
        var packageJSON = JSON.parse(fs_1.default.readFileSync("".concat(resolvedPath, "/package.json"), "utf-8"));
        // warnOnIncompatiblePeerDependency(packageJSON.name, packageJSON)
        return {
            resolve: resolvedPath,
            id: createPluginId(packageJSON.name),
            name: packageJSON.name,
            version: packageJSON.version,
        };
    }
    catch (err) {
        throw new Error("Unable to find plugin \"".concat(pluginName, "\". Perhaps you need to install its package?"));
    }
}
exports.default = (function (directory, featureFlagRouter) { return __awaiter(void 0, void 0, void 0, function () {
    var configModule, plugins, resolved, migrationDirs, coreMigrations, resolved_1, resolved_1_1, p, exists;
    var e_1, _a;
    return __generator(this, function (_b) {
        configModule = (0, medusa_core_utils_1.getConfigFile)(directory, "medusa-config").configModule;
        plugins = configModule.plugins;
        resolved = plugins.map(function (plugin) {
            if ((0, lodash_1.isString)(plugin)) {
                return resolvePlugin(plugin);
            }
            var details = resolvePlugin(plugin.resolve);
            details.options = plugin.options;
            return details;
        });
        resolved.push({
            resolve: "".concat(directory, "/dist"),
            name: "project-plugin",
            id: createPluginId("project-plugin"),
            options: {},
            version: createFileContentHash(process.cwd(), "**"),
        });
        migrationDirs = [];
        coreMigrations = path_1.default.resolve(path_1.default.join(__dirname, "..", "..", "migrations"));
        migrationDirs.push(path_1.default.join(coreMigrations, "*.js"));
        try {
            for (resolved_1 = __values(resolved), resolved_1_1 = resolved_1.next(); !resolved_1_1.done; resolved_1_1 = resolved_1.next()) {
                p = resolved_1_1.value;
                exists = (0, fs_exists_cached_1.sync)("".concat(p.resolve, "/migrations"));
                if (exists) {
                    migrationDirs.push("".concat(p.resolve, "/migrations/*.js"));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (resolved_1_1 && !resolved_1_1.done && (_a = resolved_1.return)) _a.call(resolved_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return [2 /*return*/, (0, exports.getEnabledMigrations)(migrationDirs, function (flag) {
                return featureFlagRouter.isFeatureEnabled(flag);
            })];
    });
}); });
var getEnabledMigrations = function (migrationDirs, isFlagEnabled) {
    var allMigrations = migrationDirs.flatMap(function (dir) {
        return glob_1.default.sync(dir);
    });
    return allMigrations
        .map(function (file) {
        var loaded = require(file);
        if (typeof loaded.featureFlag === "undefined" ||
            isFlagEnabled(loaded.featureFlag)) {
            return file;
        }
        return false;
    })
        .filter(Boolean);
};
exports.getEnabledMigrations = getEnabledMigrations;
//# sourceMappingURL=get-migrations.js.map