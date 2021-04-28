import { createAction, props } from '@ngrx/store';
import { LoginDto, UserDto } from 'src/app/shared/sdk/models';

export const loginPage = createAction(
  '[Login Component] Login',
  props<{ login: LoginDto }>()
);

export const loginSuccess = createAction(
  '[Auth Effects] Login Success',
  props<{user: UserDto}>()
);

export const loginFailure = createAction(
  '[Auth Effects] Login Failure',
  props<{error: any}>()
)