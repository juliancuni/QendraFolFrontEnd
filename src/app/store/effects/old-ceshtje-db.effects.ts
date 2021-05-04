import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";
import { OldCeshtja } from "src/app/shared/sdk/models";
import { OldCeshtjaService } from "src/app/shared/sdk/services";
import * as OldCeshtjetFromDbActions from "../actions/old-ceshtje-db.actions";

@Injectable()
export class OldCeshtjeDbEffects {


    loadAllCeshtjeFromDb$ = createEffect(() =>
        this._actions$.pipe(
            ofType(OldCeshtjetFromDbActions.loadAllCeshtjeFromDb),
            concatMap(() => this._oldCeshtjaService.apiOldCeshtjaGet$Json$Response()),
            map((oldCeshtjet) => OldCeshtjetFromDbActions.loadAllCeshtjeFromDbSuccess({ oldCeshtjetFromDB: oldCeshtjet.body })),
            catchError((error) => of(OldCeshtjetFromDbActions.loadAllCeshtjeFromDbFailure({ error })))
        )
    );

    upsertOldCeshtjeToDb$ = createEffect(() => this._actions$.pipe(
        ofType(OldCeshtjetFromDbActions.upsertOldCeshtjeDb),
        mergeMap((action) => this._oldCeshtjaService.apiOldCeshtjaPut$Json$Response({ body: action.oldCeshtje })
            .pipe(
                map(({ body }) => OldCeshtjetFromDbActions.upsertOldCeshtjeDbSuccess({ oldCeshtje: body })),
                catchError((error) => of(OldCeshtjetFromDbActions.upsertOldCeshtjeDbFailure({ error })))
            )
        )
    ));

    deleteOldCeshtjeFromDb$ = createEffect(() =>
        this._actions$.pipe(
            ofType(OldCeshtjetFromDbActions.deleteOldCeshtjeDb),
            mergeMap((action) => this._oldCeshtjaService.apiOldCeshtjaDelete$Response({ body: action.oldCeshtje })
                .pipe(
                    map((response) => OldCeshtjetFromDbActions.deleteOldCeshtjeDbSuccess()),
                    catchError((error) => of(OldCeshtjetFromDbActions.deleteOldCeshtjeDbFailure({ error })))
                )
            )
        )
    )

    constructor(private _actions$: Actions, private _oldCeshtjaService: OldCeshtjaService) { }
}