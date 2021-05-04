import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { OldCeshtja } from "src/app/shared/sdk/models";
import * as OldCeshtjetFromDbActions from "../actions/old-ceshtje-db.actions";

export const featureKey = 'oldCeshtjetFromDb';

export interface OldCeshtjeDbState extends EntityState<OldCeshtja> {
    allOldCeshtjetDbLoaded: boolean,
    error: any
}

export const adapter = createEntityAdapter<OldCeshtja>();

export const initialOldCeshtjeDbState = adapter.getInitialState({
    allOldCeshtjetDbLoaded: false,
    error: null
});

export const reducer = createReducer(

    initialOldCeshtjeDbState,

    on(OldCeshtjetFromDbActions.loadAllCeshtjeFromDbSuccess, (state, action) => adapter.addMany(action.oldCeshtjetFromDB, { ...state, allOldCeshtjetDbLoaded: true })),

    on(OldCeshtjetFromDbActions.upsertOldCeshtjeDbSuccess, (state, action) => adapter.upsertOne(action.oldCeshtje, state)),

    on(OldCeshtjetFromDbActions.deleteOldCeshtjeDb, (state, action) => adapter.removeOne(action.oldCeshtje.id, state)),

    on(
        OldCeshtjetFromDbActions.loadAllCeshtjeFromDbFailure,
        OldCeshtjetFromDbActions.upsertOldCeshtjeDbFailure,
        OldCeshtjetFromDbActions.deleteOldCeshtjeDbFailure,
        (state, action) => {
            return { ...state, error: action.error }
        }
    ),

);

export const { selectAll } = adapter.getSelectors();