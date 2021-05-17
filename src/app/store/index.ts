import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromOldCeshtjeFromDb from './reducers/old-ceshtje-db.reducer';

export interface AppState {
  [fromOldCeshtjeFromDb.featureKey]: fromOldCeshtjeFromDb.OldCeshtjeDbState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromOldCeshtjeFromDb.featureKey]: fromOldCeshtjeFromDb.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}



