import { createAction, props } from "@ngrx/store";
import { OldCeshtja } from "src/app/shared/sdk/models";

export const loadAllCeshtjeFromDb = createAction(
    "[Old Ceshtje Resolver] Load All Old Ceshtjet"
);

export const allCeshtjetLoaded = createAction(
    "[Load Old Ceshtjet Effect] All Old Ceshtjet Loaded",
    props<{ oldCeshtjetFromDB: any }>()
)