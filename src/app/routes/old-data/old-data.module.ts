import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldListComponent } from './old-list/old-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
// import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: OldListComponent }
]

@NgModule({

  imports: [
    CommonModule,
    // SharedModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([OldListComponent]),
  ],
  declarations: [
    OldListComponent,
  ],
  exports: [
    // RouterModule
  ],

})
export class OldDataModule { }
