import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldListComponent } from './old-list/old-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OldCeshtjeComponent } from './old-ceshtje/old-ceshtje.component';
import { UploadComponent } from './upload/upload.component';
import { OldCeshtjetResolver } from 'src/app/shared/services/old-ceshtje.resolver';
import { ListComponent } from './list/list.component';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { OldCeshtjeEntityService } from 'src/app/shared/services/entity-services/old-ceshtje-entity.service';
import { OldCeshtjeService } from 'src/app/shared/services/data-services/old-ceshtje.service';
import { compareOldCeshtje } from 'src/app/shared/services/data-services/old-cesthje.sort';

const routes: Routes = [
  { path: '', component: OldListComponent, resolve: { oldCeshtjet: OldCeshtjetResolver }},
  { path: 'list', component: ListComponent,  },
  { path: 'ceshtje', component: OldCeshtjeComponent }
]

const entityMedadata: EntityMetadataMap = {
  OldCeshtje: {
    entityName: 'OldCeshtjeDto',
    sortComparer: compareOldCeshtje
  }
}

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    OldListComponent,
    OldCeshtjeComponent,
    UploadComponent,
    ListComponent,
  ],
  exports: [],
  providers: [
    OldCeshtjeEntityService,
    OldCeshtjetResolver,
    OldCeshtjeService,
  ]

})
export class OldDataModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private oldDataService: OldCeshtjeService,
  ) {
    eds.registerMetadataMap(entityMedadata);
    entityDataService.registerService('OldCeshtjeDto', oldDataService);
  }
}
