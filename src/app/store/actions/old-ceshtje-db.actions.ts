import { createAction, props } from "@ngrx/store";
import { BulkCreateReport } from "src/app/shared/entities/bulk.report";
import {  OldCeshtjeDto } from "src/app/shared/sdk/models";

/** Upload Bulk XCLSX */
export const convertXclsxFile = createAction(
    '[OldDataService] Convert XCLSX to JSON',
    props<{ rawFile: any }>()
)

export const convertXclsxFileError = createAction(
    '[OldDataService] Convert XCLSX to JSON',
    props<{ error: any }>()
)

export const uploadJsonConvertedToDb = createAction(
    '[Old Ceshtje Db Effect] Upload',
    props<{ bulkJson: OldCeshtjeDto[], fileName: string, jsonOld: any }>()
)

export const uploadJsonConvertedToDbSuccess = createAction(
    '[Old Ceshtje Db Effect] Upload Success',
    props<{ report: BulkCreateReport }>()
)

export const uploadJsonConvertedToDbFailure = createAction(
    '[Old Ceshtje Db Effect] Upload Failure',
    props<{ error: any }>()
)

export const clearRawDataFromStore = createAction(
    '[UploadComponent] Clear Raw Data'
)

export const resetTableData = createAction(
    '[Upload Component] Reset Table data'
)

/** Load All Old Ceshtjet */
export const loadAllCeshtjeFromDb = createAction(
    "[Old Ceshtje Resolver] Load All Old Ceshtjet"
);

export const loadAllCeshtjeFromDbList = createAction(
    "[Old List Component] Load All Old Ceshtjet"
);

export const loadAllCeshtjeFromDbSuccess = createAction(
    "[Old Ceshtje Resolver] Load All Old Ceshtjet Success",
    props<{ oldCeshtjetFromDB: any }>()
);

export const loadAllCeshtjeFromDbFailure = createAction(
    "[Old Ceshtje Resolver] Load All Old Ceshtjet Failure",
    props<{ error: any }>()
)
/** Create Ceshtje */
export const createOldCeshtjeDb = createAction(
    "[Old Ceshtje Component] Upsert Ceshtje",
    props<{ oldCeshtje: OldCeshtjeDto }>()
)

export const createOldCeshtjeDbSuccess = createAction(
    "[Old Ceshtje Component] Upsert Ceshtje Success",
    props<{ oldCeshtje: any }>()
)

export const createOldCeshtjeDbFailure = createAction(
    "[Old Ceshtje Component] Upsert Ceshtje Failure",
    props<{ error: any }>()
)
/** Upsert Ceshtje */
export const upsertOldCeshtjeDb = createAction(
    "[Old Ceshtje Component] Upsert Ceshtje",
    props<{ oldCeshtje: OldCeshtjeDto }>()
)

export const upsertOldCeshtjeDbSuccess = createAction(
    "[Old Ceshtje Component] Upsert Ceshtje Success",
    props<{ oldCeshtje: any }>()
)

export const upsertOldCeshtjeDbFailure = createAction(
    "[Old Ceshtje Component] Upsert Ceshtje Failure",
    props<{ error: any }>()
)
/** Delete Ceshtje */
export const deleteOldCeshtjeDb = createAction(
    "[Old Ceshtje Component] Delete Ceshtje",
    props<{ id: string }>()
)

export const deleteOldCeshtjeDbSuccess = createAction(
    "[Old Ceshtje Db Effect] Delete Ceshtje Success"
)

export const deleteOldCeshtjeDbFailure = createAction(
    "[Old Ceshtje Db Effect] Delete Ceshtje Failure",
    props<{ error: any }>()
)