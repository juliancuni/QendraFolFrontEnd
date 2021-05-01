import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from './reducers/auth.reducer';
import * as fromOldCeshtje from './reducers/old-ceshtje.reducer';


export interface AppState {
  [fromAuth.authFeatureKey]: fromAuth.AuthState;
  [fromOldCeshtje.oldCeshtjeFeatureKey]: fromOldCeshtje.OldCeshtjetState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromOldCeshtje.oldCeshtjeFeatureKey]: fromOldCeshtje.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
