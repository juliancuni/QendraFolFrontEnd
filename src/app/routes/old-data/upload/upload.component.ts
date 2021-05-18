import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, Subject } from 'rxjs';
// import { first, map, take, takeUntil } from 'rxjs/operators';
import { BulkCreateReport } from 'src/app/shared/entities/bulk.report';
import { OldCeshtjeDto } from 'src/app/shared/sdk/models';
import { OldCeshtjetService } from 'src/app/shared/sdk/services';
import { StrictHttpResponse } from 'src/app/shared/sdk/strict-http-response';
import { OldDataService } from 'src/app/shared/services/old-data.service';
// import { AppState } from 'src/app/store';
// import * as OldCeshtjeActions from 'src/app/store/actions/old-ceshtje.actions';
// import * as OldCeshtjetFromDbActions from 'src/app/store/actions/old-ceshtje-db.actions';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {

  fileName: string;
  loading = false;
  jsonOldCeshtje$: Observable<OldCeshtjeDto[]>
  report: BulkCreateReport;
  fileOver = false;
  notifier = new Subject();


  constructor(
    // private _store: Store<AppState>, 
    private _messageService: MessageService,
    private readonly dialogRef: DynamicDialogRef,
    private readonly _oldCeshtjetService: OldCeshtjetService,
    private readonly _oldDataService: OldDataService,
  ) {

  }

  dragOver(ev) {
    ev.preventDefault();
    if (ev.type === "dragover") this.fileOver = true;
  }

  dragLeave(ev) {
    ev.preventDefault();
    if (ev.type === "dragleave") this.fileOver = false;

  }

  fromDrop(ev) {
    this.loading = true;
    ev.preventDefault();
    this.excelToJson(ev.dataTransfer);
  }

  fromInput(ev) {
    this.loading = true;
    ev.preventDefault();
    this.excelToJson(ev.target);
  }

  clearFile() {
    (<HTMLInputElement>document.getElementById('input-file')).value = "";
    (<HTMLInputElement>document.getElementById('drop-file')).value = "";
    this._messageService.clear();
    this.fileName = null;
  }

  excelToJson(rawFile) {
    this._oldDataService.excelToJson(rawFile).subscribe((res) => {
      this.fileName = res.filename;
      this._oldCeshtjetService.oldCeshtjetControllerBulkInsert$Response({ body: res.sheet1 }).subscribe((res: any) => {
        if (res.body) {
          let report: BulkCreateReport = JSON.parse(res.body);
          if (report.nrImportedFailure > 0) {
            this._messageService.add({ severity: 'warn', summary: report.nrImportedFailure + ' Rekorde', detail: 'Nuk u regjistruan. Keto ceshtje egzistojne ne DB' })
          }
          if (report.nrImportedSuccess > 0) {
            this._messageService.add({ severity: 'success', summary: report.nrImportedSuccess + ' Rekorde', detail: 'U regjistruan me sukses ne DB.' })
          }
          if (report.nrUpdatedFailure > 0) {
            this._messageService.add({ severity: 'warn', summary: report.nrUpdatedFailure + ' Rekorde egzistojne', detail: ' Por nuk u perditesuan.' })
          }
          if (report.nrUpdatedSuccess > 0) {
            this._messageService.add({ severity: 'success', summary: report.nrUpdatedSuccess + ' Rekorde', detail: 'U perditesuan me sukses ne DB.' })
          }
        }
      }, (err) => {
        this.loading = false
      }, () => {
        this.loading = false
      });
    }, (err) => {
      this.loading = false
    })
  }

  closeUploadDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    // this.loading$ = this._store.select((state) => state.oldCeshtjetFromDb.loading);
    // this.fileName$ = this._store.select((state) => state.oldCeshtjetFromDb.fileName);
    // this.jsonOldCeshtje$ = this._store.select((state) => state.oldCeshtjetFromDb.jsonOld);
    // this._store.select((state) => state.oldCeshtjetFromDb.error).pipe(takeUntil(this.notifier)).subscribe((error) => {
    //   if(error) {
    //     console.log(error);
    //     this._messageService.add({ severity: 'error', summary: error["status"], detail: error["message"] })
    //   }
    // });

    // this._store.select((state) => state.oldCeshtjetFromDb.report).pipe(takeUntil(this.notifier)).subscribe((report) => {
    //   this.report = report;
    //   if (report) {
    //     let strImportFailed = report.importFailedOldIds;
    //     // strImportFailed = strImportFailed.replace(", ]", "]")
    //     if (report.nrImportedFailure > 0) {
    //       this._messageService.add({ severity: 'warn', summary: report.nrImportedFailure + ' Rekorde', detail: 'Nuk u regjistruan. Keto ceshtje egzistojne ne DB' })
    //     }
    //     if (report.nrImportedSuccess > 0) {
    //       this._messageService.add({ severity: 'success', summary: report.nrImportedSuccess + ' Rekorde', detail: 'U regjistruan me sukses ne DB.' })
    //     }
    //   }
    // });
  }

  ngOnDestroy() {
    this.notifier.next()
    this.notifier.complete()
  }
}
