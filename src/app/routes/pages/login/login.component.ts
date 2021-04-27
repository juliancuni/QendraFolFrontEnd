import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginDto } from 'src/app/shared/sdk/models';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;
    loginDto: LoginDto;

    constructor(public settings: SettingsService, fb: FormBuilder, private _authService: AuthService, private _router: Router) {

        this.valForm = fb.group({
            'username': ['root', Validators.required],
            'password': ['newSnew2013', Validators.required]
        });

    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            this.loginDto = value;
            this._authService.login(this.loginDto).subscribe(
                (loggedIn: boolean) => { return; },
                (err) => { console.log(err) },
                () => { this._router.navigateByUrl('home') });
        }
    }

    ngOnInit() {

    }

}
