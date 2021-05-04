import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OldCeshtja } from 'src/app/shared/sdk/models';
import { OldCeshtjaService } from 'src/app/shared/sdk/services';
import { AppState } from 'src/app/store';
import * as OldCeshtjeActions from 'src/app/store/actions/old-ceshtje.actions';

@Component({
  selector: 'app-old-ceshtje',
  templateUrl: './old-ceshtje.component.html',
  styleUrls: ['./old-ceshtje.component.scss']
})
export class OldCeshtjeComponent implements OnInit, OnDestroy {

  public keys = [
    // { field: "oldId", header: "Id", selected: true, type: "text", display: "menu" },
    { field: "emri", header: "Emri", selected: true, type: "text", display: "menu" },
    { field: "mbiemri", header: "Mbiemri", selected: true, type: "text", display: "menu" },
    { field: "data_e_ngjarjes", header: "Data e ngjarjes", selected: true, type: "text", display: "menu" },
    { field: "kategoria", header: "Kategoria", selected: true, type: "text", display: "menu" },
    { field: "sipas_Nenit", header: "Sipas Nenit", selected: true, type: "text", display: "menu" },
    { field: "policia", header: "Policia", selected: false, type: "text", display: "menu", textArea: true },
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
    { field: "komente", header: "Komente", selected: false, type: "text", display: "menu", textArea: true },
  ]

  oldCeshtje$: Observable<OldCeshtja>;
  valForm: FormGroup;
  componentDestroyed$: Subject<boolean> = new Subject();
  oldCeshtje: OldCeshtja;
  constructor(private _store: Store<AppState>, private fb: FormBuilder, private _oldCeshtjaService: OldCeshtjaService) {
    this.valForm = fb.group({
      "emri": [null],
      "mbiemri": [null],
      "data_e_ngjarjes": [null],
      "kategoria": [null],
      "sipas_Nenit": [null],
      "policia": [null],
      "prokuroria": [null],
      "sipas_Nenit_P": [null],
      "masa_e_sigurisë_kërkuar_nga_Prokurori": [null],
      "data_Vendimit_Pr": [null],
      "gjykata": [null],
      "hetimi": [null],
      "data_Vedim_Gjk": [null],
      "gjygjtari_paraprak": [null],
      "neni_GJP": [null],
      "data_Gjygjtari_pr": [null],
      "masa_e_sigurise_Gjykata_Shk1": [null],
      "data_mases_Gjykates_Shk1": [null],
      "vendimi_Gjykates_Shk1": [null],
      "neni_GJSH1": [null],
      "data_Vendimit_GJ_SH1": [null],
      "vendimi_Apelit": [null],
      "neni_Apeli": [null],
      "data_Vendim_Apeli": [null],
      "masa_e_sigurisë_në_Gjykatën_e_Apelit": [null],
      "data_mas_sig_Apeli": [null],
      "vendim_Gjykata_Larte": [null],
      "data_Gjykata_Larte": [null],
      "neni_GJL": [null],
      "masa_e_sigurisë_në_Gjykatën_e_Larte": [null],
      "data_mas_sig_Gj_Larte": [null],
      "komente": [null],
    });
  }



  ngOnInit(): void {
    this._store.select((state) => state.oldCeshtjet.oldCeshtje)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((oldC) => {
        if (oldC) {
          this.oldCeshtje = oldC;
          this.valForm.patchValue({
            "emri": oldC.emri,
            "mbiemri": oldC.mbiemri,
            "data_e_ngjarjes": oldC.data_e_ngjarjes,
            "kategoria": oldC.kategoria,
            "sipas_Nenit": oldC.sipas_Nenit,
            "policia": oldC.policia,
            "prokuroria": oldC.prokuroria,
            "sipas_Nenit_P": oldC.sipas_Nenit_P,
            "masa_e_sigurisë_kërkuar_nga_Prokurori": oldC.masa_e_sigurisë_kërkuar_nga_Prokurori,
            "data_Vendimit_Pr": oldC.data_Vendimit_Pr,
            "gjykata": oldC.gjykata,
            "hetimi": oldC.hetimi,
            "data_Vedim_Gjk": oldC.data_Vedim_Gjk,
            "gjygjtari_paraprak": oldC.gjygjtari_paraprak,
            "neni_GJP": oldC.neni_GJP,
            "data_Gjygjtari_pr": oldC.data_Gjygjtari_pr,
            "masa_e_sigurise_Gjykata_Shk1": oldC.masa_e_sigurise_Gjykata_Shk1,
            "data_mases_Gjykates_Shk1": oldC.data_mases_Gjykates_Shk1,
            "vendimi_Gjykates_Shk1": oldC.vendimi_Gjykates_Shk1,
            "neni_GJSH1": oldC.neni_GJSH1,
            "data_Vendimit_GJ_SH1": oldC.data_Vendimit_GJ_SH1,
            "vendimi_Apelit": oldC.vendimi_Apelit,
            "neni_Apeli": oldC.neni_Apeli,
            "data_Vendim_Apeli": oldC.data_Vendim_Apeli,
            "masa_e_sigurisë_në_Gjykatën_e_Apelit": oldC.masa_e_sigurisë_në_Gjykatën_e_Apelit,
            "data_mas_sig_Apeli": oldC.data_mas_sig_Apeli,
            "vendim_Gjykata_Larte": oldC.vendim_Gjykata_Larte,
            "data_Gjykata_Larte": oldC.data_Gjykata_Larte,
            "neni_GJL": oldC.neni_GJL,
            "masa_e_sigurisë_në_Gjykatën_e_Larte": oldC.masa_e_sigurisë_në_Gjykatën_e_Larte,
            "data_mas_sig_Gj_Larte": oldC.data_mas_sig_Gj_Larte,
            "komente": oldC.komente,
          })
        }
      });
  }

  save(ev, value: OldCeshtja) {
    // ev.preventDefault();
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    if (this.oldCeshtje) {
      value.id = this.oldCeshtje.id;
      value.oldId = this.oldCeshtje.oldId;
    }
    // console.log(value);
    this._store.dispatch(OldCeshtjeActions.putOldCeshtjeToDb({ oldCeshtje: value }));
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true)
    this.componentDestroyed$.complete()
  }
}
