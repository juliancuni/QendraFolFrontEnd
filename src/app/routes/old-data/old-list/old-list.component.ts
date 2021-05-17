import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Table } from 'primeng/table/table';
import { Observable, Subject } from 'rxjs';
import { AppState } from 'src/app/store';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
// import { OldCeshtjeComponent } from '../old-ceshtje/old-ceshtje.component';
// import * as OldCeshtjetFromActions from 'src/app/store/actions/old-ceshtje.actions';
// import { OldCeshtja } from 'src/app/shared/sdk/models';
import { takeUntil } from 'rxjs/operators';
import { UploadComponent } from '../upload/upload.component';
import * as OldCeshtjetFromDbSelectors from 'src/app/store/selectors/old-ceshtje-db.selectors';
import { ConfirmationService } from 'primeng/api';
import * as OldCeshtjetFromDbActions from 'src/app/store/actions/old-ceshtje-db.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-old-list',
  templateUrl: './old-list.component.html',
  styleUrls: ['./old-list.component.scss'],
  providers: [DialogService, ConfirmationService]
})
export class OldListComponent implements OnInit {

  public ceshtjaModal: DynamicDialogRef;
  public bulkUploadModal: DynamicDialogRef;
  public display: boolean = false;
  public headers$: Observable<any>;
  public data$: Observable<any[]>;
  public selectedCeshtje: {};
  public cols: any[];
  private _selectedColumns: any[];
  notifier = new Subject();
  public oldCeshtje: {};
  public dialogMethod: string;
  public loading$: Observable<boolean>;

  constructor(private _store: Store<AppState>, public _dialogService: DialogService, private _confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.cols = [
      { field: "oldId", header: "Old_Id", selected: true, type: "text", display: "menu" },
      { field: "emri", header: "Emri", selected: true, type: "text", display: "menu" },
      { field: "mbiemri", header: "Mbiemri", selected: true, type: "text", display: "menu" },
      { field: "data_e_ngjarjes", header: "Data e ngjarjes", selected: true, type: "date", display: "menu" },
      { field: "kategoria", header: "Kategoria", selected: true, type: "text", display: "menu" },
      { field: "sipas_Nenit", header: "Sipas Nenit", selected: false, type: "text", display: "menu" },
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
    this.data$ = this._store.pipe(select(OldCeshtjetFromDbSelectors.selectAllOldCeshtjeDb));
    this.loading$ = this._store.pipe(select((state) => state.oldCeshtjetFromDb.loading));
    this.data$.pipe(
      map((cesthjet) => {
        return cesthjet.forEach((cesthje) => {
          cesthje.data_Gjygjtari_pr = new Date(cesthje.data_Gjygjtari_pr);
          cesthje.data_Gjykata_Larte = new Date(cesthje.data_Gjykata_Larte);
          cesthje.data_Vedim_Gjk = new Date(cesthje.data_Vedim_Gjk);
          cesthje.data_Vendim_Apeli = new Date(cesthje.data_Vendim_Apeli);
          cesthje.data_Vendimit_GJ_SH1 = new Date(cesthje.data_Vendimit_GJ_SH1);
          cesthje.data_Vendimit_Pr = new Date(cesthje.data_Vendimit_Pr);
          cesthje.data_e_ngjarjes = new Date(cesthje.data_e_ngjarjes);
          cesthje.data_mas_sig_Apeli = new Date(cesthje.data_mas_sig_Apeli);
          cesthje.data_mas_sig_Gj_Larte = new Date(cesthje.data_mas_sig_Gj_Larte);
          cesthje.data_mases_Gjykates_Shk1 = new Date(cesthje.data_mas_sig_Gj_Larte);
          return cesthje;
        })
      })
    )
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }

  clear(table: Table) {
    table.clear();
    table.filterGlobal("", "")
  }

  viewCheshtje(data) {
    this.display = true;
    this.dialogMethod = "update";
    this.oldCeshtje = data;
  }

  addNewOldCeshtje() {
    this.display = true;
    this.dialogMethod = "create";
    this.oldCeshtje = {};
  }

  confirmDelete(oldCeshtje: {}) {
    this._confirmationService.confirm({
      message: 'Jeni të sigurtë që doni të fshini këtë rekord?',
      header: 'Kujdes!',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._store.dispatch(OldCeshtjetFromDbActions.deleteOldCeshtjeDb({ oldCeshtje: oldCeshtje }))
      },
      reject: () => {
        // console.log("DELETE REJECTED");
      }
    });
  }

  showImportXLSX() {
    this.bulkUploadModal = this._dialogService.open(UploadComponent, {
      header: 'Import Old Data from XLSX file',
      width: '70%',
      contentStyle: { "max-height": "700px", "overflow": "auto" },
      baseZIndex: 10000,
    });
    this.bulkUploadModal.onClose.pipe(takeUntil(this.notifier)).subscribe(() => {
      this._store.dispatch(OldCeshtjetFromDbActions.resetTableData());
      this._store.dispatch(OldCeshtjetFromDbActions.clearRawDataFromStore());
      this._store.dispatch(OldCeshtjetFromDbActions.loadAllCeshtjeFromDbList());
    })
  }

  toggleModal(ev) {
    this.display = false;
  }

  ngOnDestroy() {
    this.notifier.next(true);
    this.notifier.complete();
    if (this.ceshtjaModal) {
      this.ceshtjaModal.close();
    }
    if (this.bulkUploadModal) {
      this.bulkUploadModal.close();
    }
  }
}
