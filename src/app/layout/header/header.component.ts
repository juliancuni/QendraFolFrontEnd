import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { Router } from '@angular/router';

import { UserblockService } from '../sidebar/userblock/userblock.service';
import { SettingsService } from '../../core/settings/settings.service';
import { MenuService } from '../../core/menu/menu.service';
import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/store';
import { KeycloakService } from 'keycloak-angular';
// import { logout } from 'src/app/store/actions/auth.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    navCollapsed = true; // for horizontal layout
    menuItems = []; // for horizontal layout
    router: Router;
    items = [{
        label: 'Logout',
        icon: 'pi pi-power-off',
        command: () => {
            this.logout();
        }
    }];

    isNavSearchVisible: boolean;
    @ViewChild('fsbutton', { static: true }) fsbutton;  // the fullscreen button

    constructor(
        private readonly _kcService: KeycloakService,
        public menu: MenuService,
        public userblockService: UserblockService,
        public settings: SettingsService,
        public injector: Injector,
        // private _store: Store<AppState>
    ) {

        // show only a few items on demo
        this.menuItems = menu.getMenu().slice(0, 4); // for horizontal layout

    }

    ngOnInit() {

        this.isNavSearchVisible = false;

        this.router = this.injector.get(Router);

        // Autoclose navbar on mobile when route change
        this.router.events.subscribe((val) => {
            // scroll view to top
            window.scrollTo(0, 0);
            // close collapse menu
            this.navCollapsed = true;
        });

    }

    toggleUserBlock(event) {
        event.preventDefault();
        this.userblockService.toggleVisibility();
    }

    openNavSearch(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setNavSearchVisible(true);
    }

    setNavSearchVisible(stat: boolean) {
        // console.log(stat);
        this.isNavSearchVisible = stat;
    }

    getNavSearchVisible() {
        return this.isNavSearchVisible;
    }

    toggleOffsidebar() {
        this.settings.toggleLayoutSetting('offsidebarOpen');
    }

    toggleCollapsedSideabar() {
        this.settings.toggleLayoutSetting('isCollapsed');
    }

    isCollapsedText() {
        return this.settings.getLayoutSetting('isCollapsedText');
    }

    toggleFullScreen(event) {
    }
    logout() {
        this._kcService.logout();
    }
}
