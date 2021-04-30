import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('importXCLS', { static: false }) importXCLS: ModalDirective;
    constructor(private modalService: BsModalService) {
    }

    openModal() {
        this.importXCLS.show();
    }

    closeModal() {
        this.importXCLS.hide();
    }

    ngOnInit() {
    }

}
