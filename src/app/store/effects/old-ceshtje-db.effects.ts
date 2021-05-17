import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";
import { OldCeshtjeDto } from "src/app/shared/sdk/models";
import { OldCeshtjetService } from "src/app/shared/sdk/services";
import { OldDataService } from "src/app/shared/services/old-data.service";
import * as OldCeshtjetFromDbActions from "../actions/old-ceshtje-db.actions";

@Injectable()
export class OldCeshtjeDbEffects {

    /** CRUD From DB */
    loadAllCeshtjeFromDb$ = createEffect(() =>
        this._actions$.pipe(
            ofType(OldCeshtjetFromDbActions.loadAllCeshtjeFromDb, OldCeshtjetFromDbActions.loadAllCeshtjeFromDbList),
            mergeMap(() => this._oldCeshtjaService.oldCeshtjetControllerFindAll$Response()
                .pipe(
                    map((res) => OldCeshtjetFromDbActions.loadAllCeshtjeFromDbSuccess({ oldCeshtjetFromDB: res.body })),
                    catchError((error) => of(OldCeshtjetFromDbActions.loadAllCeshtjeFromDbFailure({ error })))
                )
            )
        )
    );
    
    createOldCeshtjeToDb$ = createEffect(() => this._actions$.pipe(
        ofType(OldCeshtjetFromDbActions.createOldCeshtjeDb),
        mergeMap((action) => this._oldCeshtjaService.oldCeshtjetControllerCreate$Response({ body: action.oldCeshtje })
            .pipe(
                map(({ body }) => OldCeshtjetFromDbActions.createOldCeshtjeDbSuccess({ oldCeshtje: body })),
                catchError((error) => of(OldCeshtjetFromDbActions.createOldCeshtjeDbFailure({ error })))
            )
        )
    ));

    upsertOldCeshtjeToDb$ = createEffect(() => this._actions$.pipe(
        ofType(OldCeshtjetFromDbActions.upsertOldCeshtjeDb),
        mergeMap((action) => this._oldCeshtjaService.oldCeshtjetControllerUpdateOne$Response({ body: action.oldCeshtje })
            .pipe(
                map(({ body }) => OldCeshtjetFromDbActions.upsertOldCeshtjeDbSuccess({ oldCeshtje: body })),
                catchError((error) => of(OldCeshtjetFromDbActions.upsertOldCeshtjeDbFailure({ error })))
            )
        )
    ));

    deleteOldCeshtjeFromDb$ = createEffect(() =>
        this._actions$.pipe(
            ofType(OldCeshtjetFromDbActions.deleteOldCeshtjeDb),
            mergeMap((action) => this._oldCeshtjaService.oldCeshtjetControllerRemove$Response({ id: action.id })
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
            mergeMap((action) => this._oldCeshtjaService.oldCeshtjetControllerBulkInsert$Response({ body: action.bulkJson as any })
                .pipe(
                    map((res) => OldCeshtjetFromDbActions.uploadJsonConvertedToDbSuccess({ report: res.body as any })),
                    catchError((error) => {
                        // console.error(error);
                        return of(OldCeshtjetFromDbActions.uploadJsonConvertedToDbFailure({ error }))
                    })
                )
            )
        )
    )


    constructor(private _actions$: Actions, private _oldCeshtjaService: OldCeshtjetService, private _oldDataService: OldDataService) { }
}