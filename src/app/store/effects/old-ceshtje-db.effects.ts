import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";
import { OldCeshtja } from "src/app/shared/sdk/models";
import { OldCeshtjaService } from "src/app/shared/sdk/services";
import { OldDataService } from "src/app/shared/services/old-data.service";
import * as OldCeshtjetFromDbActions from "../actions/old-ceshtje-db.actions";

@Injectable()
export class OldCeshtjeDbEffects {

    /** CRUD From DB */
    loadAllCeshtjeFromDb$ = createEffect(() =>
        this._actions$.pipe(
            ofType(OldCeshtjetFromDbActions.loadAllCeshtjeFromDb, OldCeshtjetFromDbActions.loadAllCeshtjeFromDbList),
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
                    map(() => OldCeshtjetFromDbActions.deleteOldCeshtjeDbSuccess()),
                    catchError((error) => of(OldCeshtjetFromDbActions.deleteOldCeshtjeDbFailure({ error })))
                )
            )
        )
    )

    /** Convert And Upload to DB */
    convertXclsxToJson$ = createEffect(() =>
        this._actions$.pipe(
            ofType(OldCeshtjetFromDbActions.convertXclsxFile),
            mergeMap((action) => this._oldDataService.excelToJson(action.rawFile)
                .pipe(
                    map((json) => OldCeshtjetFromDbActions.uploadJsonConvertedToDb({ bulkJson: json.sheet1, fileName: json.filename, jsonOld: json.sheet1 })),
                    catchError((error) => of(OldCeshtjetFromDbActions.convertXclsxFileError({ error })))
                )
            )
        )
    )

    uploadBulkToDb$ = createEffect(() =>
        this._actions$.pipe(
            ofType(OldCeshtjetFromDbActions.uploadJsonConvertedToDb),
            mergeMap((action) => this._oldCeshtjaService.apiOldCeshtjaBulkPost$Json$Response({ body: action.bulkJson })
                .pipe(
                    map((res) => OldCeshtjetFromDbActions.uploadJsonConvertedToDbSuccess({ report: res.body })),
                    catchError((error) => {
                        // console.error(error);
                        return of(OldCeshtjetFromDbActions.uploadJsonConvertedToDbFailure({ error }))
                    })
                )
            )
        )
    )


    constructor(private _actions$: Actions, private _oldCeshtjaService: OldCeshtjaService, private _oldDataService: OldDataService) { }
}