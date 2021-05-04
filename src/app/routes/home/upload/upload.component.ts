import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OldCeshtja } from 'src/app/shared/sdk/models';
import { AppState } from 'src/app/store';
import * as OldCeshtjeActions from 'src/app/store/actions/old-ceshtje.actions';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  fileName$: Observable<string>;
  loading$: Observable<boolean>;
  jsonOldCeshtje$: Observable<OldCeshtja[]>

  public fileOver = false;

  constructor(private _store: Store<AppState>) {

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
    this._store.dispatch(OldCeshtjeActions.loadOldCeshtjetXls({ rawFile: rawFile }));
  }



  ngOnInit(): void {
    this.loading$ = this._store.select((state) => state.oldCeshtjet.loading);
    this.fileName$ = this._store.select((state) => state.oldCeshtjet.excelFileName);
    this.jsonOldCeshtje$ = this._store.select((state) => state.oldCeshtjet.oldData);
  }

}
