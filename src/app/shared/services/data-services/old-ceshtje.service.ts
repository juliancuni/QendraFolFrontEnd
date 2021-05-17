import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Update } from "@ngrx/entity";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { map } from "rxjs/operators";
import { OldCeshtjeDto } from "../../sdk/models";
import { OldCeshtjetService } from "../../sdk/services";

@Injectable()
export class OldCeshtjeService extends DefaultDataService<OldCeshtjeDto> {
    constructor(
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        private oldCeshtjetService: OldCeshtjetService
    ) {
        super('OldCeshtjeDto', http, httpUrlGenerator);
    }

    getAll(): Observable<OldCeshtjeDto[]> {
        return this.oldCeshtjetService.oldCeshtjetControllerFindAll$Response().pipe(
            map((res) => {
                const oldCeshtjet: OldCeshtjeDto[] = JSON.parse(res.body as unknown as string);
                return oldCeshtjet
            })
        )
    }
    update(update: Update<OldCeshtjeDto>): Observable<OldCeshtjeDto> {
        return this.oldCeshtjetService.oldCeshtjetControllerUpdateOne$Response({ body: { ...update.changes as OldCeshtjeDto } }).pipe(
            map((res) => {
                return { ...update.changes as OldCeshtjeDto }
            })
        );
    }
    add(oldCeshtje: OldCeshtjeDto): Observable<OldCeshtjeDto> {
        return this.oldCeshtjetService.oldCeshtjetControllerCreate$Response({ body: oldCeshtje }).pipe(
            map((res) => {
                const result = JSON.parse(res.body as unknown as string);
                return { ...oldCeshtje, id: result.id };
            })
        )
    }
    delete(id: string): Observable<string> {
        return this.oldCeshtjetService.oldCeshtjetControllerRemove$Response({id}).pipe(
            map((res) => {
                return id;
            })
        )
    }
}