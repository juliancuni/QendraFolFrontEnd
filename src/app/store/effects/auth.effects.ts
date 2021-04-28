import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import { AccountService } from 'src/app/shared/sdk/services';



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



  constructor(private actions$: Actions, private _accountService: AccountService) { }

}
