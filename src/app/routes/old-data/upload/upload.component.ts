import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, Subject } from 'rxjs';
import { first, map, take, takeUntil } from 'rxjs/operators';
import { BulkCreateReport, OldCeshtja } from 'src/app/shared/sdk/models';
import { AppState } from 'src/app/store';
// import * as OldCeshtjeActions from 'src/app/store/actions/old-ceshtje.actions';
import * as OldCeshtjetFromDbActions from 'src/app/store/actions/old-ceshtje-db.actions';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {

  fileName$: Observable<string>;
  loading$: Observable<boolean>;
  jsonOldCeshtje$: Observable<OldCeshtja[]>
  bulkCreateReport$: Observable<BulkCreateReport>;
  report: BulkCreateReport;
  public fileOver = false;
  notifier = new Subject();
  

  constructor(private _store: Store<AppState>, private _messageService: MessageService, private _router: Router, private readonly dialogRef: DynamicDialogRef) {

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
    ev.preventDefault();
    this.excelToJson(ev.dataTransfer);
  }

  fromInput(ev) {
    ev.preventDefault();
    this.excelToJson(ev.target);
  }

  clearFile() {
    (<HTMLInputElement>document.getElementById('input-file')).value = "";
    (<HTMLInputElement>document.getElementById('drop-file')).value = "";
    this._store.dispatch(OldCeshtjetFromDbActions.clearRawDataFromStore());
    this._messageService.clear();
  }

  excelToJson(rawFile) {
    // console.log("excelToJson")
    this._store.dispatch(OldCeshtjetFromDbActions.convertXclsxFile({ rawFile: rawFile }));
  }

  closeUploadDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loading$ = this._store.select((state) => state.oldCeshtjetFromDb.loading);
    this.fileName$ = this._store.select((state) => state.oldCeshtjetFromDb.fileName);
    this.jsonOldCeshtje$ = this._store.select((state) => state.oldCeshtjetFromDb.jsonOld);
    this._store.select((state) => state.oldCeshtjetFromDb.error).pipe(takeUntil(this.notifier)).subscribe((error) => {
      if(error) {
        console.log(error);
        this._messageService.add({ severity: 'error', summary: error["status"], detail: error["message"] })
      }
    });

    this._store.select((state) => state.oldCeshtjetFromDb.report).pipe(takeUntil(this.notifier)).subscribe((report) => {
      this.report = report;
      if (report) {
        let strImportFailed = report.importFailedIds;
        strImportFailed = strImportFailed.replace(", ]", "]")
        if (report.nrImportFailure > 0) {
          this._messageService.add({ severity: 'warn', summary: report.nrImportFailure + ' Rekorde', detail: 'Nuk u regjistruan. Keto ceshtje egzistojne ne DB' })
        }
        if (report.nrImportSuccess > 0) {
          this._messageService.add({ severity: 'success', summary: report.nrImportSuccess + ' Rekorde', detail: 'U regjistruan me sukses ne DB.' })
        }
      }
    });
  }

  ngOnDestroy() {
    this.notifier.next()
    this.notifier.complete()
  }
}
