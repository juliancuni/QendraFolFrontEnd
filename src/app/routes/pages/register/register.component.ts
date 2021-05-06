import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { register } from 'src/app/store/actions/auth.actions';
import { RegisterDto } from 'src/app/shared/sdk/models';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    valForm: FormGroup;
    passwordForm: FormGroup;
    loading$: Observable<boolean>;
    constructor(public settings: SettingsService, fb: FormBuilder, private _store: Store<AppState>) {

        let password = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
        let certainPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

        this.valForm = fb.group({
            'username': [null, Validators.required],
            'password': password,
            'confirmPassword': certainPassword
        });
    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }

        if (this.valForm.valid) {
            // let registerDto: RegisterDto;
            // registerDto.userName = value.username;
            // registerDto.password = value.password;
            delete value.confirmPassword;
            this._store.dispatch(register({ registerDto: value }))
        }
    }

    ngOnInit() {
        this.loading$ = this._store.select((state) => state.auth.loading);
    }

}
