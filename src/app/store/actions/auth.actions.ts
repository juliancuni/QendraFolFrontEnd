import { createAction, props } from '@ngrx/store';
import { LoginDto, UserDto } from 'src/app/shared/sdk/models';
import { HttpErrors } from '../../shared/entities/http.errors';

export const loginPage = createAction(
  '[Login Component] Login',
  props<{ login: LoginDto }>()
);

export const loginSuccess = createAction(
  '[Auth Effects] Login Success',
  props<{ user: UserDto }>()
);

export const loginFailure = createAction(
  '[Auth Effects] Login Failure',
  props<{ error: HttpErrors }>()
);

export const logout = createAction(
  '[Header Component] Logout'
)

export const logoutSuccess = createAction(
  '[Auth Effect] Logout Success'
)

export const logoutFailure = createAction(
  '[Header Component] Logout',
  props<{ error: any }>()
)

export const browserReload = createAction(
  '[App Component] Browser Reload',
  props<{ user: UserDto }>()
);