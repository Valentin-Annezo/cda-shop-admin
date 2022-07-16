/// <reference types="qs" />
/// <reference types="express" />
export { getRequestedBatchJob } from "./batch-job/get-requested-batch-job";
export { canAccessBatchJob } from "./batch-job/can-access-batch-job";
export { transformQuery } from "./transform-query";
export { transformBody } from "./transform-body";
declare const _default: {
    authenticate: () => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    authenticateCustomer: () => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    normalizeQuery: () => (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>, next: import("express").NextFunction) => void;
    wrap: (fn: (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>) => Promise<void>) => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
};
export default _default;
