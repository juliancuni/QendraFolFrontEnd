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
// import * as fromOldCeshtjeFromDb from './reducers/old-ceshtje-db.reducer';


export interface AppState {
  [fromAuth.authFeatureKey]: fromAuth.AuthState;
  [fromOldCeshtje.oldCeshtjeFeatureKey]: fromOldCeshtje.OldCeshtjetState;
  // [fromOldCeshtjeFromDb.featureKey]: fromOldCeshtjeFromDb.OldCeshtjeDbState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromOldCeshtje.oldCeshtjeFeatureKey]: fromOldCeshtje.reducer,
  // [fromOldCeshtjeFromDb.featureKey]: fromOldCeshtjeFromDb.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
