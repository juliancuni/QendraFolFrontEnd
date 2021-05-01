import { NullTemplateVisitor } from '@angular/compiler';
import { createReducer, on } from '@ngrx/store';
import { OldCeshtja } from 'src/app/shared/entities/old.ceshtja';
import * as OldCeshtjeActions from '../actions/old-ceshtje.actions';

export const oldCeshtjeFeatureKey = 'oldCeshtjet';

export interface OldCeshtjetState {
  excelFileName: string,
  rawFile: any,
  oldData: [],
  loading: boolean,
  error: any
}

export const initialState: OldCeshtjetState = {
  excelFileName: null,
  rawFile: null,
  oldData: null,
  loading: null,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(OldCeshtjeActions.loadOldCeshtjet, (state, action) => {
    return { ...state, rawFile: action.rawFile, loading: true }
  }),
  on(OldCeshtjeActions.loadOldCeshtjetSuccess, (state, action) => {
    return { ...state, excelFileName: action.excelFileName, oldData: action.oldData, loading: false }
  }),
  on(OldCeshtjeActions.loadOldCeshtjetFailure, (state, action) => {
    return { ...state, loading: false, error: action.error }
  }),
  on(OldCeshtjeActions.clearOldData, (state) => {
    return { ...state, rawFile: null, oldData: null, excelFileName: null }
  })
);

