import { Component, HostBinding, OnInit } from '@angular/core';

import { SettingsService } from './core/settings/settings.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    @HostBinding('class.layout-fixed') get isFixed(): any { return this.settings.getLayoutSetting('isFixed'); }
    @HostBinding('class.aside-collapsed') get isCollapsed(): any { return this.settings.getLayoutSetting('isCollapsed'); }
    @HostBinding('class.layout-boxed') get isBoxed(): any { return this.settings.getLayoutSetting('isBoxed'); }
    @HostBinding('class.layout-fs') get useFullLayout(): any { return this.settings.getLayoutSetting('useFullLayout'); }
    @HostBinding('class.hidden-footer') get hiddenFooter(): any { return this.settings.getLayoutSetting('hiddenFooter'); }
    @HostBinding('class.layout-h') get horizontal(): any { return this.settings.getLayoutSetting('horizontal'); }
    @HostBinding('class.aside-float') get isFloat(): any { return this.settings.getLayoutSetting('isFloat'); }
    @HostBinding('class.offsidebar-open') get offsidebarOpen(): any { return this.settings.getLayoutSetting('offsidebarOpen'); }
    @HostBinding('class.aside-toggled') get asideToggled(): any { return this.settings.getLayoutSetting('asideToggled'); }
    @HostBinding('class.aside-collapsed-text') get isCollapsedText(): any { return this.settings.getLayoutSetting('isCollapsedText'); }

    constructor(public settings: SettingsService) { }

    ngOnInit(): void {
        // prevent empty links to reload the page
        document.addEventListener('click', e => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' && ['', '#'].indexOf(target.getAttribute('href')) > -1) {
                e.preventDefault();
            }
        });
    }
}
