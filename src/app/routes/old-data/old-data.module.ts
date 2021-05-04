import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldListComponent } from './old-list/old-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OldCeshtjeComponent } from './old-ceshtje/old-ceshtje.component';
import { UploadComponent } from './upload/upload.component';
import { OldCeshtjetFromDBResolver } from 'src/app/shared/services/old-ceshtje-db.resolver';

const routes: Routes = [
  { path: '', component: OldListComponent, resolve: { oldCeshtjetFromDb: OldCeshtjetFromDBResolver } },
  // { path: 'old', component: OldCeshtjeComponent }
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
    UploadComponent
  ],
  exports: [],
  providers: [
    OldCeshtjetFromDBResolver
  ]

})
export class OldDataModule { }
