import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginDto } from 'src/app/shared/sdk/models';
// import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Observable } from 'rxjs';
import * as fromAuthActions from 'src/app/store/actions/auth.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    login$: Observable<LoginDto>;
    isAuthenticated$: Observable<boolean>;
    valForm: FormGroup;

    constructor(public settings: SettingsService, fb: FormBuilder, private _store: Store<AppState>) {

        this.valForm = fb.group({
            'username': ['root', Validators.required],
            'password': ['newSnew2013', Validators.required]
        });

    }

    login($ev, value: LoginDto) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            this._store.dispatch(fromAuthActions.loginPage({ login: value }));
        }
    }

    logout() {
        this._store.dispatch(fromAuthActions.logout());
    }

    ngOnInit() {
        this.isAuthenticated$ = this._store.select((state) => state.auth.isAuthenticated);
    }

}
