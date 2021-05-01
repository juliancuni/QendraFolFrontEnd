import { NullTemplateVisitor } from '@angular/compiler';
import { createReducer, on } from '@ngrx/store';
import { OldCeshtja } from 'src/app/shared/entities/old.ceshtja';
import * as OldCeshtjeActions from '../actions/old-ceshtje.actions';

export const oldCeshtjeFeatureKey = 'oldCeshtjet';

export interface OldCeshtjetState {
  rawFile: any,
  excelFileName: string,
  oldData: OldCeshtja[],
  oldCeshtje: OldCeshtja,
  oldHeaders: any,
  loading: boolean,
  error: any
}

export const initialState: OldCeshtjetState = {
  rawFile: null,
  excelFileName: null,
  oldData: null,
  oldCeshtje: null,
  oldHeaders: null,
  loading: null,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(OldCeshtjeActions.loadOldCeshtjet, (state, action) => {
    return { ...state, rawFile: action.rawFile, loading: true }
  }),
  on(OldCeshtjeActions.loadOldCeshtjetSuccess, (state, action) => {
    return { ...state, rawFile: null, excelFileName: action.excelFileName, oldData: action.oldData, oldHeaders: action.oldHeaders, loading: false, error: null }
  }),
  on(OldCeshtjeActions.loadOldCeshtjetFailure, (state, action) => {
    return { ...state, rawFile: null, excelFileName: null, oldData: null, oldHeaders: null, loading: false, error: action.error }
  }),
  on(OldCeshtjeActions.clearOldData, (state) => {
    return { ...state, rawFile: null, excelFileName: null, oldData: null, oldHeaders: null, loading: false, error: null }
  }),
  on(OldCeshtjeActions.loadOldCeshtje, (state, action) => {
    return { ...state, oldCeshtje: action.oldCeshtje }
  })
);

