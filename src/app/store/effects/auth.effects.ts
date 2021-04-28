import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, take, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import { AccountService } from 'src/app/shared/sdk/services';
import { AppState } from '..';
import { State, Store } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';



@Injectable()
export class AuthEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginPage),
      concatMap((action) =>
        this._accountService.apiAccountLoginPost$Json({ body: action.login }).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error }))))
      )
    );
  });

  addUserToLocalStorage$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap((action) => localStorage.setItem('user', JSON.stringify(action.user)))), { dispatch: false }
  );

  removeUserToLocalStorage$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => localStorage.removeItem('user'))), { dispatch: false }
  );

  constructor(private actions$: Actions, private _accountService: AccountService, private _store: Store<AppState>) { }

}
