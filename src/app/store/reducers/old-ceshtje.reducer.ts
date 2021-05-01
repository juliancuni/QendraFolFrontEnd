import { Action, createReducer, on } from '@ngrx/store';
import { OldCeshtja } from 'src/app/shared/entities/old.ceshtja';
import * as OldCeshtjeActions from '../actions/old-ceshtje.actions';

export const oldCeshtjeFeatureKey = 'oldCeshtjet';

export interface OldCeshtjetState {
  oldCeshtjet: OldCeshtja[]
}

export const initialState: OldCeshtjetState = {
  oldCeshtjet: []
};


export const reducer = createReducer(
  initialState,

  // on(OldCeshtjeActions.loadOldCeshtjet, state => state),
  on(OldCeshtjeActions.loadOldCeshtjetSuccess, (state, action) => {
    return { ...state, oldCeshtjet: action.oldCeshtjet }
  }),
  on(OldCeshtjeActions.loadOldCeshtjetFailure, (state, action) => {
    return { ...state, error: action.error }
  }),

);

