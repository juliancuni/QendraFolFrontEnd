import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldListComponent } from './old-list/old-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OldCeshtjeComponent } from './old-ceshtje/old-ceshtje.component';

const routes: Routes = [
  { path: '', component: OldListComponent },
  { path: 'old', component: OldCeshtjeComponent }
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    OldListComponent,
    OldCeshtjeComponent,
  ],
  exports: [],

})
export class OldDataModule { }
