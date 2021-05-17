import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { finalize, first, tap, filter } from "rxjs/operators";
import { OldCeshtjeDto } from "src/app/shared/sdk/models";
import { AppState } from 'src/app/store';
// import { areOldCeshtjetDbLoaded } from "src/app/store/selectors/old-ceshtje-db.selectors";
import { loadAllCeshtjeFromDb } from "../../store/actions/old-ceshtje-db.actions";

@Injectable({
    providedIn: 'root'
})
export class OldCeshtjetFromDBResolver implements Resolve<OldCeshtjeDto> {
    private loading = false;
    constructor(private _store: Store<AppState>) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._store.pipe(
            select((state) => state.oldCeshtjetFromDb),
            tap((oldCeshtjetDbLoaded) => {
                if (!this.loading && !oldCeshtjetDbLoaded) {
                    this.loading = true
                    this._store.dispatch(loadAllCeshtjeFromDb());
                }
            }),
            // filter(oldCeshtjetDbLoaded => oldCeshtjetDbLoaded),
            first(),
            finalize(() => this.loading = false)
        )
    }

}