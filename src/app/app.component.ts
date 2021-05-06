import { Component, HostBinding, OnInit } from '@angular/core';
import { SettingsService } from './core/settings/settings.service';

import { AppState } from 'src/app/store';
import * as fromAuthActions from 'src/app/store/actions/auth.actions';
import * as fromRouteActions from 'src/app/store/actions/route.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    @HostBinding('class.layout-fixed') get isFixed() { return this.settings.getLayoutSetting('isFixed'); };
    @HostBinding('class.aside-collapsed') get isCollapsed() { return this.settings.getLayoutSetting('isCollapsed'); };
    @HostBinding('class.layout-boxed') get isBoxed() { return this.settings.getLayoutSetting('isBoxed'); };
    @HostBinding('class.layout-fs') get useFullLayout() { return this.settings.getLayoutSetting('useFullLayout'); };
    @HostBinding('class.hidden-footer') get hiddenFooter() { return this.settings.getLayoutSetting('hiddenFooter'); };
    @HostBinding('class.layout-h') get horizontal() { return this.settings.getLayoutSetting('horizontal'); };
    @HostBinding('class.aside-float') get isFloat() { return this.settings.getLayoutSetting('isFloat'); };
    @HostBinding('class.offsidebar-open') get offsidebarOpen() { return this.settings.getLayoutSetting('offsidebarOpen'); };
    @HostBinding('class.aside-toggled') get asideToggled() { return this.settings.getLayoutSetting('asideToggled'); };
    @HostBinding('class.aside-collapsed-text') get isCollapsedText() { return this.settings.getLayoutSetting('isCollapsedText'); };

    constructor(public settings: SettingsService, private _store: Store<AppState>) { }

    ngOnInit() {
        try {
            const user = localStorage.getItem('user');
            if (user) {
                this._store.dispatch(fromAuthActions.browserReload({ userDto: JSON.parse(user) }));
            } else {
                this._store.dispatch(fromRouteActions.goToLogin());
            }
        } catch (err) {
            this._store.dispatch(fromRouteActions.goToLogin());
        }

        // prevent empty links to reload the page
        document.addEventListener('click', e => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' && ['', '#'].indexOf(target.getAttribute('href')) > -1)
                e.preventDefault();
        });
    }
}
