import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Table } from 'primeng/table/table';
import { Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { OldCeshtja } from 'src/app/shared/entities/old.ceshtja';
import { AppState } from 'src/app/store';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { OldCeshtjeComponent } from '../old-ceshtje/old-ceshtje.component';
import { loadOldCeshtje } from 'src/app/store/actions/old-ceshtje.actions';

@Component({
  selector: 'app-old-list',
  templateUrl: './old-list.component.html',
  styleUrls: ['./old-list.component.scss'],
  providers: [DialogService]
})
export class OldListComponent implements OnInit {

  public ref: DynamicDialogRef;
  public display: boolean = false;
  public headers$: Observable<any>;
  public data$: Observable<OldCeshtja[]>;
  public selectedCeshtje: OldCeshtja;
  public cols: any[];
  private _selectedColumns: any[];

  constructor(private _store: Store<AppState>, public _dialogService: DialogService) {
  }

  show() {
    this.ref = this._dialogService.open(OldCeshtjeComponent, {
      header: 'Çështja/Personi',
      width: '100%',
      contentStyle: { "max-height": "800px", "overflow": "auto" },
      baseZIndex: 10000,
    });
  }

  ngOnInit(): void {
    this.cols = [
      { field: "Id", header: "Id", selected: true, type: "text", display: "menu" },
      { field: "Emri", header: "Emri", selected: true, type: "text", display: "menu" },
      { field: "Mbiemri", header: "Mbiemri", selected: true, type: "text", display: "menu" },
      { field: "Data_e_ngjarjes", header: "Data_e_ngjarjes", selected: true, type: "text", display: "menu" },
      { field: "Kategoria", header: "Kategoria", selected: true, type: "text", display: "menu" },
      { field: "Sipas Nenit", header: "Sipas Nenit", selected: true, type: "text", display: "menu" },
      { field: "Policia", header: "Policia", selected: false, type: "text", display: "menu" },
      { field: "Prokuroria", header: "Prokuroria", selected: false, type: "text", display: "menu" },
      { field: "Sipas Nenit_P", header: "Sipas Nenit_P", selected: false, type: "text", display: "menu" },
      { field: "Masa e sigurisë kërkuar nga Prokurori", header: "Masa e sigurisë kërkuar nga Prokurori", selected: false, type: "text", display: "menu" },
      { field: "Data Vendimit Pr", header: "Data Vendimit Pr", selected: false, type: "text", display: "menu" },
      { field: "Gjykata", header: "Gjykata", selected: false, type: "text", display: "menu" },
      { field: "Hetimi", header: "Hetimi", selected: false, type: "text", display: "menu" },
      { field: "Data Vedim Gjk", header: "Data Vedim Gjk", selected: false, type: "text", display: "menu" },
      { field: "Gjygjtari paraprak", header: "Gjygjtari paraprak", selected: false, type: "text", display: "menu" },
      { field: "Neni_GJP", header: "Neni_GJP", selected: false, type: "text", display: "menu" },
      { field: "Data Gjygjtari pr", header: "Data Gjygjtari pr", selected: false, type: "text", display: "menu" },
      { field: "Masa e sigurise Gjykata Shk1", header: "Masa e sigurise Gjykata Shk1", selected: false, type: "text", display: "menu" },
      { field: "Data mases Gjykates Shk1", header: "Data mases Gjykates Shk1", selected: false, type: "text", display: "menu" },
      { field: "Vendimi Gjykates Shk1", header: "Vendimi Gjykates Shk1", selected: false, type: "text", display: "menu" },
      { field: "Neni_GJSH1", header: "Neni_GJSH1", selected: false, type: "text", display: "menu" },
      { field: "Data Vendimit GJ SH1", header: "Data Vendimit GJ SH1", selected: false, type: "text", display: "menu" },
      { field: "Vendimi Apelit", header: "Vendimi Apelit", selected: false, type: "text", display: "menu" },
      { field: "Neni_Apeli", header: "Neni_Apeli", selected: false, type: "text", display: "menu" },
      { field: "Data Vendim Apeli", header: "Data Vendim Apeli", selected: false, type: "text", display: "menu" },
      { field: "Masa e sigurisë në Gjykatën e Apelit", header: "Masa e sigurisë në Gjykatën e Apelit", selected: false, type: "text", display: "menu" },
      { field: "Data mas sig Apeli", header: "Data mas sig Apeli", selected: false, type: "text", display: "menu" },
      { field: "Vendim Gjykata Larte", header: "Vendim Gjykata Larte", selected: false, type: "text", display: "menu" },
      { field: "Data Gjykata Larte", header: "Data Gjykata Larte", selected: false, type: "text", display: "menu" },
      { field: "Neni_GJL", header: "Neni_GJL", selected: false, type: "text", display: "menu" },
      { field: "Masa e sigurisë në Gjykatën e Larte", header: "Masa e sigurisë në Gjykatën e Larte", selected: false, type: "text", display: "menu" },
      { field: "Data mas sig Gj Larte", header: "Data mas sig Gj Larte", selected: false, type: "text", display: "menu" },
      { field: "Komente", header: "Komente", selected: false, type: "text", display: "menu" },
    ];

    this._selectedColumns = this.cols.filter((col) => col.selected);

    this.data$ = this._store.select((state) => state.oldCeshtjet.oldData);
    this.headers$ = this._store.select((state) => state.oldCeshtjet.oldHeaders);
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }

  clear(table: Table) {
    table.clear();
  }

  onRowSelect(event) {
    this._store.dispatch(loadOldCeshtje({oldCeshtje: event.data}));
    this.show();
    console.log(event.data)
  }

  onRowUnselect(event) {
    console.log(event)
  }





  ngOnDestroy() {
  }
}
