import { Action, createReducer, on } from '@ngrx/store';
import { LoginDto, UserDto } from 'src/app/shared/sdk/models';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: UserDto,
  isAuthenticated: boolean,
  error: any
}

export const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
};


export const reducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, AuthActions.browserReload, (state, action) => {
    return { ...state, user: action.user, isAuthenticated: true, error: null }
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return { ...state, user: null, isAuthenticated: false, error: action.error }
  }),
  on(AuthActions.logoutSuccess, (state) => {
    return { ...state, user: null, isAuthenticated: false, error: null }
  }),
  on(AuthActions.logoutFailure, (state, action) => {
    return { ...state, user: null, error: action.error }
  }),
  on(AuthActions.logout, (state, action) => {
    return { ...state, user: null, isAuthenticated: false, error: null }
  }),
  on(AuthActions.browserReload, (state, action) => {
    return { ...state, user: action.user }
  })
);

