import { DateComparisonOperator } from "./common";
import { BatchJob } from "../models";
export declare enum BatchJobStatus {
    CREATED = "created",
    PRE_PROCESSED = "pre_processed",
    CONFIRMED = "confirmed",
    PROCESSING = "processing",
    COMPLETED = "completed",
    CANCELED = "canceled",
    FAILED = "failed"
}
export declare type BatchJobUpdateProps = Partial<Pick<BatchJob, "context" | "result">>;
export declare type CreateBatchJobInput = {
    type: string;
    context: BatchJob["context"];
    dry_run: boolean;
};
export declare type BatchJobResultError = {
    message: string;
    code: string | number;
    [key: string]: unknown;
};
export declare type BatchJobResultStatDescriptor = {
    key: string;
    name: string;
    message: string;
};
export declare class FilterableBatchJobProps {
    id?: string | string[];
    status?: BatchJobStatus[];
    type?: string[];
    created_by?: string | string[];
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
}
export declare type BatchJobCreateProps = Pick<BatchJob, "context" | "type" | "created_by" | "dry_run">;
