import { BatchJob } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare type AdminBatchJobRes = {
    batch_job: BatchJob;
};
export declare type AdminBatchJobDeleteRes = DeleteResponse;
export declare type AdminBatchJobListRes = PaginatedResponse & {
    batch_jobs: BatchJob[];
};
export declare const defaultAdminBatchFields: string[];
export * from "./cancel-batch-job";
export * from "./confirm-batch-job";
export * from "./create-batch-job";
export * from "./get-batch-job";
export * from "./list-batch-jobs";
