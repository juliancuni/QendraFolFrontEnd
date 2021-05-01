import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromOldCeshtje from '../reducers/old-ceshtje.reducer';

export const selectOldCeshtjeState = createFeatureSelector<fromOldCeshtje.State>(
  fromOldCeshtje.oldCeshtjeFeatureKey
);
