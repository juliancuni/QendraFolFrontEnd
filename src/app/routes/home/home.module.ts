import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromOldCeshtje from '../../store/reducers/old-ceshtje.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OldCeshtjeEffects } from '../../store/effects/old-ceshtje.effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { OldCeshtjeDbEffects } from 'src/app/store/effects/old-ceshtje-db.effects';


const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ModalModule.forChild(),
        StoreModule.forFeature(fromOldCeshtje.oldCeshtjeFeatureKey, fromOldCeshtje.reducer),
        EffectsModule.forFeature([OldCeshtjeEffects]),
        SharedModule
    ],
    declarations: [HomeComponent],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }
