import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { RouteEffects } from './store/effects/route.effects';

import { ApiModule } from './shared/sdk/api.module';


// https://github.com/ocombe/ng2-translate/issues/218
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule, // required for ng2-tag-input
        CoreModule,
        LayoutModule,
        SharedModule.forRoot(),
        RoutesModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        StoreModule.forRoot(reducers, {
            metaReducers, runtimeChecks: {
                strictStateImmutability: false,
                strictActionImmutability: false,
                strictStateSerializability: false,
                strictActionSerializability: false,
            }
        }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([AppEffects, RouteEffects]),
        ApiModule.forRoot({ rootUrl: "https://localhost:5001" }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
