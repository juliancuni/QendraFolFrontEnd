import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Observable, Subject } from 'rxjs';
import { first, map, take, takeUntil } from 'rxjs/operators';
import { BulkCreateReport, OldCeshtja } from 'src/app/shared/sdk/models';
import { AppState } from 'src/app/store';
import * as OldCeshtjeActions from 'src/app/store/actions/old-ceshtje.actions';


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
  report: string;
  public fileOver = false;
  notifier = new Subject();

  constructor(private _store: Store<AppState>, private _messageService: MessageService) {

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
    this._store.dispatch(OldCeshtjeActions.clearOldData());
  }

  excelToJson(rawFile) {
    console.log("excelToJson")
    this._store.dispatch(OldCeshtjeActions.loadOldCeshtjetXls({ rawFile: rawFile }));
  }



  ngOnInit(): void {
    this.loading$ = this._store.select((state) => state.oldCeshtjet.loading);
    this.fileName$ = this._store.select((state) => state.oldCeshtjet.excelFileName);
    this.jsonOldCeshtje$ = this._store.select((state) => state.oldCeshtjet.oldData);
    this._store.select((state) => state.oldCeshtjet.bulkReport).pipe(takeUntil(this.notifier)).subscribe((report) => {
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
