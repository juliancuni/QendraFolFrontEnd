import { Action, createReducer, on } from '@ngrx/store';
import { LoginDto, UserDto } from 'src/app/shared/sdk/models';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: UserDto,
  error: any
}

export const initialState: AuthState = {
  user: null,
  error: null,
};


export const reducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, action) => {
    return { ...state, user: action.user, error: null }
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return { ...state, user: null, error: action.error }
  })
);

