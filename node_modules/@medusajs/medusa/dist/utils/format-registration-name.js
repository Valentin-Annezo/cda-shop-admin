"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
/**
 * Formats a filename into the correct container resolution name.
 * Names are camelCase formatted and namespaced by the folder i.e:
 * models/example-person -> examplePersonModel
 * @param path - the full path of the file
 * @return the formatted name
 */
function formatRegistrationName(path) {
    var parsed = (0, path_1.parse)(path);
    var parsedDir = (0, path_1.parse)(parsed.dir);
    var rawname = parsed.name;
    var namespace = parsedDir.name;
    if (namespace.startsWith("__")) {
        var parsedCoreDir = (0, path_1.parse)(parsedDir.dir);
        namespace = parsedCoreDir.name;
    }
    switch (namespace) {
        // We strip the last character when adding the type of registration
        // this is a trick for plural "ies"
        case "repositories":
            namespace = "repositorys";
            break;
        case "strategies":
            namespace = "strategys";
            break;
        default:
            break;
    }
    var upperNamespace = namespace.charAt(0).toUpperCase() + namespace.slice(1, -1);
    var parts = rawname.split("-").map(function (n, index) {
        if (index !== 0) {
            return n.charAt(0).toUpperCase() + n.slice(1);
        }
        return n;
    });
    return parts.join("") + upperNamespace;
}
exports.default = formatRegistrationName;
//# sourceMappingURL=format-registration-name.js.map