import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UploadComponent } from '../upload/upload.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [DialogService]
})
export class HomeComponent implements OnInit, OnDestroy {

    ref: DynamicDialogRef;

    constructor(public _dialogService: DialogService) { }

    show() {
        this.ref = this._dialogService.open(UploadComponent, {
            header: 'Import Old Data from XLSX file',
            width: '70%',
            contentStyle: { "max-height": "500px", "overflow": "auto" },
            baseZIndex: 10000,
        });
    }


    ngOnInit() { }

    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }

}
