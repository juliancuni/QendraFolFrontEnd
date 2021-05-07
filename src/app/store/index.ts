import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  INIT,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from './reducers/auth.reducer';
import * as fromOldCeshtjeFromDb from './reducers/old-ceshtje-db.reducer';
import * as fromAuthActions from './actions/auth.actions';

export interface AppState {
  [fromAuth.authFeatureKey]: fromAuth.AuthState;
  [fromOldCeshtjeFromDb.featureKey]: fromOldCeshtjeFromDb.OldCeshtjeDbState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromOldCeshtjeFromDb.featureKey]: fromOldCeshtjeFromDb.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [
  logout
] : [
  logout
];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export function logout(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action != null && action.type === fromAuthActions.logout.type) {
      return reducer(undefined, { type: INIT });
    }
    return reducer(state, action);
  };
}


