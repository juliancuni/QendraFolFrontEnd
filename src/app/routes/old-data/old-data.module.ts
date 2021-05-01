import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldListComponent } from './old-list/old-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: OldListComponent }
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    OldListComponent,
  ],
  exports: [],

})
export class OldDataModule { }
