import { Component, OnInit, Input } from '@angular/core';
import { Table } from 'primeng/table/table';
import { Observable, Subject } from 'rxjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { takeUntil } from 'rxjs/operators';
import { UploadComponent } from '../upload/upload.component';
import { ConfirmationService } from 'primeng/api';
import { map } from 'rxjs/operators';
import { OldCeshtjeDto } from 'src/app/shared/sdk/models';
import { OldCeshtjeEntityService } from 'src/app/shared/services/entity-services/old-ceshtje-entity.service';

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

  constructor(
    public _dialogService: DialogService,
    private _confirmationService: ConfirmationService,
    private _oldCeshtjetService: OldCeshtjeEntityService,
  ) {
  }

  ngOnInit(): void {
    this.data$ = this._oldCeshtjetService.entities$;
    this.loading$ = this._oldCeshtjetService.loading$;
    this.cols = [
      { field: "oldid", header: "Old_Id", selected: true, type: "text", display: "menu" },
      { field: "emri", header: "Emri", selected: true, type: "text", display: "menu" },
      { field: "mbiemri", header: "Mbiemri", selected: true, type: "text", display: "menu" },
      { field: "data_e_ngjarjes", header: "Data e ngjarjes", selected: true, type: "date", display: "menu" },
      { field: "kategoria", header: "Kategoria", selected: true, type: "text", display: "menu" },
      { field: "sipas_nenit", header: "Sipas Nenit", selected: false, type: "text", display: "menu" },
      { field: "policia", header: "Policia", selected: false, type: "text", display: "menu" },
      { field: "prokuroria", header: "Prokuroria", selected: false, type: "text", display: "menu" },
      { field: "sipas_nenit_P", header: "Sipas Nenit Prokuroria", selected: false, type: "text", display: "menu" },
      { field: "masa_e_sigurisë_kërkuar_nga_prokurori", header: "Masa e sigurisë kërkuar nga Prokurori", selected: false, type: "text", display: "menu" },
      { field: "data_vendimit_pr", header: "Data e Vendimit Prokuroria", selected: false, type: "text", display: "menu" },
      { field: "gjykata", header: "Gjykata", selected: false, type: "text", display: "menu" },
      { field: "hetimi", header: "Hetimi", selected: false, type: "text", display: "menu" },
      { field: "data_vedim_gjk", header: "Data Vedim Gjykata", selected: false, type: "text", display: "menu" },
      { field: "gjygjtari_paraprak", header: "Gjygjtari paraprak", selected: false, type: "text", display: "menu" },
      { field: "neni_gjp", header: "Neni Gjygjtari paraprak", selected: false, type: "text", display: "menu" },
      { field: "data_gjygjtari_pr", header: "Data Gjygjtari paraprak", selected: false, type: "text", display: "menu" },
      { field: "masa_e_sigurise_gjykata_shk1", header: "Masa e sigurise Gjykata Shk1", selected: false, type: "text", display: "menu" },
      { field: "data_mases_gjykates_shk1", header: "Data mases Gjykates Shk1", selected: false, type: "text", display: "menu" },
      { field: "vendimi_gjykates_shk1", header: "Vendimi Gjykates Shk1", selected: false, type: "text", display: "menu" },
      { field: "neni_gjsh1", header: "Neni Gjykates Shk1", selected: false, type: "text", display: "menu" },
      { field: "data_Vendimit_gj_sh1", header: "Data Vendimit Gjykates SH1", selected: false, type: "text", display: "menu" },
      { field: "vendimi_apelit", header: "Vendimi Apelit", selected: false, type: "text", display: "menu" },
      { field: "neni_apeli", header: "Neni Apeli", selected: false, type: "text", display: "menu" },
      { field: "data_vendim_apeli", header: "Data Vendim Apeli", selected: false, type: "text", display: "menu" },
      { field: "masa_e_sigurisë_në_gjykatën_e_apelit", header: "Masa e sigurisë në Gjykatën e Apelit", selected: false, type: "text", display: "menu" },
      { field: "data_mas_sig_apeli", header: "Data mases sigurise Apeli", selected: false, type: "text", display: "menu" },
      { field: "vendim_gjykata_larte", header: "Vendim Gjykata Larte", selected: false, type: "text", display: "menu" },
      { field: "data_gjykata_larte", header: "Data Gjykata Larte", selected: false, type: "text", display: "menu" },
      { field: "neni_gjl", header: "Neni Gjykata Larte", selected: false, type: "text", display: "menu" },
      { field: "masa_e_sigurisë_në_gjykatën_e_larte", header: "Masa e sigurisë në Gjykatën e Larte", selected: false, type: "text", display: "menu" },
      { field: "data_mas_sig_gj_larte", header: "Data e mases sigurise Gjykata Larte", selected: false, type: "text", display: "menu" },
      { field: "komente", header: "Komente", selected: false, type: "text", display: "menu" },
    ];
    this._selectedColumns = this.cols.filter((col) => col.selected);
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

  confirmDelete(oldCeshtje: OldCeshtjeDto) {
    this._confirmationService.confirm({
      message: 'Jeni të sigurtë që doni të fshini këtë rekord?',
      header: 'Kujdes!',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._oldCeshtjetService.delete(oldCeshtje.id);
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
      // this._store.dispatch(OldCeshtjetFromDbActions.resetTableData());
      // this._store.dispatch(OldCeshtjetFromDbActions.clearRawDataFromStore());
      // this._store.dispatch(OldCeshtjetFromDbActions.loadAllCeshtjeFromDbList());
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
