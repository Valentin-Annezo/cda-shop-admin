import { DeleteResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare type AdminUploadsRes = {
    uploads: {
        url: string;
    }[];
};
export declare type AdminDeleteUploadsRes = DeleteResponse;
export declare type AdminUploadsDownloadUrlRes = {
    download_url: string;
};
export * from "./create-upload";
export * from "./delete-upload";
export * from "./get-download-url";
