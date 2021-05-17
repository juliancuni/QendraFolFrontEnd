import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { OldCeshtjeDto } from "../../sdk/models";

@Injectable({
    providedIn: 'root'
})
export class OldCeshtjeEntityService extends EntityCollectionServiceBase<OldCeshtjeDto> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('OldCeshtjeDto', serviceElementsFactory);
    }
}