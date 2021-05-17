import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { UserDto } from 'src/app/shared/sdk/models';
// import { AppState } from 'src/app/store';

import { UserblockService } from './userblock.service';

@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    user$: Observable<any>;
    constructor(
        public userblockService: UserblockService, 
        // private _store: Store<AppState>
        ) {}

    ngOnInit() {
        // this.user$ = this._store.select(state => state.auth.userDto);
    }

    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

}
