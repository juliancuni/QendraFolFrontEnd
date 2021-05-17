import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { Observable, Subject } from 'rxjs';
import { OldCeshtjeDto } from 'src/app/shared/sdk/models';
import { OldCeshtjetService } from 'src/app/shared/sdk/services';
import { OldCeshtjeEntityService } from 'src/app/shared/services/entity-services/old-ceshtje-entity.service';

@Component({
  selector: 'app-old-ceshtje',
  templateUrl: './old-ceshtje.component.html',
  styleUrls: ['./old-ceshtje.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OldCeshtjeComponent implements OnInit, OnDestroy, OnChanges {


  public keys = [
    { field: "emri", header: "Emri", selected: true, type: "text", display: "menu" },
    { field: "mbiemri", header: "Mbiemri", selected: true, type: "text", display: "menu" },
    { field: "data_e_ngjarjes", header: "Data e ngjarjes", selected: true, type: "text", display: "menu", calendar: true },
    { field: "kategoria", header: "Kategoria", selected: true, type: "text", display: "menu", dropdown: true },
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

  oldCeshtje$: Observable<OldCeshtjeDto>;
  valForm: FormGroup;
  notifier = new Subject();
  nenet = ["Neni 135", "Neni 244", "Neni 244/a", "Neni 245", "Neni 245/1", "Neni 248", "Neni 256", "Neni 257", "Neni 257/a", "Neni 258", "Neni 259", "Neni 259/a ", "Neni 260", "Neni 283", "Neni 283/a", "Neni 283/b", "Neni 283/1", "Neni 283/2", "Neni 283/3", "Neni 284", "Neni 284/a", "Neni 284/ç", "Neni 284/c,", "Neni 285/a", "Neni 285/b", "Neni 286", "Neni 312", "Neni 313", "Neni 319", "Neni 319/a", "Neni 319/b", "Neni 319/c", "Neni 319/ç", "Neni 319/d", "Neni 319/dh", "Neni 319/e", "Neni 328", "Neni 333", "Neni 333/a", "Neni 334"];
  kategoria = ["Droga", "Korrupsioni"];
  prokuroria = ["Pushim", "Mosfillim", "Kërkesë për gjykim", "Sekuestrim", " Kërkesë për revokim", " Kërkesë për bashkim", " Zv masë sigurie"];
  masa_e_sigurise = ["ndalimi jashtë shtetit", "paraqitje në polic.gjyq", "qëndrim në një vend", "garancia pasurore", "arresti në shtëpi", "arresti në burg", "shtrimi i përkohshëm", "pezullimi i ushtrimit të detyres", "ndalimi i përkohshëm i veprimtarive"];
  hetimi = ["mosfillim çështje", "pushim ceshtje"];
  gjygjtari_paraprak = ["pushim i ceshtjes", "kthen aktet prokurorit për vep.proced", "kthen aktet për formul.akuz", "revokon vendimin e pushimit", "dërgim i çështjes në gjyq"];
  vendimi_Gjykates_Shk1 = ["i pafajshëm", "fajtor"];
  vendimi_Apelit = ["lë në fuqi vendimin e Gjyk.Shk.I", "Ndryshon vendimin e Gjyk.Shk.I", "Prish vendimin dhe pushon çështjen", "Prish vendimin dhe kthen aktet Gjyk.Shk.I"];
  vendim_Gjykata_Larte = ["Pranim rekursi", "Mospranim rekursi & lë në fuqi vend.Gj.Ap", "prish vend GJ.A dhe le ne fuqi vend GJ.1", "prish vendimin e Gjyk.Ap. dhe kthen aktet", "prish vendimin e Gjyk.Ap. dhe pushon çështjen", "shqyrton në Kolegje të Bashkuara"];

  @Input() show: boolean;
  @Input() oldCeshtje: OldCeshtjeDto;
  @Input() method: 'create' | 'update';
  @Output() toggleModal = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private _oldCeshtjeService: OldCeshtjeEntityService
  ) {
    this.valForm = fb.group({
      "emri": [this.oldCeshtje?.emri || null],
      "mbiemri": [this.oldCeshtje?.mbiemri || null],
      "data_e_ngjarjes": [new Date()],
      "kategoria": [this.oldCeshtje?.kategoria || null],
      "sipas_nenit": [this.oldCeshtje?.sipas_nenit || null],
      "policia": [this.oldCeshtje?.policia || null],
      "prokuroria": [this.oldCeshtje?.prokuroria || null],
      "sipas_nenit_p": [this.oldCeshtje?.sipas_nenit_p || null],
      "masa_e_sigurisë_kërkuar_nga_prokurori": [this.oldCeshtje?.masa_e_sigurisë_kërkuar_nga_prokurori || null],
      "data_vendimit_pr": [new Date()],
      "gjykata": [this.oldCeshtje?.gjykata || null],
      "hetimi": [this.oldCeshtje?.hetimi || null],
      "data_vedim_gjk": [new Date()],
      "gjygjtari_paraprak": [this.oldCeshtje?.gjygjtari_paraprak || null],
      "neni_gjp": [this.oldCeshtje?.neni_gjp || null],
      "data_gjygjtari_pr": [new Date()],
      "masa_e_sigurise_gjykata_shk1": [this.oldCeshtje?.masa_e_sigurise_gjykata_shk1 || null],
      "data_mases_gjykates_shk1": [new Date()],
      "vendimi_gjykates_shk1": [this.oldCeshtje?.vendimi_gjykates_shk1 || null],
      "neni_gjsh1": [this.oldCeshtje?.neni_gjsh1 || null],
      "data_vendimit_gj_sh1": [new Date()],
      "vendimi_apelit": [this.oldCeshtje?.vendimi_apelit || null],
      "neni_apeli": [this.oldCeshtje?.neni_apeli || null],
      "data_vendim_apeli": [new Date()],
      "masa_e_sigurisë_në_gjykatën_e_apelit": [this.oldCeshtje?.masa_e_sigurisë_në_gjykatën_e_apelit || null],
      "data_mas_sig_apeli": [new Date()],
      "vendim_gjykata_larte": [this.oldCeshtje?.vendim_gjykata_larte || null],
      "data_gjykata_larte": [new Date()],
      "neni_gjl": [this.oldCeshtje?.neni_gjl || null],
      "masa_e_sigurisë_në_gjykatën_e_larte": [this.oldCeshtje?.masa_e_sigurisë_në_gjykatën_e_larte || null],
      "data_mas_sig_gj_larte": [new Date()],
      "komente": [this.oldCeshtje?.komente || null],
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.valForm.patchValue({
      "emri": this.oldCeshtje?.emri,
      "mbiemri": this.oldCeshtje?.mbiemri,
      "data_e_ngjarjes": this.oldCeshtje?.data_e_ngjarjes ? new Date(this.oldCeshtje?.data_e_ngjarjes) : null,
      "kategoria": this.oldCeshtje?.kategoria,
      "sipas_nenit": this.oldCeshtje?.sipas_nenit,
      "policia": this.oldCeshtje?.policia,
      "prokuroria": this.oldCeshtje?.prokuroria,
      "sipas_nenit_p": this.oldCeshtje?.sipas_nenit_p,
      "masa_e_sigurisë_kërkuar_nga_prokurori": this.oldCeshtje?.masa_e_sigurisë_kërkuar_nga_prokurori,
      "data_vendimit_pr": this.oldCeshtje?.data_vendimit_pr ? new Date(this.oldCeshtje?.data_vendimit_pr) : null,
      "gjykata": this.oldCeshtje?.gjykata,
      "hetimi": this.oldCeshtje?.hetimi,
      "data_vedim_gjk": this.oldCeshtje?.data_vedim_gjk ? new Date(this.oldCeshtje?.data_vedim_gjk) : null,
      "gjygjtari_paraprak": this.oldCeshtje?.gjygjtari_paraprak,
      "neni_gjp": this.oldCeshtje?.neni_gjp,
      "data_gjygjtari_pr": this.oldCeshtje?.data_gjygjtari_pr ? new Date(this.oldCeshtje?.data_gjygjtari_pr) : null,
      "masa_e_sigurise_gjykata_shk1": this.oldCeshtje?.masa_e_sigurise_gjykata_shk1,
      "data_mases_gjykates_shk1": this.oldCeshtje?.data_mases_gjykates_shk1 ? new Date(this.oldCeshtje?.data_mases_gjykates_shk1) : null,
      "vendimi_gjykates_shk1": this.oldCeshtje?.vendimi_gjykates_shk1,
      "neni_gjsh1": this.oldCeshtje?.neni_gjsh1,
      "data_vendimit_gj_sh1": this.oldCeshtje?.data_vendimit_gj_sh1 ? new Date(this.oldCeshtje?.data_vendimit_gj_sh1) : null,
      "vendimi_apelit": this.oldCeshtje?.vendimi_apelit,
      "neni_apeli": this.oldCeshtje?.neni_apeli,
      "data_vendim_apeli": this.oldCeshtje?.data_vendim_apeli ? new Date(this.oldCeshtje?.data_vendim_apeli) : null,
      "masa_e_sigurisë_në_gjykatën_e_apelit": this.oldCeshtje?.masa_e_sigurisë_në_gjykatën_e_apelit,
      "data_mas_sig_apeli": this.oldCeshtje?.data_mas_sig_apeli ? new Date(this.oldCeshtje?.data_mas_sig_apeli) : null,
      "vendim_gjykata_larte": this.oldCeshtje?.vendim_gjykata_larte,
      "data_gjykata_larte": this.oldCeshtje?.data_gjykata_larte ? new Date(this.oldCeshtje?.data_gjykata_larte) : null,
      "neni_gjl": this.oldCeshtje?.neni_gjl,
      "masa_e_sigurisë_në_gjykatën_e_larte": this.oldCeshtje?.masa_e_sigurisë_në_gjykatën_e_larte,
      "data_mas_sig_gj_larte": this.oldCeshtje?.data_mas_sig_gj_larte ? new Date(this.oldCeshtje?.data_mas_sig_gj_larte) : null,
      "komente": this.oldCeshtje?.komente,
    })
  }

  ngOnInit(): void {
  }

  save() {
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    const oldCeshtjeUpdated: OldCeshtjeDto = {
      ...this.oldCeshtje,
      ...this.valForm.value
    }
    const update: Update<OldCeshtjeDto> = {
      id: oldCeshtjeUpdated.id,
      changes: oldCeshtjeUpdated
    };
    if (this.method === 'create') {
      this._oldCeshtjeService.add(this.valForm.value);
      // this._store.dispatch(OldCeshtjeDbActions.createOldCeshtjeDb({ oldCeshtje: oldCeshtjeUpdated }));
    }
    if (this.method === 'update') {
      this._oldCeshtjeService.update(oldCeshtjeUpdated);
      // this._store.dispatch(OldCeshtjeDbActions.upsertOldCeshtjeDb({ oldCeshtje: oldCeshtjeUpdated }));
    }

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
