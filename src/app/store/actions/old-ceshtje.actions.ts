import { createAction, props } from '@ngrx/store';
import { OldCeshtja } from 'src/app/shared/entities/old.ceshtja';

export const loadOldCeshtjet = createAction(
  '[Upload Component] Load OldCeshtjet',
  props<{ rawFile: any }>()
);

export const loadOldCeshtjetSuccess = createAction(
  '[Home Component] Load OldCeshtjet Success',
  props<{ excelFileName: string, oldData: OldCeshtja[], oldHeaders: any }>()
);

export const loadOldCeshtjetFailure = createAction(
  '[OldCeshtje Service] Load OldCeshtjet Failure',
  props<{ error: any }>()
);

export const clearOldData= createAction(
  '[Upload Component] Clear OldData'
);

export const loadOldCeshtje = createAction(
  '[Old Lista Component] Load OldCeshtje',
  props<{ oldCeshtje: OldCeshtja }>()
)
