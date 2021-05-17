import { ChangeDetectionStrategy, Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { OldCeshtjeDto } from 'src/app/shared/sdk/models';
// import { AppState } from 'src/app/store';
// import { selectAllOldCeshtjeDb } from 'src/app/store/selectors/old-ceshtje-db.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<OldCeshtjeDto>();

  toppings = new FormControl();
  cols = ['id', 'emri', 'mbiemri'];

  displayedColumns: string[] = ['id', 'emri', 'mbiemri'];
  constructor(
    // private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this._store.pipe(select(selectAllOldCeshtjeDb)).subscribe((res) => {
    //   this.dataSource.data = res;
    // });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
