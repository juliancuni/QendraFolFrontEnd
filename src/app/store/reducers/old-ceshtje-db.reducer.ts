import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { BulkCreateReport } from "src/app/shared/entities/bulk.report";
import { OldCeshtjeDto } from "src/app/shared/sdk/models";
import * as OldCeshtjetFromDbActions from "../actions/old-ceshtje-db.actions";

export const featureKey = 'oldCeshtjetFromDb';

export interface OldCeshtjeDbState extends EntityState<OldCeshtjeDto> {
    allOldCeshtjetDbLoaded: boolean,
    error: {},
    fileName: string,
    report: BulkCreateReport,
    jsonOld: any,
    loading: boolean,
}

export const adapter = createEntityAdapter<OldCeshtjeDto>();

export const initialOldCeshtjeDbState = adapter.getInitialState({
    allOldCeshtjetDbLoaded: false,
    error: null,
    fileName: null,
    report: null,
    jsonOld: null,
    loading: false
});

export const reducer = createReducer(

    initialOldCeshtjeDbState,
    /** Upload Bulk from XCSLX */
    on(OldCeshtjetFromDbActions.convertXclsxFile, (state) => { return { ...state, loading: true } }),

    on(OldCeshtjetFromDbActions.uploadJsonConvertedToDb, (state, action) => { return { ...state, fileName: action.fileName, loading: true } }),

    on(OldCeshtjetFromDbActions.uploadJsonConvertedToDbSuccess, (state, action) => { return { ...state, report: action.report, loading: false } }),

    on(OldCeshtjetFromDbActions.clearRawDataFromStore, (state) => { return { ...state, fileName: null, jsonOld: null, report: null, error: null, } }),

    on(OldCeshtjetFromDbActions.resetTableData, (state) => adapter.removeAll(state)),

    /** CRUD From DB */
    on(OldCeshtjetFromDbActions.loadAllCeshtjeFromDbSuccess, (state, action) => adapter.addMany(action.oldCeshtjetFromDB, { ...state, allOldCeshtjetDbLoaded: true })),

    on(OldCeshtjetFromDbActions.upsertOldCeshtjeDbSuccess, (state, action) => adapter.upsertOne(action.oldCeshtje, state)),
    
    on(OldCeshtjetFromDbActions.createOldCeshtjeDbSuccess, (state, action) => adapter.upsertOne(action.oldCeshtje, state)),

    on(OldCeshtjetFromDbActions.deleteOldCeshtjeDb, (state, action) => adapter.removeOne(action.id, state)),



    on(
        OldCeshtjetFromDbActions.loadAllCeshtjeFromDbFailure,
        OldCeshtjetFromDbActions.upsertOldCeshtjeDbFailure,
        OldCeshtjetFromDbActions.deleteOldCeshtjeDbFailure,
        OldCeshtjetFromDbActions.convertXclsxFileError,
        OldCeshtjetFromDbActions.uploadJsonConvertedToDbFailure,
        (state, action) => {
            return { ...state, error: action.error, loading: false }
        }
    ),

);

export const { selectAll } = adapter.getSelectors();