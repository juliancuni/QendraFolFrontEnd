export interface BulkCreateReport {
    id?: string;
    nrImportedSuccess?: number;
    nrImportedFailure?: number;
    importFailedOldIds?: number[];
    nrUpdatedSuccess?: number;
    nrUpdatedFailure?: number;
    updateFailedoldids?: number[];
    username?: string;
    created_at?: Date;
}