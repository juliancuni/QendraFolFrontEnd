import { createAction, props } from "@ngrx/store";
import { OldCeshtja } from "src/app/shared/sdk/models";
import { Update } from '@ngrx/entity';
import { UpdateNum } from "@ngrx/entity/src/models";

/** Load All Old Ceshtjet */
export const loadAllCeshtjeFromDb = createAction(
    "[Old Ceshtje Resolver] Load All Old Ceshtjet"
);

export const loadAllCeshtjeFromDbSuccess = createAction(
    "[Old Ceshtje Resolver] Load All Old Ceshtjet Success",
    props<{ oldCeshtjetFromDB: OldCeshtja[] }>()
);

export const loadAllCeshtjeFromDbFailure = createAction(
    "[Old Ceshtje Resolver] Load All Old Ceshtjet Failure",
    props<{ error: any }>()
)
/** Upsert Ceshtje */
export const upsertOldCeshtjeDb = createAction(
    "[Old Ceshtje Component] Upsert Ceshtje",
    props<{ oldCeshtje: OldCeshtja }>()
)

export const upsertOldCeshtjeDbSuccess = createAction(
    "[Old Ceshtje Component] Upsert Ceshtje Success",
    props<{ oldCeshtje: OldCeshtja }>()
)

export const upsertOldCeshtjeDbFailure = createAction(
    "[Old Ceshtje Component] Upsert Ceshtje Failure",
    props<{ error: any }>()
)
/** Delete Ceshtje */
export const deleteOldCeshtjeDb = createAction(
    "[Old Ceshtje Component] Delete Ceshtje",
    props<{ oldCeshtje: OldCeshtja }>()
)

export const deleteOldCeshtjeDbSuccess = createAction(
    "[Old Ceshtje Db Effect] Delete Ceshtje Success"
)

export const deleteOldCeshtjeDbFailure = createAction(
    "[Old Ceshtje Db Effect] Delete Ceshtje Failure",
    props<{ error: any }>()
)