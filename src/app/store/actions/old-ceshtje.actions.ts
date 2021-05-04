import { createAction, props } from '@ngrx/store';
import { OldCeshtja } from 'src/app/shared/sdk/models';

export const loadOldCeshtjetXls = createAction(
  '[Upload Component] Load OldCeshtjet',
  props<{ rawFile: any }>()
);

export const loadOldCeshtjetSuccessXls = createAction(
  '[Home Component] Load OldCeshtjet Success',
  props<{ excelFileName: string, oldData: OldCeshtja[], oldHeaders: any }>()
);

export const loadOldCeshtjetFailureXls = createAction(
  '[OldCeshtje Service] Load OldCeshtjet Failure',
  props<{ error: any }>()
);

export const clearOldData = createAction(
  '[Upload Component] Clear OldData'
);

export const loadOldCeshtje = createAction(
  '[Old Lista Component] Load OldCeshtje',
  props<{ oldCeshtje: OldCeshtja }>()
);

export const bulkSaveOldCeshtjeToDb = createAction(
  '[Old Data Service] Save OldCeshtjeToDb',
  props<{ oldCeshtjet: OldCeshtja[] }>()
)

export const bulkSaveOldCeshtjeToDbSuccess = createAction(
  '[Old Effects] Save OldCeshtjeToDb Success',
)

export const bulkSaveOldCeshtjeToDbFailure = createAction(
  '[Old Effects] Save OldCeshtjeToDb Failure'
)

export const putOldCeshtjeToDb = createAction(
  '[Old Ceshtje Component] Put OldCeshtjeToDb',
  props<{ oldCeshtje: OldCeshtja }>()
)

export const putOldCeshtjeToDbSuccess = createAction(
  '[Old Effects] Put OldCeshtjeToDb Success',
  props<{ oldCeshtje: any }>()
)

export const putOldCeshtjeToDbFailure = createAction(
    '[Old Effects] Put OldCeshtjeToDb Failure'
  )
