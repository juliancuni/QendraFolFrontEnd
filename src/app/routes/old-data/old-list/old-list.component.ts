import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Table } from 'primeng/table/table';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { OldCeshtjeComponent } from '../old-ceshtje/old-ceshtje.component';
import { loadOldCeshtje } from 'src/app/store/actions/old-ceshtje.actions';
import { OldCeshtja } from 'src/app/shared/sdk/models';
import { OldCeshtjaService } from 'src/app/shared/sdk/services';
import { map } from 'rxjs/operators';

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

  constructor(private _store: Store<AppState>, public _dialogService: DialogService, private _oldCeshtjaService: OldCeshtjaService) {
  }

  showModal() {
    this.ref = this._dialogService.open(OldCeshtjeComponent, {
      header: 'Çështja/Personi',
      width: '100%',
      contentStyle: { "max-height": "100%", "overflow": "auto" },
      baseZIndex: 10000,
      closeOnEscape: true
    });
  }

  ngOnInit(): void {
    this.cols = [
      { field: "oldId", header: "Old_Id", selected: true, type: "text", display: "menu" },
      { field: "emri", header: "Emri", selected: true, type: "text", display: "menu" },
      { field: "mbiemri", header: "Mbiemri", selected: true, type: "text", display: "menu" },
      { field: "data_e_ngjarjes", header: "Data e ngjarjes", selected: true, type: "text", display: "menu" },
      { field: "kategoria", header: "Kategoria", selected: true, type: "text", display: "menu" },
      { field: "sipas_Nenit", header: "Sipas Nenit", selected: true, type: "text", display: "menu" },
      { field: "policia", header: "Policia", selected: false, type: "text", display: "menu" },
      { field: "prokuroria", header: "Prokuroria", selected: false, type: "text", display: "menu" },
      { field: "sipas_Nenit_P", header: "Sipas Nenit Prokuroria", selected: false, type: "text", display: "menu" },
      { field: "masa_e_sigurisë_kërkuar_nga_Prokurori", header: "Masa e sigurisë kërkuar nga Prokurori", selected: false, type: "text", display: "menu" },
      { field: "data_Vendimit_Pr", header: "Data e Vendimit Prokuroria", selected: false, type: "text", display: "menu" },
      { field: "gjykata", header: "Gjykata", selected: false, type: "text", display: "menu" },
      { field: "hetimi", header: "Hetimi", selected: false, type: "text", display: "menu" },
      { field: "data_Vedim_Gjk", header: "Data Vedim Gjykata", selected: false, type: "text", display: "menu" },
      { field: "gjygjtari_paraprak", header: "Gjygjtari paraprak", selected: false, type: "text", display: "menu" },
      { field: "neni_GJP", header: "Neni Gjygjtari paraprak", selected: false, type: "text", display: "menu" },
      { field: "data_Gjygjtari_pr", header: "Data Gjygjtari paraprak", selected: false, type: "text", display: "menu" },
      { field: "masa_e_sigurise_Gjykata_Shk1", header: "Masa e sigurise Gjykata Shk1", selected: false, type: "text", display: "menu" },
      { field: "data_mases_Gjykates_Shk1", header: "Data mases Gjykates Shk1", selected: false, type: "text", display: "menu" },
      { field: "vendimi_Gjykates_Shk1", header: "Vendimi Gjykates Shk1", selected: false, type: "text", display: "menu" },
      { field: "neni_GJSH1", header: "Neni Gjykates Shk1", selected: false, type: "text", display: "menu" },
      { field: "data_Vendimit_GJ_SH1", header: "Data Vendimit Gjykates SH1", selected: false, type: "text", display: "menu" },
      { field: "vendimi_Apelit", header: "Vendimi Apelit", selected: false, type: "text", display: "menu" },
      { field: "neni_Apeli", header: "Neni Apeli", selected: false, type: "text", display: "menu" },
      { field: "data_Vendim_Apeli", header: "Data Vendim Apeli", selected: false, type: "text", display: "menu" },
      { field: "masa_e_sigurisë_në_Gjykatën_e_Apelit", header: "Masa e sigurisë në Gjykatën e Apelit", selected: false, type: "text", display: "menu" },
      { field: "data_mas_sig_Apeli", header: "Data mases sigurise Apeli", selected: false, type: "text", display: "menu" },
      { field: "vendim_Gjykata_Larte", header: "Vendim Gjykata Larte", selected: false, type: "text", display: "menu" },
      { field: "data_Gjykata_Larte", header: "Data Gjykata Larte", selected: false, type: "text", display: "menu" },
      { field: "neni_GJL", header: "Neni Gjykata Larte", selected: false, type: "text", display: "menu" },
      { field: "masa_e_sigurisë_në_Gjykatën_e_Larte", header: "Masa e sigurisë në Gjykatën e Larte", selected: false, type: "text", display: "menu" },
      { field: "data_mas_sig_Gj_Larte", header: "Data e mases sigurise Gjykata Larte", selected: false, type: "text", display: "menu" },
      { field: "komente", header: "Komente", selected: false, type: "text", display: "menu" },
    ];

    this._selectedColumns = this.cols.filter((col) => col.selected);

    // this.data$ = this._store.select((state) => state.oldCeshtjet.oldData);
    this.data$ = this._oldCeshtjaService.apiOldCeshtjaGet$Json();
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
    this._store.dispatch(loadOldCeshtje({ oldCeshtje: event.data }));
    this.showModal();
  }

  onRowUnselect(event) {
    this._store.dispatch(loadOldCeshtje({ oldCeshtje: event.data }));
    this.showModal();
  }

  addNewOldCeshtje() {
    let emptyOldCesthje: OldCeshtja = {};
    this._store.dispatch(loadOldCeshtje({ oldCeshtje: null }));
    this.showModal();
  }







  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
