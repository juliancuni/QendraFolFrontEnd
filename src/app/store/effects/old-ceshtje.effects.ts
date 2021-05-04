import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as OldCeshtjeActions from '../actions/old-ceshtje.actions';
import { OldDataService } from 'src/app/shared/services/old-data.service';
import { OldCeshtjaService } from 'src/app/shared/sdk/services';
import { Store } from '@ngrx/store';
import { AppState } from '..';



@Injectable()
export class OldCeshtjeEffects {

  loadOldCeshtjes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OldCeshtjeActions.loadOldCeshtjetXls),
      switchMap((action) => {
        return this._oldDataService.excelToJson(action.rawFile);
      }),
      map((oldDataObj) => {
        return OldCeshtjeActions.loadOldCeshtjetSuccessXls({ excelFileName: oldDataObj.filename, oldData: oldDataObj.sheet1, oldHeaders: oldDataObj.headers });
      }),
      catchError((error) => {
        console.log("err", error);
        return of(OldCeshtjeActions.loadOldCeshtjetFailureXls({ error: error }))
      })
    );
  });

  bulkSaveOldCeshtjeToDb$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OldCeshtjeActions.bulkSaveOldCeshtjeToDb),
      switchMap((action) => {
        return this._oldCeshtjeService.apiOldCeshtjaBulkPost$Json$Response({ body: action.oldCeshtjet });;
      }),
      map((res) => {
        if (res.ok) return OldCeshtjeActions.bulkSaveOldCeshtjeToDbSuccess({ bulkReport: res.body })
        return OldCeshtjeActions.bulkSaveOldCeshtjeToDbFailure()
      }),
      catchError((error) => {
        console.log(error);
        return of(OldCeshtjeActions.bulkSaveOldCeshtjeToDbFailure());
      })
    )
  });

  putOldCeshtjeToDb$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OldCeshtjeActions.putOldCeshtjeToDb),
      switchMap((action) => {
        return this._oldCeshtjeService.apiOldCeshtjaPut$Json$Response({ body: action.oldCeshtje });
      }),
      map((res) => {
        console.log(res);
        return OldCeshtjeActions.putOldCeshtjeToDbSuccess({ oldCeshtje: res })
      }),
      catchError((error) => {
        console.log(error);
        return of(OldCeshtjeActions.putOldCeshtjeToDbFailure());
      })
    )
  });

  constructor(private actions$: Actions, private _oldDataService: OldDataService, private _oldCeshtjeService: OldCeshtjaService, private _store: Store<AppState>) { }

}
