import { Component, OnInit } from '@angular/core';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  public fileOver = false;
  public loading = false;
  public fileName: string;
  public jsonOldCeshtje = null;
  constructor() {

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
    this.loading = true;
    this.excelToJson(ev.dataTransfer);
  }

  fromInput(ev) {
    ev.preventDefault();
    this.loading = true;
    this.excelToJson(ev.target);
  }

  clearFile() {
    this.fileName = null;
    this.jsonOldCeshtje = null;
    (<HTMLInputElement>document.getElementById('input-file')).value = "";
    (<HTMLInputElement>document.getElementById('drop-file')).value = "";
  }

  excelToJson(file) { 
    let headerJson = {};
    this.jsonOldCeshtje = {};
    const target: DataTransfer = <DataTransfer>(file);
    this.fileName = target.files[0].name;
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    this.jsonOldCeshtje['filename'] = target.files[0].name;
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
      this.jsonOldCeshtje['headers'] = headerJson;
      this.loading = false;
      console.log(this.jsonOldCeshtje);
    } 
  }

  get_header_row(sheet) {
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

  ngOnInit(): void {
  }

}
