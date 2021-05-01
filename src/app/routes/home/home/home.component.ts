import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { OldCeshtja } from 'src/app/shared/entities/old.ceshtja';
import { AppState } from 'src/app/store';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    oldCeshtjet$: Observable<OldCeshtja[]>;

    @ViewChild('importXCLS', { static: false }) importXCLS: ModalDirective;

    constructor(private _store: Store<AppState>) {
    }

    openModal() {
        this.importXCLS.show();
    }

    closeModal() {
        this.importXCLS.hide();
    }

    ngOnInit() {
        this.oldCeshtjet$ = this._store.select((state) => state.oldCeshtjet.oldData)
    }

}
