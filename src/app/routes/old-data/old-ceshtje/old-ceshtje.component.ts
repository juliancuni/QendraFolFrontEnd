import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OldCeshtja } from 'src/app/shared/sdk/models';
import { OldCeshtjaService } from 'src/app/shared/sdk/services';
import { AppState } from 'src/app/store';
import * as OldCeshtjeDbActions from 'src/app/store/actions/old-ceshtje-db.actions';

@Component({
  selector: 'app-old-ceshtje',
  templateUrl: './old-ceshtje.component.html',
  styleUrls: ['./old-ceshtje.component.scss']
})
export class OldCeshtjeComponent implements OnInit, OnDestroy, OnChanges {


  public keys = [
    { field: "emri", header: "Emri", selected: true, type: "text", display: "menu" },
    { field: "mbiemri", header: "Mbiemri", selected: true, type: "text", display: "menu" },
    { field: "data_e_ngjarjes", header: "Data e ngjarjes", selected: true, type: "text", display: "menu", calendar: true },
    { field: "kategoria", header: "Kategoria", selected: true, type: "text", display: "menu" },
    { field: "sipas_Nenit", header: "Sipas Nenit", selected: true, type: "text", display: "menu", dropdown: true },
    { field: "policia", header: "Policia", selected: false, type: "text", display: "menu", textArea: true },
    { field: "prokuroria", header: "Prokuroria", selected: false, type: "text", display: "menu" },
    { field: "sipas_Nenit_P", header: "Sipas Nenit Prokuroria", selected: false, type: "text", display: "menu", dropdown: true },
    { field: "masa_e_sigurisë_kërkuar_nga_Prokurori", header: "Masa e sigurisë kërkuar nga Prokurori", selected: false, type: "text", display: "menu" },
    { field: "data_Vendimit_Pr", header: "Data e Vendimit Prokuroria", selected: false, type: "text", display: "menu", calendar: true },
    { field: "gjykata", header: "Gjykata", selected: false, type: "text", display: "menu" },
    { field: "hetimi", header: "Hetimi", selected: false, type: "text", display: "menu" },
    { field: "data_Vedim_Gjk", header: "Data Vedim Gjykata", selected: false, type: "text", display: "menu", calendar: true },
    { field: "gjygjtari_paraprak", header: "Gjygjtari paraprak", selected: false, type: "text", display: "menu" },
    { field: "neni_GJP", header: "Neni Gjygjtari paraprak", selected: false, type: "text", display: "menu", dropdown: true },
    { field: "data_Gjygjtari_pr", header: "Data Gjygjtari paraprak", selected: false, type: "text", display: "menu", calendar: true },
    { field: "masa_e_sigurise_Gjykata_Shk1", header: "Masa e sigurise Gjykata Shk1", selected: false, type: "text", display: "menu" },
    { field: "data_mases_Gjykates_Shk1", header: "Data mases Gjykates Shk1", selected: false, type: "text", display: "menu", calendar: true },
    { field: "vendimi_Gjykates_Shk1", header: "Vendimi Gjykates Shk1", selected: false, type: "text", display: "menu" },
    { field: "neni_GJSH1", header: "Neni Gjykates Shk1", selected: false, type: "text", display: "menu", dropdown: true },
    { field: "data_Vendimit_GJ_SH1", header: "Data Vendimit Gjykates SH1", selected: false, type: "text", display: "menu", calendar: true },
    { field: "vendimi_Apelit", header: "Vendimi Apelit", selected: false, type: "text", display: "menu" },
    { field: "neni_Apeli", header: "Neni Apeli", selected: false, type: "text", display: "menu", dropdown: true },
    { field: "data_Vendim_Apeli", header: "Data Vendim Apeli", selected: false, type: "text", display: "menu", calendar: true },
    { field: "masa_e_sigurisë_në_Gjykatën_e_Apelit", header: "Masa e sigurisë në Gjykatën e Apelit", selected: false, type: "text", display: "menu" },
    { field: "data_mas_sig_Apeli", header: "Data mases sigurise Apeli", selected: false, type: "text", display: "menu", calendar: true },
    { field: "vendim_Gjykata_Larte", header: "Vendim Gjykata Larte", selected: false, type: "text", display: "menu" },
    { field: "data_Gjykata_Larte", header: "Data Gjykata Larte", selected: false, type: "text", display: "menu", calendar: true },
    { field: "neni_GJL", header: "Neni Gjykata Larte", selected: false, type: "text", display: "menu", dropdown: true },
    { field: "masa_e_sigurisë_në_Gjykatën_e_Larte", header: "Masa e sigurisë në Gjykatën e Larte", selected: false, type: "text", display: "menu" },
    { field: "data_mas_sig_Gj_Larte", header: "Data e mases sigurise Gjykata Larte", selected: false, type: "text", display: "menu", calendar: true },
    { field: "komente", header: "Komente", selected: false, type: "text", display: "menu", textArea: true },
  ]

