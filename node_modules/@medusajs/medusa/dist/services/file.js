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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var DefaultFileService = /** @class */ (function (_super) {
    __extends(DefaultFileService, _super);
    function DefaultFileService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultFileService.prototype.upload = function (fileData) {
        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Please add a file service plugin in order to manipulate files in Medusa");
    };
    DefaultFileService.prototype.delete = function (fileData) {
        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Please add a file service plugin in order to manipulate files in Medusa");
    };
    DefaultFileService.prototype.getUploadStreamDescriptor = function (fileData) {
        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Please add a file service plugin in order to manipulate files in Medusa");
    };
    DefaultFileService.prototype.getDownloadStream = function (fileData) {
        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Please add a file service plugin in order to manipulate files in Medusa");
    };
    DefaultFileService.prototype.getPresignedDownloadUrl = function (fileData) {
        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Please add a file service plugin in order to manipulate files in Medusa");
    };
    return DefaultFileService;
}(interfaces_1.AbstractFileService));
exports.default = DefaultFileService;
//# sourceMappingURL=file.js.map