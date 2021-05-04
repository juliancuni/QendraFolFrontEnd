import { createReducer, on } from '@ngrx/store';
import { BulkCreateReport, OldCeshtja } from 'src/app/shared/sdk/models';
import * as OldCeshtjeActions from '../actions/old-ceshtje.actions';

export const oldCeshtjeFeatureKey = 'oldCeshtjet';

export interface OldCeshtjetState {
  rawFile: any,
  excelFileName: string,
  oldData: OldCeshtja[],
  oldCeshtje: OldCeshtja,
  oldHeaders: any,
  loading: boolean,
  error: any,
  errorSavedOdlC: any,
  nrSuccess: number,
  nrFailures: number,
  bulkReport: BulkCreateReport
}

export const initialState: OldCeshtjetState = {
  rawFile: null,
  excelFileName: null,
  oldData: null,
  oldCeshtje: null,
  oldHeaders: null,
  loading: null,
  error: null,
  errorSavedOdlC: null,
  nrSuccess: 0,
  nrFailures: 0,
  bulkReport: null
};

export const reducer = createReducer(
  initialState,
  on(OldCeshtjeActions.loadOldCeshtjetXls, (state, action) => {
    return { ...state, rawFile: action.rawFile, loading: true }
  }),
  on(OldCeshtjeActions.loadOldCeshtjetSuccessXls, (state, action) => {
    return { ...state, rawFile: null, excelFileName: action.excelFileName, oldData: action.oldData, oldHeaders: action.oldHeaders, loading: false, error: null }
  }),
  on(OldCeshtjeActions.loadOldCeshtjetFailureXls, (state, action) => {
    return { ...state, rawFile: null, excelFileName: null, oldData: null, oldHeaders: null, loading: false, error: action.error }
  }),
  on(OldCeshtjeActions.clearOldData, (state) => {
    return { ...state, rawFile: null, excelFileName: null, oldData: null, oldHeaders: null, loading: false, error: null, bulkReport: null, oldCeshtje: null }
  }),
  on(OldCeshtjeActions.loadOldCeshtje, (state, action) => {
    return { ...state, oldCeshtje: action.oldCeshtje }
  }),
  on(OldCeshtjeActions.bulkSaveOldCeshtjeToDb, (state) => {
    return { ...state, loading: true }
  }),
  on(OldCeshtjeActions.bulkSaveOldCeshtjeToDbSuccess, (state, action) => {
    return { ...state, loading: false, bulkReport: action.bulkReport }
  }),
  on(OldCeshtjeActions.bulkSaveOldCeshtjeToDbFailure, (state) => {
    return { ...state, loading: false }
  }),
  on(OldCeshtjeActions.putOldCeshtjeToDb, (state) => {
    return { ...state, loading: true }
  }),
  on(OldCeshtjeActions.putOldCeshtjeToDbSuccess, (state) => {
    return { ...state, loading: false }
  }),
  on(OldCeshtjeActions.putOldCeshtjeToDbFailure, (state) => {
    return { ...state, loading: false }
  }),
);

