export declare enum PostgresError {
    DUPLICATE_ERROR = "23505",
    FOREIGN_KEY_ERROR = "23503"
}
export declare const formatException: (err: any) => Error;
