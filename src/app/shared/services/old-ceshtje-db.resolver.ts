import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { finalize, first, tap } from "rxjs/operators";
import { OldCeshtja } from "src/app/shared/sdk/models";
import { AppState } from 'src/app/store';
import { loadAllCeshtjeFromDb } from "../../store/actions/old-ceshtje-db.actions";

@Injectable({
    providedIn: 'root'
})
export class OldCeshtjetFromDBResolver implements Resolve<any> {
    private loading = false;
    constructor(private _store: Store<AppState>) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._store.pipe(
            tap(() => {
                if (!this.loading) {
                    this.loading = true
                    this._store.dispatch(loadAllCeshtjeFromDb());
                }
            }),
            first(),
            finalize(() => this.loading = false)
        )
    }

}