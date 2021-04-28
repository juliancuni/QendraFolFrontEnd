import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as fromAuthActions from '../actions/auth.actions';
import * as fromRouteActions from '../actions/route.actions';



@Injectable()
export class RouteEffects {

  goHome$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromAuthActions.loginSuccess),
      tap(() => this._router.navigate(['/home']))
    ), { dispatch: false }
  )

  goLogin$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromAuthActions.logout, fromRouteActions.goToLogin),
      tap(() => this._router.navigate(['/login']))
    ), { dispatch: false }
  )

  constructor(private actions$: Actions, private _router: Router) { }

}
