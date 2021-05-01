import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as OldCeshtjeActions from '../actions/old-ceshtje.actions';



@Injectable()
export class OldCeshtjeEffects {

  loadOldCeshtjes$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(OldCeshtjeActions.loadOldCeshtjet),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => OldCeshtjeActions.loadOldCeshtjetSuccess({ oldCeshtjet: data })),
          catchError(error => of(OldCeshtjeActions.loadOldCeshtjetFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) { }

}
