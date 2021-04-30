import { Component, OnInit } from '@angular/core';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public uploader: FileUploader = new FileUploader({ url: URL, allowedMimeType: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'], autoUpload: false, removeAfterUpload: true });;
    public hasBaseDropZoneOver: boolean = false;
    constructor() { }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    ngOnInit() {
    }

}
