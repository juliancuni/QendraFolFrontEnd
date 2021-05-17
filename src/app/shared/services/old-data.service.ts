import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';
import { AppState } from 'src/app/store';
import * as XLSX from 'xlsx';

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
          const headers = this.get_header_row(ws);
          headerJson[`header${i + 1}`] = headers;
        }
        this.jsonOldCeshtje['headers'] = headerJson["header1"];
        this.jsonOldCeshtje["sheet1"] = this.saveToDb([...this.jsonOldCeshtje["sheet1"]]);
        observer.next(this.jsonOldCeshtje)
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

  private saveToDb(oldCeshtjet) {
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
    oldCeshtjet = this.convertDates(oldCeshtjet);
    console.log(oldCeshtjet);
    return oldCeshtjet;
  }

  convertDates(jsonOld: any) {
    return jsonOld.map((json) => {
      (json["Data_e_ngjarjes"]) ? json["Data_e_ngjarjes"] = new Date(json["Data_e_ngjarjes"]) : null;
      (json["Data Vendimit Pr"]) ? json["Data Vendimit Pr"] = new Date(json["Data Vendimit Pr"]) : null;
      (json["Data Vedim Gjk"]) ? json["Data Vedim Gjk"] = new Date(json["Data Vedim Gjk"]) : null;
      (json["Data Gjygjtari pr"]) ? json["Data Gjygjtari pr"] = new Date(json["Data Gjygjtari pr"]) : null;
      (json["Data mases Gjykates Shk1"]) ? json["Data mases Gjykates Shk1"] = new Date(json["Data mases Gjykates Shk1"]) : null;
      (json["Data Vendimit GJ SH1"]) ? json["Data Vendimit GJ SH1"] = new Date(json["Data Vendimit GJ SH1"]) : null;
      (json["Data Vendim Apeli"]) ? json["Data Vendim Apeli"] = new Date(json["Data Vendim Apeli"]) : null;
      (json["Data mas sig Apeli"]) ? json["Data mas sig Apeli"] = new Date(json["Data mas sig Apeli"]) : null;
      (json["Data Gjykata Larte"]) ? json["Data Gjykata Larte"] = new Date(json["Data Gjykata Larte"]) : null;
      (json["Data mas sig Gj Larte"]) ? json["Data mas sig Gj Larte"] = new Date(json["Data mas sig Gj Larte"]) : null;
      return json;
    })
  }
}
