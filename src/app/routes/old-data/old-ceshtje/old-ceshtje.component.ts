import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OldCeshtja } from 'src/app/shared/entities/old.ceshtja';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-old-ceshtje',
  templateUrl: './old-ceshtje.component.html',
  styleUrls: ['./old-ceshtje.component.scss']
})
export class OldCeshtjeComponent implements OnInit {

  public keys = [
    { field: "Id", header: "Id", selected: true, type: "text", display: "menu" },
    { field: "Emri", header: "Emri", selected: true, type: "text", display: "menu" },
    { field: "Mbiemri", header: "Mbiemri", selected: true, type: "text", display: "menu" },
    { field: "Data_e_ngjarjes", header: "Data e ngjarjes", selected: true, type: "text", display: "menu" },
    { field: "Kategoria", header: "Kategoria", selected: true, type: "text", display: "menu" },
    { field: "Sipas Nenit", header: "Sipas Nenit", selected: true, type: "text", display: "menu" },
    { field: "Policia", header: "Policia", selected: false, type: "text", display: "menu", textArea: true },
    { field: "Prokuroria", header: "Prokuroria", selected: false, type: "text", display: "menu" },
    { field: "Sipas Nenit_P", header: "Sipas Nenit_P", selected: false, type: "text", display: "menu" },
    { field: "Masa e sigurisë kërkuar nga Prokurori", header: "MSKNP", selected: false, type: "text", display: "menu" },
    { field: "Data Vendimit Pr", header: "Data Vendimit Pr", selected: false, type: "text", display: "menu" },
    { field: "Gjykata", header: "Gjykata", selected: false, type: "text", display: "menu" },
    { field: "Hetimi", header: "Hetimi", selected: false, type: "text", display: "menu" },
    { field: "Data Vedim Gjk", header: "Data Vedim Gjk", selected: false, type: "text", display: "menu" },
    { field: "Gjygjtari paraprak", header: "Gjygjtari paraprak", selected: false, type: "text", display: "menu" },
    { field: "Neni_GJP", header: "Neni GJP", selected: false, type: "text", display: "menu" },
    { field: "Data Gjygjtari pr", header: "Data Gjygjtari pr", selected: false, type: "text", display: "menu" },
    { field: "Masa e sigurise Gjykata Shk1", header: "MSGJSH1", selected: false, type: "text", display: "menu" },
    { field: "Data mases Gjykates Shk1", header: "DMSGJSH1", selected: false, type: "text", display: "menu" },
    { field: "Vendimi Gjykates Shk1", header: "VGJSHK1", selected: false, type: "text", display: "menu" },
    { field: "Neni_GJSH1", header: "Neni_GJSH1", selected: false, type: "text", display: "menu" },
    { field: "Data Vendimit GJ SH1", header: "DVGJSH1", selected: false, type: "text", display: "menu" },
    { field: "Vendimi Apelit", header: "Vendimi Apelit", selected: false, type: "text", display: "menu" },
    { field: "Neni_Apeli", header: "Neni Apeli", selected: false, type: "text", display: "menu" },
    { field: "Data Vendim Apeli", header: "Data Vendim Apeli", selected: false, type: "text", display: "menu" },
    { field: "Masa e sigurisë në Gjykatën e Apelit", header: "MSGJA", selected: false, type: "text", display: "menu" },
    { field: "Data mas sig Apeli", header: "DMSGJA", selected: false, type: "text", display: "menu" },
    { field: "Vendim Gjykata Larte", header: "Vendim Gjykata Larte", selected: false, type: "text", display: "menu" },
    { field: "Data Gjykata Larte", header: "Data Gjykata Larte", selected: false, type: "text", display: "menu" },
    { field: "Neni_GJL", header: "Neni GJL", selected: false, type: "text", display: "menu" },
    { field: "Masa e sigurisë në Gjykatën e Larte", header: "MSGJL", selected: false, type: "text", display: "menu" },
    { field: "Data mas sig Gj Larte", header: "DMSGJL", selected: false, type: "text", display: "menu" },
    { field: "Komente", header: "Komente", selected: false, type: "text", display: "menu", textArea: true },
  ]

  oldCeshtje$: Observable<OldCeshtja>;

  constructor(private _store: Store<AppState>) { }



  ngOnInit(): void {
    this.oldCeshtje$ = this._store.select((state) => state.oldCeshtjet.oldCeshtje);
  }

}
