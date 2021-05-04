import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { OldCeshtjaService } from "src/app/shared/sdk/services";
import * as OldCeshtjetFromDbActions from "../actions/old-ceshtje-db.actions";

@Injectable()
export class OldCeshtjeDbEffects {

    loadAllCeshtjeFromDb$ = createEffect(() =>
        this._actions$.pipe(
            ofType(OldCeshtjetFromDbActions.loadAllCeshtjeFromDb),
            concatMap(() => this._oldCeshtjaService.apiOldCeshtjaGet$Json$Response()),
            map((oldCeshtjet) => OldCeshtjetFromDbActions.allCeshtjetLoaded({ oldCeshtjetFromDB: oldCeshtjet.body }))
        )
    )

    constructor(private _actions$: Actions, private _oldCeshtjaService: OldCeshtjaService) { }
}