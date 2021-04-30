import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'upload', component: UploadComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ModalModule.forChild(),

    ],
    declarations: [HomeComponent, UploadComponent],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }
