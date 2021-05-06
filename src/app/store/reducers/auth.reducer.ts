import { Action, createReducer, on } from '@ngrx/store';
import { LoginDto, UserDto } from 'src/app/shared/sdk/models';
import * as AuthActions from '../actions/auth.actions';
import { HttpErrors } from '../../shared/entities/http.errors';

export const authFeatureKey = 'auth';

export interface AuthState {
  userDto: UserDto,
  isAuthenticated: boolean,
  error: HttpErrors,
  loading: boolean
}

export const initialState: AuthState = {
  userDto: null,
  isAuthenticated: false,
  error: null,
  loading: false
};


export const reducer = createReducer(
  initialState,
  on(AuthActions.loginPage, AuthActions.browserReload, (state, action) => {
    return { ...state, loading: true }
  }),
  on(AuthActions.loginSuccess, AuthActions.browserReload, (state, action) => {
    return { ...state, userDto: action.userDto, isAuthenticated: true, error: null, loading: false }
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return { ...state, userDto: null, isAuthenticated: false, error: action.error, loading: false}
  }),
  on(AuthActions.logoutSuccess, (state) => {
    return { ...state, userDto: null, isAuthenticated: false, error: null }
  }),
  on(AuthActions.logoutFailure, (state, action) => {
    return { ...state, userDto: null, error: action.error }
  }),
  on(AuthActions.logout, (state, action) => {
    return { ...state, userDto: null, isAuthenticated: false, error: null }
  }),
  on(AuthActions.browserReload, (state, action) => {
    return { ...state, userDto: action.userDto }
  }),
  on(AuthActions.register, (state, action) => {
    return { ...state, loading: true }
  }),
  on(AuthActions.registerSuccess, (state, action) => {
    return { ...state, userDto: action.userDto, isAuthenticated: true, error: null, loading: false }
  }),
  on(AuthActions.registerFailure, (state, action) => {
    return { ...state, userDto: null, isAuthenticated: false, error: action.error, loading: false }
  }),
);