  oldCeshtje$: Observable<OldCeshtja>;
  valForm: FormGroup;
  notifier = new Subject();
  sipasNenit = ["Neni 135", "Neni 244", "Neni 244/a", "Neni 245", "Neni 245/1", "Neni 248", "Neni 256", "Neni 257", "Neni 257/a", "Neni 258", "Neni 259", "Neni 259/a ", "Neni 260", "Neni 283", "Neni 283/a", "Neni 283/b", "Neni 283/1", "Neni 283/2", "Neni 283/3", "Neni 284", "Neni 284/a", "Neni 284/ç", "Neni 284/c,", "Neni 285/a", "Neni 285/b", "Neni 286", "Neni 312", "Neni 313", "Neni 319", "Neni 319/a", "Neni 319/b", "Neni 319/c", "Neni 319/ç", "Neni 319/d", "Neni 319/dh", "Neni 319/e", "Neni 328", "Neni 333", "Neni 333/a", "Neni 334"];
  @Input() show: boolean;
  @Input() oldCeshtje: OldCeshtja;
  @Input() method: string;
  @Output() toggleModal = new EventEmitter<boolean>();

  constructor(private _store: Store<AppState>, private fb: FormBuilder, private _oldCeshtjaService: OldCeshtjaService) {
    // if (this.oldCeshtje) this.display = true;
    this.valForm = fb.group({
      "emri": [this.oldCeshtje?.emri || null],
      "mbiemri": [this.oldCeshtje?.mbiemri || null],
      "data_e_ngjarjes": [new Date().toDateString()],
      "kategoria": [this.oldCeshtje?.kategoria || null],
      "sipas_Nenit": [this.oldCeshtje?.sipas_Nenit || null],
      "policia": [this.oldCeshtje?.policia || null],
      "prokuroria": [this.oldCeshtje?.prokuroria || null],
      "sipas_Nenit_P": [this.oldCeshtje?.sipas_Nenit_P || null],
      "masa_e_sigurisë_kërkuar_nga_Prokurori": [this.oldCeshtje?.masa_e_sigurisë_kërkuar_nga_Prokurori || null],
      "data_Vendimit_Pr": [new Date().toDateString()],
      "gjykata": [this.oldCeshtje?.gjykata || null],
      "hetimi": [this.oldCeshtje?.hetimi || null],
      "data_Vedim_Gjk": [new Date().toDateString()],
      "gjygjtari_paraprak": [this.oldCeshtje?.gjygjtari_paraprak || null],
      "neni_GJP": [this.oldCeshtje?.neni_GJP || null],
      "data_Gjygjtari_pr": [new Date().toDateString()],
      "masa_e_sigurise_Gjykata_Shk1": [this.oldCeshtje?.masa_e_sigurise_Gjykata_Shk1 || null],
      "data_mases_Gjykates_Shk1": [new Date().toDateString()],
      "vendimi_Gjykates_Shk1": [this.oldCeshtje?.vendimi_Gjykates_Shk1 || null],
      "neni_GJSH1": [this.oldCeshtje?.neni_GJSH1 || null],
      "data_Vendimit_GJ_SH1": [new Date().toDateString()],
      "vendimi_Apelit": [this.oldCeshtje?.vendimi_Apelit || null],
      "neni_Apeli": [this.oldCeshtje?.neni_Apeli || null],
      "data_Vendim_Apeli": [new Date().toDateString()],
      "masa_e_sigurisë_në_Gjykatën_e_Apelit": [this.oldCeshtje?.masa_e_sigurisë_në_Gjykatën_e_Apelit || null],
      "data_mas_sig_Apeli": [new Date().toDateString()],
      "vendim_Gjykata_Larte": [this.oldCeshtje?.vendim_Gjykata_Larte || null],
      "data_Gjykata_Larte": [new Date().toDateString()],
      "neni_GJL": [this.oldCeshtje?.neni_GJL || null],
      "masa_e_sigurisë_në_Gjykatën_e_Larte": [this.oldCeshtje?.masa_e_sigurisë_në_Gjykatën_e_Larte || null],
      "data_mas_sig_Gj_Larte": [new Date().toDateString()],
      "komente": [this.oldCeshtje?.komente || null],
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    // console.log(new Date(this.oldCeshtje?.data_e_ngjarjes))
    this.valForm.patchValue({
      "emri": this.oldCeshtje?.emri,
      "mbiemri": this.oldCeshtje?.mbiemri,
      "data_e_ngjarjes": this.oldCeshtje?.data_e_ngjarjes ? new Date(this.oldCeshtje?.data_e_ngjarjes) : null,
      "kategoria": this.oldCeshtje?.kategoria,
      "sipas_Nenit": this.oldCeshtje?.sipas_Nenit,
      "policia": this.oldCeshtje?.policia,
      "prokuroria": this.oldCeshtje?.prokuroria,
      "sipas_Nenit_P": this.oldCeshtje?.sipas_Nenit_P,
      "masa_e_sigurisë_kërkuar_nga_Prokurori": this.oldCeshtje?.masa_e_sigurisë_kërkuar_nga_Prokurori,
      "data_Vendimit_Pr": this.oldCeshtje?.data_Vendimit_Pr ? new Date(this.oldCeshtje?.data_Vendimit_Pr) : null,
      "gjykata": this.oldCeshtje?.gjykata,
      "hetimi": this.oldCeshtje?.hetimi,
      "data_Vedim_Gjk": this.oldCeshtje?.data_Vedim_Gjk ? new Date(this.oldCeshtje?.data_Vedim_Gjk) : null,
      "gjygjtari_paraprak": this.oldCeshtje?.gjygjtari_paraprak,
      "neni_GJP": this.oldCeshtje?.neni_GJP,
      "data_Gjygjtari_pr": this.oldCeshtje?.data_Gjygjtari_pr ? new Date(this.oldCeshtje?.data_Gjygjtari_pr) : null,
      "masa_e_sigurise_Gjykata_Shk1": this.oldCeshtje?.masa_e_sigurise_Gjykata_Shk1,
      "data_mases_Gjykates_Shk1": this.oldCeshtje?.data_mases_Gjykates_Shk1 ? new Date(this.oldCeshtje?.data_mases_Gjykates_Shk1) : null,
      "vendimi_Gjykates_Shk1": this.oldCeshtje?.vendimi_Gjykates_Shk1,
      "neni_GJSH1": this.oldCeshtje?.neni_GJSH1,
      "data_Vendimit_GJ_SH1": this.oldCeshtje?.data_Vendimit_GJ_SH1 ? new Date(this.oldCeshtje?.data_Vendimit_GJ_SH1) : null,
      "vendimi_Apelit": this.oldCeshtje?.vendimi_Apelit,
      "neni_Apeli": this.oldCeshtje?.neni_Apeli,
      "data_Vendim_Apeli": this.oldCeshtje?.data_Vendim_Apeli ? new Date(this.oldCeshtje?.data_Vendim_Apeli) : null,
      "masa_e_sigurisë_në_Gjykatën_e_Apelit": this.oldCeshtje?.masa_e_sigurisë_në_Gjykatën_e_Apelit,
      "data_mas_sig_Apeli": this.oldCeshtje?.data_mas_sig_Apeli ? new Date(this.oldCeshtje?.data_mas_sig_Apeli) : null,
      "vendim_Gjykata_Larte": this.oldCeshtje?.vendim_Gjykata_Larte,
      "data_Gjykata_Larte": this.oldCeshtje?.data_Gjykata_Larte ? new Date(this.oldCeshtje?.data_Gjykata_Larte) : null,
      "neni_GJL": this.oldCeshtje?.neni_GJL,
      "masa_e_sigurisë_në_Gjykatën_e_Larte": this.oldCeshtje?.masa_e_sigurisë_në_Gjykatën_e_Larte,
      "data_mas_sig_Gj_Larte": this.oldCeshtje?.data_mas_sig_Gj_Larte ? new Date(this.oldCeshtje?.data_mas_sig_Gj_Larte) : null,
      "komente": this.oldCeshtje?.komente,
    })
  }

  ngOnInit(): void {
  }

  save() {
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    const oldCeshtjeUpdated: OldCeshtja = {
      ...this.oldCeshtje,
      ...this.valForm.value
    }
    const update: Update<OldCeshtja> = {
      id: oldCeshtjeUpdated.id,
      changes: oldCeshtjeUpdated
    };
    this._store.dispatch(OldCeshtjeDbActions.upsertOldCeshtjeDb({ oldCeshtje: oldCeshtjeUpdated }));

    this.show = false;
  }

  closeModal() {
    this.show = false;
    this.toggleModal.emit(false);
  }

  clearState() {
    this.show = false;
  }

  ngOnDestroy() {
    this.notifier.next(true)
    this.notifier.complete()
  }
}
