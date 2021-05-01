import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as OldCeshtjeActions from '../actions/old-ceshtje.actions';
import { OldDataService } from 'src/app/shared/services/old-data.service';



@Injectable()
export class OldCeshtjeEffects {

  loadOldCeshtjes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OldCeshtjeActions.loadOldCeshtjet),
      switchMap((action) => {
        return this._oldDataService.excelToJson(action.rawFile);
      }),
      map((oldDataObj) => {
        return OldCeshtjeActions.loadOldCeshtjetSuccess({ excelFileName: oldDataObj.filename, oldData: oldDataObj.sheet1 });
      }),
      catchError((error) => {
        console.log("err", error);
        return of(OldCeshtjeActions.loadOldCeshtjetFailure({ error: error }))
      })
    );
  });

  constructor(private actions$: Actions, private _oldDataService: OldDataService) { }

}
