import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromOldCeshtjeDb from "../reducers/old-ceshtje-db.reducer";

export const selectOldCeshtjeDbState = createFeatureSelector<fromOldCeshtjeDb.OldCeshtjeDbState>(fromOldCeshtjeDb.featureKey);

export const selectAllOldCeshtjeDb = createSelector(
    selectOldCeshtjeDbState,
    fromOldCeshtjeDb.selectAll
)

export const areOldCeshtjetDbLoaded = createSelector(
    selectOldCeshtjeDbState,
    (state) => state.allOldCeshtjetDbLoaded
)