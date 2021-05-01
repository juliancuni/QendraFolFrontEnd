import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';




// https://angular.io/styleguide#!#04-10
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    TableModule,
    MultiSelectModule,
    ButtonModule,
    InputTextModule,
    DynamicDialogModule,
    ToastModule,
    // AccordionModule.forRoot(),
    // AlertModule.forRoot(),
    // ButtonsModule.forRoot(),
    // CarouselModule.forRoot(),
    // CollapseModule.forRoot(),
    // DatepickerModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    // BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    // PaginationModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // RatingModule.forRoot(),
    TabsModule.forRoot(),
    // TimepickerModule.forRoot(),
    // TooltipModule.forRoot(),
    // PopoverModule.forRoot(),
    // TypeaheadModule.forRoot(),
  ],
  providers: [
    // ColorsService
    MessageService
  ],
  declarations: [
    // FlotDirective,
    // SparklineDirective,
    // EasypiechartDirective,
    // CheckallDirective,
    // VectormapDirective,
    // NowDirective,
    // ScrollableDirective,
    // JqcloudDirective,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    TableModule,
    MultiSelectModule,
    ButtonModule,
    InputTextModule,
    DynamicDialogModule,
    ToastModule,
    // AccordionModule,
    // AlertModule,
    // ButtonsModule,
    // CarouselModule,
    // CollapseModule,
    // DatepickerModule,
    // BsDatepickerModule,
    // BsDropdownModule,
    ModalModule,
    // PaginationModule,
    // ProgressbarModule,
    // RatingModule,
    TabsModule,
    // TimepickerModule,
    // TooltipModule,
    // PopoverModule,
    // TypeaheadModule,
    // FlotDirective,
    // SparklineDirective,
    // EasypiechartDirective,
    // CheckallDirective,
    // VectormapDirective,
    // NowDirective,
    // ScrollableDirective,
    // JqcloudDirective,
  ],
})

// https://github.com/ocombe/ng2-translate/issues/209
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
