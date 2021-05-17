export interface BulkCreateReport {
    id?: string;
    nrImportedSuccess?: number;
    nrImportedFailure?: number;
    importFailedOldIds?: number[];
    username?: string;
    created_at?: Date;
}