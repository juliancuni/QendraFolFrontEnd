import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscriber, throwError } from 'rxjs';
import { AppState } from 'src/app/store';
// import * as OldCeshtjetActions from 'src/app/store/actions/old-ceshtje.actions';
import * as XLSX from 'xlsx';
import { OldCeshtja } from '../sdk/models';
// import { OldCeshtja } from '../sdk/models';

@Injectable({
  providedIn: 'root'
})
export class OldDataService {

  private jsonOldCeshtje = {};

  constructor(private _store: Store<AppState>) { }

  excelToJson(file) {
    let headerJson = {};
    const target: DataTransfer = <DataTransfer>(file);
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    this.jsonOldCeshtje['filename'] = target.files[0].name;
    return new Observable((observer: Subscriber<any>): void => {
      reader.onload = (e: any) => {
        const binarystr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });
        for (var i = 0; i < wb.SheetNames.length; ++i) {
          const wsname: string = wb.SheetNames[i];
          const ws: XLSX.WorkSheet = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws, { raw: false });
          this.jsonOldCeshtje[`sheet${i + 1}`] = data;
          // observer.next(this.jsonOldCeshtje)
          const headers = this.get_header_row(ws);
          headerJson[`header${i + 1}`] = headers;
        }
        this.jsonOldCeshtje['headers'] = headerJson["header1"];
        this.jsonOldCeshtje["sheet1"] = this.saveToDb(this.jsonOldCeshtje["sheet1"]);
        observer.next(this.jsonOldCeshtje)
        // observer.next({ excelFileName: this.jsonOldCeshtje['filename'], oldCeshtjet: this.jsonOldCeshtje["sheet1"] })
        observer.complete();
      },
        reader.onerror = (error): void => {
          observer.error(error);
        }
    })
  };

  private get_header_row(sheet): any[] {
    var headers = [];
    var range = XLSX.utils.decode_range(sheet['!ref']);
    var C, R = range.s.r;
    for (C = range.s.c; C <= range.e.c; ++C) {
      var cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
      var hdr = "UNKNOWN " + C;
      if (cell && cell.t) {
        hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
    }
    return headers;
  }

  private saveToDb(oldCeshtjet: OldCeshtja[]) {
    oldCeshtjet.forEach((oldC) => {
      let tmp = parseInt(oldC["Id"]);
      oldC.oldId = tmp;
      let oldCeshtjeRefactor = {};
      delete oldC["Id"];
      for (const [key, value] of Object.entries(oldC)) {
        let newKey = key.slice();
        newKey = newKey.split(' ').join('_');
        oldCeshtjeRefactor[newKey] = value;
      }
      oldCeshtjeRefactor;
    }, oldCeshtjet);
    return oldCeshtjet;
    // this._store.dispatch(OldCeshtjetActions.bulkSaveOldCeshtjeToDb({oldCeshtjet: oldCeshtjet}))
  }

}
