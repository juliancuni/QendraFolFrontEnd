import { createAction, props } from '@ngrx/store';
import { OldCeshtja } from 'src/app/shared/entities/old.ceshtja';

export const loadOldCeshtjet = createAction(
  '[Home Component] Load OldCeshtjet'
);

export const loadOldCeshtjetSuccess = createAction(
  '[Home Component] Load OldCeshtjet Success',
  props<{ oldCeshtjet: OldCeshtja[] }>()
);

export const loadOldCeshtjetFailure = createAction(
  '[OldCeshtje] Load OldCeshtjet Failure',
  props<{ error: any }>()
);
