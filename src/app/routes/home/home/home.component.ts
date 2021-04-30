import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/shared/sdk/services';
// import * as XLSX from 'xlsx';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private _fileApi: FileUploadService) {
    }

    ngOnInit() {
    }

}
