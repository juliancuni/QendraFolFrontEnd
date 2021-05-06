import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, take, tap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import { AccountService } from 'src/app/shared/sdk/services';
import { AppState } from '..';
import { State, Store } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';
import { HttpErrors } from 'src/app/shared/entities/http.errors';
import { ToastItem } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { loadAllCeshtjeFromDbFailure } from '../actions/old-ceshtje-db.actions';



@Injectable()
export class AuthEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginPage),
      concatMap((action) =>
        this._accountService.apiAccountLoginPost$Json({ body: action.login }).pipe(
          map(userDto => {
            return AuthActions.loginSuccess({ userDto })
          }),
          catchError(error => {
            return of(AuthActions.loginFailure({ error }))
          }))
      )
    );
  });

  showToasterOnLoginFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginFailure, AuthActions.registerFailure, loadAllCeshtjeFromDbFailure),
      tap((error: any) => this._messageService.add({ severity: 'error', summary: error.error.status, detail: error.error.error }))
    )
  }, { dispatch: false })

  addUserToLocalStorage$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.loginSuccess, AuthActions.registerSuccess),
      tap((action) => localStorage.setItem('user', JSON.stringify(action.userDto)))), { dispatch: false }
  );

  removeUserToLocalStorage$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => localStorage.removeItem('user'))), { dispatch: false }
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      mergeMap((action) => this._accountService.apiAccountRegisterPost$Json$Response({ body: action.registerDto })
        .pipe(
          map((res) => AuthActions.registerSuccess({ userDto: res.body })),
          catchError((error) => of(AuthActions.registerFailure({ error: error })))
        )
      )
    )
  )

  constructor(private actions$: Actions, private _accountService: AccountService, private _store: Store<AppState>, private _messageService: MessageService) { }

}
