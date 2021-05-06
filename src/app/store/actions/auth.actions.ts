import { createAction, props } from '@ngrx/store';
import { LoginDto, RegisterDto, UserDto } from 'src/app/shared/sdk/models';
import { HttpErrors } from '../../shared/entities/http.errors';

export const loginPage = createAction(
  '[Login Component] Login',
  props<{ login: LoginDto }>()
);
/** Login Actions */
export const loginSuccess = createAction(
  '[Auth Effects] Login Success',
  props<{ userDto: UserDto }>()
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
/** Browser Reload Actions */
export const browserReload = createAction(
  '[App Component] Browser Reload',
  props<{ userDto: UserDto }>()
);
/** Register Actions */
export const register = createAction(
  '[Register Component] Register New User',
  props<{ registerDto: RegisterDto }>()
)

export const registerSuccess = createAction(
  '[Auth Effects] Register New User Success',
  props<{ userDto: UserDto }>()
)

export const registerFailure = createAction(
  '[Auth Effects] Register New User Failure',
  props<{ error: any }>()
)

