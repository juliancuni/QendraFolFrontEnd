import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { filter, first, tap } from "rxjs/operators";
import { map } from "rxjs/operators";
import { OldCeshtjeEntityService } from "./entity-services/old-ceshtje-entity.service";

@Injectable({
    providedIn: 'root'
})
export class OldCeshtjetResolver implements Resolve<boolean> {
    constructor(private _oldCeshtjeService: OldCeshtjeEntityService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._oldCeshtjeService.loaded$.pipe(
            tap((loaded) => {
                if (!loaded) {
                    this._oldCeshtjeService.getAll();
                }
            }),
            filter(loaded => !!loaded),
            first()
        )
    }
}