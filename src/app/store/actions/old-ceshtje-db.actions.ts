import { createAction, props } from "@ngrx/store";
import { BulkCreateReport, OldCeshtja } from "src/app/shared/sdk/models";

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
    props<{ bulkJson: OldCeshtja[], fileName: string, jsonOld: any }>()
)

export const uploadJsonConvertedToDbSuccess = createAction(
    '[Old Ceshtje Db Effect] Upload Success',
    props<{ report: BulkCreateReport }>()
)

export const clearRawDataFromStore = createAction(
    '[UploadComponent] Clear Raw Data'
)

export const uploadJsonConvertedToDbFailure = createAction(
    '[Old Ceshtje Db Effect] Upload Failure',
    props<{ error: any }>()
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
    props<{ oldCeshtjetFromDB: OldCeshtja[] }>()
);

export const loadAllCeshtjeFromDbFailure = createAction(
    "[Old Ceshtje Resolver] Load All Old Ceshtjet Failure",
    props<{ error: any }>()
)
/** Upsert Ceshtje */
export const upsertOldCeshtjeDb = createAction(
    "[Old Ceshtje Component] Upsert Ceshtje",
    props<{ oldCeshtje: OldCeshtja }>()
)

export const upsertOldCeshtjeDbSuccess = createAction(
    "[Old Ceshtje Component] Upsert Ceshtje Success",
    props<{ oldCeshtje: OldCeshtja }>()
)

export const upsertOldCeshtjeDbFailure = createAction(
    "[Old Ceshtje Component] Upsert Ceshtje Failure",
    props<{ error: any }>()
)
/** Delete Ceshtje */
export const deleteOldCeshtjeDb = createAction(
    "[Old Ceshtje Component] Delete Ceshtje",
    props<{ oldCeshtje: OldCeshtja }>()
)

export const deleteOldCeshtjeDbSuccess = createAction(
    "[Old Ceshtje Db Effect] Delete Ceshtje Success"
)

export const deleteOldCeshtjeDbFailure = createAction(
    "[Old Ceshtje Db Effect] Delete Ceshtje Failure",
    props<{ error: any }>()
)