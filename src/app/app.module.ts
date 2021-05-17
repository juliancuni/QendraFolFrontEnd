import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { EffectsModule } from '@ngrx/effects';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { reducers, metaReducers } from './store';
import { ApiModule } from './shared/sdk/api.module';
import { extModules } from './build-specifics';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './shared/services/kc.initializer';

// https://github.com/ocombe/ng2-translate/issues/218
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        NgProgressModule,
        NgProgressHttpModule,
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
        extModules,
        EffectsModule.forRoot([]),
        ApiModule.forRoot({ rootUrl: environment.apiUrl }),
        KeycloakAngularModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeKeycloak,
            multi: true,
            deps: [KeycloakService],
        },
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: TokenInterceptor,
        //     multi: true
        // }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
