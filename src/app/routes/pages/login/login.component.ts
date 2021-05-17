import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { LoginDto } from 'src/app/shared/sdk/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Observable } from 'rxjs';
// import * as fromAuthActions from 'src/app/store/actions/auth.actions';
import { HttpErrors } from 'src/app/shared/entities/http.errors';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    login$: Observable<any>;
    error$: Observable<HttpErrors>
    isAuthenticated$: Observable<boolean>;
    loading$: Observable<boolean>;
    valForm: FormGroup;

    constructor(public settings: SettingsService, fb: FormBuilder, private _store: Store<AppState>) {

        this.valForm = fb.group({
            'username': [null, Validators.required],
            'password': [null, Validators.required]
        });
    }

    login($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            // this._store.dispatch(fromAuthActions.loginPage({ login: value }));
        }
    }

    logout() {
        // this._store.dispatch(fromAuthActions.logout());
    }

    ngOnInit() {
        // this.loading$ = this._store.select((state) => state.auth.loading);
        // this.isAuthenticated$ = this._store.select((state) => state.auth.isAuthenticated);
        // this.error$ = this._store.select((state) => state.auth.error);
    }

}
