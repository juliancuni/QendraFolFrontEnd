import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldListComponent } from './old-list/old-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OldCeshtjeComponent } from './old-ceshtje/old-ceshtje.component';
import { UploadComponent } from './upload/upload.component';
import { OldCeshtjetFromDBResolver } from 'src/app/shared/services/old-ceshtje-db.resolver';
import { StoreModule } from '@ngrx/store';

import * as fromOldCeshtjeDb from '../../store/reducers/old-ceshtje-db.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OldCeshtjeDbEffects } from 'src/app/store/effects/old-ceshtje-db.effects';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: OldListComponent, resolve: { oldCeshtjetFromDb: OldCeshtjetFromDBResolver } },
  { path: 'list', component: ListComponent },
  { path: 'ceshtje', component: OldCeshtjeComponent }
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature(fromOldCeshtjeDb.featureKey, fromOldCeshtjeDb.reducer),
    EffectsModule.forFeature([OldCeshtjeDbEffects]),
  ],
  declarations: [
    OldListComponent,
    OldCeshtjeComponent,
    UploadComponent,
    ListComponent,
  ],
  exports: [],
  providers: [
    OldCeshtjetFromDBResolver
  ]

})
export class OldDataModule { }
