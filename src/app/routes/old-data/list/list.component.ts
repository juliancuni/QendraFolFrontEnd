import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OldCeshtjeDto } from 'src/app/shared/sdk/models';
import { OldCeshtjeService } from 'src/app/shared/services/data-services/old-ceshtje.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  columns: Object[];
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selectColumnsFC = new FormControl();
  dataSource: MatTableDataSource<OldCeshtjeDto>;

  constructor(
    private readonly _oldCeshtjeDataService: OldCeshtjeService
  ) {
    this._oldCeshtjeDataService.getAll().subscribe((oldCeshtjet: OldCeshtjeDto[]) => {
      this.dataSource = new MatTableDataSource(oldCeshtjet);
      this.paginator._changePageSize(15);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.displaySelectedColumns();
  }

  ngOnInit(): void {
    this.columns = this.oldCeshtjeFields();
    this.selectColumnsFC.setValue(this.columns.filter(selCol => selCol["selected"]));
  }


  displaySelectedColumns() {
    this.oldCeshtjeFields().forEach((selectedColumn) => {
      if (selectedColumn.selected) this.displayedColumns.push(selectedColumn.key);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onColumnChange(ev) {
    this.displayedColumns = [];
    ev.value.forEach(val => {
      val.selected = true;
      this.displayedColumns.push(val.key);
    }, ev.value);
    this.selectColumnsFC.setValue(ev.value);
  }


  oldCeshtjeFields() {
    return [
      { key: 'oldid', datatype: "text", selected: false },
      { key: 'emri', datatype: "text", selected: true },
      { key: 'mbiemri', datatype: "text", selected: true },
      { key: 'data_e_ngjarjes', datatype: "date", selected: true },
      { key: 'kategoria', datatype: "text", selected: true },
      { key: 'policia', datatype: "text", selected: false },
      { key: 'sipas_nenit', datatype: "text", selected: true },
      { key: 'prokuroria', datatype: "text", selected: false },
      { key: 'komente', datatype: "text", selected: false },

      { key: 'data_gjygjtari_pr', datatype: "date", selected: false },
      { key: 'data_gjykata_larte', datatype: "date", selected: false },
      { key: 'data_mas_sig_apeli', datatype: "date", selected: false },
      { key: 'data_mas_sig_gj_larte', datatype: "date", selected: false },
      { key: 'data_mases_gjykates_shk1', datatype: "date", selected: false },
      { key: 'data_vedim_gjk', datatype: "date", selected: false },
      { key: 'data_vendim_apeli', datatype: "date", selected: false },
      { key: 'data_vendimit_gj_sh1', datatype: "date", selected: false },
      { key: 'data_vendimit_pr', datatype: "date", selected: false },
      { key: 'gjygjtari_paraprak', datatype: "text", selected: false },
      { key: 'gjykata', datatype: "text", selected: false },
      { key: 'hetimi', datatype: "text", selected: false },
      { key: 'id', datatype: "text", selected: false },
      { key: 'masa_e_sigurise_gjykata_shk1', datatype: "text", selected: false },
      { key: 'masa_e_sigurisë_kërkuar_nga_prokurori', datatype: "text", selected: false },
      { key: 'masa_e_sigurisë_në_gjykatën_e_apelit', datatype: "text", selected: false },
      { key: 'masa_e_sigurisë_në_gjykatën_e_larte', datatype: "text", selected: false },
      { key: 'neni_apeli', datatype: "text", selected: false },
      { key: 'neni_gjl', datatype: "text", selected: false },
      { key: 'neni_gjp', datatype: "text", selected: false },
      { key: 'neni_gjsh1', datatype: "text", selected: false },
      { key: 'sipas_nenit_p', datatype: "text", selected: false },
      { key: 'vendim_gjykata_larte', datatype: "text", selected: false },
      { key: 'vendimi_apelit', datatype: "text", selected: false },
      { key: 'vendimi_gjykates_shk1', datatype: "text", selected: false },
      { key: 'edit', datatype: "text", selected: true },
    ]
  }

}


